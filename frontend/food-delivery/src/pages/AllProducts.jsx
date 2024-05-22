import React, { useState, useEffect, useCallback } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";

import { Container, Row, Col } from "reactstrap";

// import products from "../assets/fake-data/products";
import ProductCard from "../components/UI/product-card/ProductCard";
import ReactPaginate from "react-paginate";

import "../styles/all-foods.css";
import "../styles/pagination.css";

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
        return function(...args) {
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
                        <Col lg="6" md="6" sm="6" xs="12">
                            <div className="search__widget d-flex align-items-center justify-content-between ">
                                <input
                                    type="text"
                                    placeholder="I'm looking for...."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                                <span>
                  <i class="ri-search-line"></i>
                </span>
                            </div>
                        </Col>
                        <Col lg="6" md="6" sm="6" xs="12" className="mb-5">
                            <div className="sorting__widget text-end">
                                <select className="w-50">
                                    <option>Mặc định</option>
                                    <option value="ascending">Thứ tự, A-Z</option>
                                    <option value="descending">Thứ tự, Z-A</option>
                                    <option value="high-price">Giá cao</option>
                                    <option value="low-price">Giá thấp</option>
                                </select>
                            </div>
                        </Col>

                        {displayPage.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mb-4">
                                <ProductCard item={item} />
                            </Col>
                        ))}

                        <div>
                            <ReactPaginate
                                pageCount={pageCount}
                                onPageChange={changePage}
                                previousLabel={"Trước"}
                                nextLabel={"Tiếp"}
                                containerClassName=" paginationBttns "
                            />
                        </div>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default AllProducts;