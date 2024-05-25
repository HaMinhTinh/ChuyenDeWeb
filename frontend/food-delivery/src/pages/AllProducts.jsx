import React, { useState, useEffect, useCallback } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col, InputGroup } from "reactstrap";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";
import { FormControl } from "react-bootstrap";

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const [pageNumber, setPageNumber] = useState(0);
    const [sortOption, setSortOption] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const debounce = (func, delay) => {
        let timeoutId;
        return function (...args) {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        };
    };

    const debouncedFetchSuggestions = useCallback(
        debounce(async (query) => {
            try {
                if (query.trim() === "") {
                    setSuggestions([]);
                    setShowSuggestions(false);
                    return;
                }
                const response = await fetch(`http://localhost:8080/api/suggestions?query=${query}`);
                const data = await response.json();
                setSuggestions(data);
                setShowSuggestions(data.length > 0);
            } catch (error) {
                console.error("Lỗi khi lấy gợi ý:", error);
            }
        }, 300), []
    );

    useEffect(() => {
        debouncedFetchSuggestions(searchTerm);
        if (searchTerm === " ") {
            setShowSuggestions(false);
        }
    }, [searchTerm, debouncedFetchSuggestions]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/api/products/allProduct");
                const data = await response.json();
                setAllProducts(data);
                setProducts(data);
                console.log(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const productPerPage = 12;
    const visitedPage = pageNumber * productPerPage;

    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSuggestionClick = (suggestion) => {
        setSuggestions([]);
        setSearchTerm(suggestion);
        setShowSuggestions(false);
    };

    const sortedProducts = filteredProducts.sort((a, b) => {
        switch (sortOption) {
            case "name_asc":
                return a.name.localeCompare(b.name);
            case "name_desc":
                return b.name.localeCompare(a.name);
            case "price_asc":
                return a.price - b.price;
            case "price_desc":
                return b.price - a.price;
            default:
                return 0;
        }
    });

    const displayPage = sortedProducts.slice(
        visitedPage,
        visitedPage + productPerPage
    );

    const pageCount = Math.ceil(sortedProducts.length / productPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <Helmet title="All-Foods">
            <CommonSection title="Tất cả giày" />
            <section>
                <Container>
                    <Row>
                        <Col lg="9" className="offset-lg-3">
                            <div className="search-container">
                                <FormControl
                                    placeholder="Tìm kiếm sản phẩm..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="search-input"
                                />
                                <ul className="suggestion-list" style={{ display: showSuggestions ? 'block' : 'none' }}>
                                    {suggestions.map((suggestion, index) => (
                                        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>{suggestion}</li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg="3">
                            <div className="filter-container">
                                <InputGroup className="mb-3">
                                    <FormControl
                                        as="select"
                                        value={sortOption}
                                        onChange={(e) => setSortOption(e.target.value)}
                                    >
                                        <option value="">Sắp xếp theo...</option>
                                        <option value="name_asc">Tên (A-Z)</option>
                                        <option value="name_desc">Tên (Z-A)</option>
                                        <option value="price_asc">Giá thấp đến cao</option>
                                        <option value="price_desc">Giá cao đến thấp</option>
                                    </FormControl>
                                </InputGroup>
                            </div>
                            <div className="ads-container">
                                <h5>Sự kiện hot trong ngày</h5>
                                <div className="ad">
                                    <img src="https://cdn.authentic-shoes.com/wp-content/uploads/2023/07/sneakercon-conventionctr-1-scaled.jpg.webp" alt="Ad 1" className="ad-image" />
                                    <p>Lễ hội giày trên toàn thế giới</p>
                                </div>
                                <div className="ad">
                                    <img src="https://dms.gov.vn/documents/53598/0/z5221766059537_c6047d5fff1ef38ff9df96b3be7f5594.jpg/a9fd2fcb-5f5a-4b24-9d4d-f73c0542293e" alt="Ad 2" className="ad-image" />
                                    <p>Cơ quan chức năng ập vào kiểm tra lô hàng giày không rõ nguồn gốc</p>
                                </div>
                                <div className="ad">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRknG6NPDzAXX-GADM4Idb2Vb3p6MHZRbHRkq-46RIgaQ&s" alt="Ad 3" className="ad-image" />
                                    <p>Cơ sở sản xuất giày uy tin chất lượng</p>
                                </div>
                            </div>
                        </Col>
                        <Col lg="9">
                            <Row>
                                {displayPage.map((item) => (
                                    <Col lg="4" md="4" sm="6" xs="12" key={item.id} className="mb-4">
                                        <ProductCard item={item} />
                                    </Col>
                                ))}
                            </Row>
                            <Row>
                                <Col>
                                    <ReactPaginate
                                        pageCount={pageCount}
                                        onPageChange={changePage}
                                        previousLabel={"Trước"}
                                        nextLabel={"Tiếp"}
                                        containerClassName="paginationBttns"
                                    />
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default AllProducts;
    