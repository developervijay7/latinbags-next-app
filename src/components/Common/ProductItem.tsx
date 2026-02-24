"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";
import { useModalContext } from "@/app/context/QuickViewModalContext";
import { updateQuickView } from "@/redux/features/quickView-slice";
import { addItemToCart } from "@/redux/features/cart-slice";
import { addItemToWishlist } from "@/redux/features/wishlist-slice";
import { updateproductDetails } from "@/redux/features/product-details";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import Link from "next/link";

interface ProductItemProps {
    item: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ item }) => {
    const { openModal } = useModalContext();
    const dispatch = useDispatch<AppDispatch>();

    const handleQuickViewUpdate = () => {
        dispatch(updateQuickView({ ...item }));
    };

    const handleAddToCart = () => {
        dispatch(addItemToCart({ ...item, quantity: 1 }));
    };

    const handleItemToWishList = () => {
        dispatch(addItemToWishlist({ ...item, status: "available", quantity: 1 }));
    };

    const handleProductDetails = () => {
        dispatch(updateproductDetails({ ...item }));
    };

    return (
        <div className="group">
            <div className="relative overflow-hidden flex items-center justify-center rounded-lg bg-[#F6F7FB] min-h-[270px] mb-4">
                <Image src={item.imgs.previews[0]} alt={item.title} width={250} height={250} />

                <div className="absolute left-0 bottom-0 translate-y-full w-full flex items-center justify-center gap-2.5 pb-5 ease-linear duration-200 group-hover:translate-y-0">
                    <button
                        onClick={() => {
                            openModal();
                            handleQuickViewUpdate();
                        }}
                        aria-label="button for quick view"
                        className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-blue"
                    >
                        {/* Quick View Icon */}
                        <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 5.5C6.619 5.5 5.5 6.619 5.5 8C5.5 9.381 6.619 10.5 8 10.5C9.381 10.5 10.5 9.381 10.5 8C10.5 6.619 9.381 5.5 8 5.5ZM6.5 8C6.5 7.172 7.172 6.5 8 6.5C8.828 6.5 9.5 7.172 9.5 8C9.5 8.828 8.828 9.5 8 9.5C7.172 9.5 6.5 8.828 6.5 8Z"
                                fill=""
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M8 2.167C4.991 2.167 2.964 3.969 1.787 5.498L1.766 5.525C1.5 5.871 1.255 6.189 1.089 6.566C0.911 6.969 0.833 7.408 0.833 8C0.833 8.592 0.911 9.031 1.089 9.434C1.255 9.811 1.5 10.129 1.766 10.475C2.964 12.03 4.991 13.833 8 13.833C11.009 13.833 13.036 12.03 14.213 10.475C14.5 10.129 14.746 9.811 14.912 9.434C15.09 9.031 15.167 8.592 15.167 8C15.167 7.408 15.09 6.969 14.912 6.566C14.746 6.189 14.5 5.871 14.213 5.525C13.036 3.969 11.009 2.167 8 2.167ZM2.58 6.108C3.666 4.697 5.434 3.167 8 3.167C10.567 3.167 12.334 4.697 13.421 6.108C13.713 6.488 13.884 6.715 13.997 6.97C14.102 7.208 14.167 7.499 14.167 8C14.167 8.501 14.102 8.792 13.997 9.03C13.884 9.285 13.713 9.512 13.421 9.892C12.334 11.303 10.567 12.833 8 12.833C5.434 12.833 3.666 11.303 2.58 9.892C2.287 9.512 2.116 9.285 2.003 9.03C1.898 8.792 1.833 8.501 1.833 8C1.833 7.499 1.898 7.208 2.003 6.97C2.116 6.715 2.287 6.488 2.58 6.108Z"
                                fill=""
                            />
                        </svg>
                    </button>

                    <button
                        onClick={handleAddToCart}
                        className="inline-flex font-medium text-custom-sm py-[7px] px-5 rounded-[5px] bg-blue text-white ease-out duration-200 hover:bg-blue-dark"
                    >
                        Add to cart
                    </button>

                    <button
                        onClick={handleItemToWishList}
                        aria-label="button for favorite select"
                        className="flex items-center justify-center w-9 h-9 rounded-[5px] shadow-1 ease-out duration-200 text-dark bg-white hover:text-blue"
                    >
                        {/* Heart icon */}
                        <svg
                            className="fill-current"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M3.75 2.95C2.644 3.455 1.833 4.657 1.833 6.091C1.833 7.556 2.433 8.685 3.292 9.653C4 10.451 4.858 11.112 5.694 11.756C5.893 11.91 6.09 12.062 6.284 12.215C6.634 12.491 6.947 12.734 7.249 12.91C7.55 13.086 7.793 13.167 8 13.167C8.206 13.167 8.449 13.086 8.751 12.91C9.052 12.734 9.365 12.491 9.716 12.215C9.91 12.062 10.107 11.91 10.306 11.756C11.142 11.112 12 10.451 12.708 9.653C13.567 8.685 14.167 7.556 14.167 6.091C14.167 4.657 13.356 3.455 12.25 2.95C11.176 2.458 9.732 2.588 8 4.014C7.866 4.112 7.736 4.167 7.999 4.167C7.864 4.167 7.734 4.112 7.64 4.014C6.268 2.588 4.824 2.458 3.75 2.95Z"
                                fill=""
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Ratings */}
            <div className="flex items-center gap-2.5 mb-2">
                <div className="flex items-center gap-1">
                    {Array(5)
                        .fill(0)
                        .map((_, idx) => (
                            <Image
                                key={idx}
                                src="/images/icons/icon-star.svg"
                                alt="star icon"
                                width={14}
                                height={14}
                            />
                        ))}
                </div>
                <p className="text-custom-sm">({item.reviews})</p>
            </div>

            {/* Title */}
            <h3
                className="font-medium text-dark ease-out duration-200 hover:text-blue mb-1.5"
                onClick={handleProductDetails}
            >
                <Link href="/shop-details">{item.title}</Link>
            </h3>

            {/* Price */}
            <span className="flex items-center gap-2 font-medium text-lg">
        <span className="text-dark">₹{item.discountedPrice}</span>
        <span className="text-dark-4 line-through">₹{item.price}</span>
      </span>
        </div>
    );
};

export default ProductItem;