import React, {useEffect, useState} from "react";
import '../styles/change-password.css';
import '../styles/forget-password.css';

const ChangePassword = () => {
    const [username, setUsername] = useState("");
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [currentAlert, setCurrentAlert] = useState(""); // Thêm state để theo dõi thông báo hiện tại

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Kiểm tra username đã tồn tại hay chưa
            const usernameCheckResponse = await fetch(`http://localhost:8080/api/checkUsername/${username}`);
            if (!usernameCheckResponse.ok) {
                setError("Tên đăng nhập không tồn tại");
                return;
            } else {
            const response = await fetch("http://localhost:8080/api/forgetPassword", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({username, newPass, confirmPassword}),
            });

            if (response.ok) {
                const successMessage = await response.text();
                setSuccess(successMessage);
                setCurrentAlert("success"); // Cập nhật thông báo hiện tại là thành công
            } else {
                const errorMessage = await response.text();
                setError(errorMessage);
                setCurrentAlert("error"); // Cập nhật thông báo hiện tại là lỗi
            }
        }
            }catch (error) {
            console.error("Error:", error);
        }
    };

    const handleNewPasswordChange = (event) => {
        const newPassword = event.target.value;
        setNewPass(newPassword);
        if (newPassword.length < 8) {
            setCurrentAlert("error");
            setError("Mật khẩu phải có ít nhất 8 ký tự");
        } else {
            setError("");
        }
    };

    const handleConfirmPasswordChange = (event) => {
        const newRePassword = event.target.value;
        setConfirmPassword(newRePassword);
        if (newRePassword !== newPass) {
            setCurrentAlert("error");
            setError("Mật khẩu nhập lại không khớp");
        } else {
            setError("");
        }
    };
    // Function to handle checking username
    const checkUsername = async (username) => {
        try {
            const response = await fetch(`http://localhost:8080/api/checkUsername/${username}`);
            const data = await response.text();
            if (!response.ok) {
                setError(data);
            }else {
                setError("");
            }
        } catch (error) {
            console.error("Error checking username:", error);
        }
    };

    // Debounce function
    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => func.apply(this, args), delay);
        };
    };

    // Debounced version of checkUsername function with 500ms delay
    const debouncedCheckUsername = debounce(checkUsername, 500);

    // Event handler for username input change
    const handleUsernameChange = (event) => {
        const newUsername = event.target.value;
        setUsername(newUsername);
        debouncedCheckUsername(newUsername); // Debounced check
    };
    return (
        <div id="content">
            <div className="wrapper">
                <div className="form_ctrl">
                    <div className="col_1_1 ml-5">
                        <div id="login" className="frm_content">
                            <h2>Quên mật khẩu</h2>
                            {/* Xử lý hiển thị thông báo nếu cần */}
                            <form onSubmit={handleSubmit}>
                                <div className="input">
                                    <label htmlFor="acc_oldPass"><span className="req">*</span>Tên đăng nhập</label>
                                    <input name="oldPass" value={username} onChange={handleUsernameChange} type="text" maxLength="20" id="acc_username" />
                                </div>
                                <div className="input">
                                    <label htmlFor="acc_newPass"><span className="req">*</span>Mật khẩu mới:</label>
                                    <input name="newPass" value={newPass} onChange={handleNewPasswordChange} type="password" maxLength="20" id="acc_newPass" />
                                </div>
                                <div className="input">
                                    <label htmlFor="acc_confirmPass"><span className="req">*</span>Xác nhận:</label>
                                    <input name="confirmPass" value={confirmPassword} onChange={handleConfirmPasswordChange} type="password" maxLength="20" id="acc_confirmPass" />
                                    {/* Thông báo lỗi nếu cần */}
                                </div>
                                {currentAlert === "error" && error && <div className="alert alert-danger">{error}</div>}
                                {currentAlert === "success" && success && <div className="alert alert-success">{success}</div>}
                                <button id="btn-save" type="submit" className="button">Lưu</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePassword;
