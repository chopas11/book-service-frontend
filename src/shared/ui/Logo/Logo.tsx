
import s from "./Logo.module.css"
import React from "react";
import {Link} from "react-router-dom";

const Logo: React.FC = () => {
    return (
        <div className={s.logo}>
            <Link to="/">
            <svg width="135" viewBox="0 0 135 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30.4681 22.9493C30.3878 23.8251 30.4893 24.708 30.7664 25.5426C31.0434 26.3772 31.49 27.1455 32.0781 27.7993C33.2303 28.8496 34.7503 29.4031 36.3081 29.3394C36.9829 29.3447 37.6554 29.2606 38.3081 29.0894C38.9294 28.9413 39.5329 28.7267 40.1082 28.4493L39.3682 25.9393C39.0012 26.1072 38.6196 26.2411 38.2281 26.3394C37.7803 26.4514 37.3198 26.505 36.8582 26.4993C36.3899 26.5329 35.9202 26.4605 35.4839 26.2874C35.0476 26.1142 34.6559 25.8448 34.3381 25.4993C33.6795 24.4982 33.3831 23.3021 33.4982 22.1094V11.7094H39.4982V9.07935H33.4982V3.2793H30.4982V9.07935H25.8281V11.7094H30.4982L30.4681 22.9493Z" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M48.4819 27.8901C50.1046 28.846 51.9588 29.3372 53.8419 29.3102C55.2762 29.3214 56.698 29.0424 58.0218 28.4901C59.265 27.9608 60.3903 27.1892 61.3319 26.2202C62.2613 25.2552 62.9979 24.1215 63.5019 22.8801C64.4599 20.5583 64.5538 17.9701 63.7667 15.585C62.9796 13.1998 61.3636 11.1757 59.2119 9.88013C57.5925 8.92621 55.7411 8.43835 53.8619 8.47022C52.4271 8.45395 51.0042 8.73301 49.6818 9.29016C48.4373 9.81241 47.3114 10.5812 46.3719 11.5502C45.4375 12.5114 44.6943 13.6414 44.1818 14.8801C43.5822 16.3624 43.323 17.9604 43.4234 19.5562C43.5238 21.1519 43.9812 22.7048 44.7619 24.1002C45.6471 25.6687 46.9302 26.9759 48.4819 27.8901ZM47.4819 14.8202C48.073 13.7032 48.9764 12.7824 50.0819 12.1702C51.2554 11.5593 52.5589 11.2404 53.8819 11.2404C55.2049 11.2404 56.5083 11.5593 57.6818 12.1702C58.7873 12.7824 59.6907 13.7032 60.2818 14.8202C60.9001 16.0843 61.2216 17.4729 61.2216 18.8801C61.2216 20.2874 60.9001 21.6761 60.2818 22.9402C59.6879 24.0551 58.7852 24.9752 57.6818 25.5902C56.5121 26.2076 55.2096 26.5303 53.8869 26.5303C52.5643 26.5303 51.2616 26.2076 50.0919 25.5902C48.9929 24.9694 48.0917 24.0508 47.4919 22.9402C46.8298 21.6953 46.5024 20.2996 46.5418 18.8901C46.4886 17.4724 46.7985 16.0646 47.4419 14.8002L47.4819 14.8202Z" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M79.2589 11.5799C79.6227 11.6374 79.9832 11.7142 80.3389 11.8099L80.8088 8.66989C80.46 8.58996 80.1058 8.53644 79.7489 8.50986C79.3789 8.50986 79.0089 8.50986 78.6389 8.50986C77.406 8.50407 76.187 8.77044 75.0688 9.28989C73.8361 9.92491 72.8147 10.9048 72.1289 12.11V9.10996H69.1289V28.7398H72.1289V17.5899C72.0934 16.7796 72.2271 15.9706 72.5215 15.2148C72.8159 14.459 73.2646 13.7728 73.8389 13.1999C74.4156 12.6486 75.0965 12.2177 75.8417 11.9327C76.5869 11.6477 77.3814 11.5141 78.1788 11.5399C78.5393 11.5284 78.9003 11.5418 79.2589 11.5799Z" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M90.5199 34.1803C89.8373 34.7527 88.9583 35.0361 88.0699 34.9703C87.6464 34.9576 87.2263 34.8903 86.8199 34.7703C86.3483 34.6343 85.9023 34.4215 85.5 34.1403L84.75 36.7903C85.303 37.1407 85.9067 37.4038 86.5399 37.5703C87.106 37.7096 87.6869 37.7801 88.2699 37.7803C89.1872 37.7932 90.0991 37.6373 90.96 37.3203C91.8309 36.9585 92.5925 36.3759 93.1699 35.6302C93.9628 34.5677 94.5899 33.391 95.0299 32.1403L103.75 9.07031H100.55L94.5499 25.5203L88.36 9.07031H85.0199L92.83 29.1803L91.9399 31.7703C91.6587 32.6723 91.1726 33.4971 90.5199 34.1803Z" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M44.0781 42.5308C42.5221 41.5851 40.7286 41.1029 38.9081 41.1408C37.3718 41.0572 35.8386 41.3528 34.4435 42.0015C33.0484 42.6503 31.8342 43.6323 30.9081 44.8609V41.7408H28.0781V69.8609H31.0781V58.2708C31.9406 59.3908 33.0402 60.306 34.2981 60.9509C35.7431 61.659 37.3397 62.0024 38.9481 61.9509C40.3237 61.9661 41.6869 61.69 42.9481 61.1408C44.1419 60.6255 45.2123 59.8619 46.0881 58.9008C46.9604 57.928 47.6391 56.7979 48.0881 55.5709C48.6405 54.0672 48.8793 52.4664 48.7899 50.867C48.7005 49.2676 48.2847 47.7035 47.5681 46.2708C46.7608 44.734 45.5555 43.4424 44.0781 42.5308ZM44.7582 55.6109C44.1499 56.7152 43.2506 57.6316 42.1581 58.2608C40.9866 58.8782 39.6824 59.201 38.3582 59.201C37.0339 59.201 35.7296 58.8782 34.5581 58.2608C33.4591 57.64 32.5579 56.7215 31.9581 55.6109C31.3398 54.3468 31.0183 52.9581 31.0183 51.5508C31.0183 50.1436 31.3398 48.7549 31.9581 47.4908C32.552 46.3759 33.4547 45.4559 34.5581 44.8409C35.7316 44.23 37.0352 43.9111 38.3582 43.9111C39.6811 43.9111 40.9846 44.23 42.1581 44.8409C43.2551 45.4643 44.1558 46.3821 44.7582 47.4908C45.3831 48.753 45.7083 50.1424 45.7083 51.5508C45.7083 52.9593 45.3831 54.3487 44.7582 55.6109Z" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M67.6019 42.8008C66.2739 42.0417 64.7607 41.6677 63.2319 41.7208C61.8789 41.7257 60.5437 42.0297 59.3219 42.6108C58.2927 43.1085 57.3874 43.8293 56.6719 44.7208V32.8008H53.6719V61.9308H56.6719V50.5007C56.6455 49.403 56.9149 48.3186 57.4519 47.3608C57.9501 46.4811 58.6798 45.7547 59.5619 45.2607C60.4785 44.7543 61.5152 44.5055 62.5619 44.5408C64.0333 44.4719 65.472 44.9899 66.5619 45.9808C67.0615 46.4695 67.4532 47.0574 67.7115 47.7068C67.9699 48.3561 68.0892 49.0524 68.0619 49.7507V61.9308H71.0619V48.9008C71.0531 47.7262 70.7542 46.572 70.1919 45.5408C69.5954 44.4077 68.6996 43.46 67.6019 42.8008Z" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M93.1404 44.2709C92.3272 43.2872 91.3015 42.5009 90.1404 41.9709C88.8345 41.3941 87.4178 41.1107 85.9904 41.1409C84.6195 41.1327 83.2603 41.3943 81.9904 41.9109C80.7655 42.4223 79.6571 43.177 78.7324 44.1293C77.8076 45.0815 77.0857 46.2115 76.6104 47.4509C76.093 48.7796 75.835 50.195 75.8504 51.6208C75.8076 53.5164 76.2664 55.3897 77.1804 57.0509C78.0483 58.5878 79.335 59.8466 80.8904 60.6809C82.5712 61.568 84.4503 62.012 86.3504 61.9709C87.2501 61.9722 88.1477 61.8851 89.0303 61.7109C89.9414 61.5368 90.8302 61.2617 91.6804 60.8909C92.4972 60.5465 93.2614 60.0886 93.9504 59.5309L92.5004 57.2009C91.7 57.8874 90.7771 58.4166 89.7803 58.7609C88.7611 59.1161 87.6898 59.2987 86.6104 59.3009C85.1608 59.3395 83.7233 59.0273 82.4203 58.3909C81.2953 57.8318 80.3649 56.9467 79.7504 55.8509C79.1327 54.6877 78.8521 53.375 78.9404 52.0609H95.2504C95.4323 50.6167 95.3407 49.1511 94.9804 47.7408C94.6243 46.4651 93.9967 45.2814 93.1404 44.2709ZM79.0104 49.5509C79.0666 48.7313 79.2878 47.9315 79.6607 47.1994C80.0336 46.4674 80.5504 45.8182 81.1804 45.2909C82.5269 44.2467 84.1975 43.7087 85.9003 43.7709C87.5516 43.6608 89.1796 44.2071 90.4304 45.2909C91.5242 46.4361 92.121 47.9675 92.0904 49.5509H79.0104Z" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M109.631 41.7403C108.398 41.7345 107.179 42.0009 106.061 42.5204C104.828 43.1554 103.807 44.1352 103.121 45.3404V42.3404H100.121V61.9604H103.121V50.8004C103.085 49.9899 103.218 49.1809 103.513 48.425C103.807 47.6691 104.256 46.9829 104.831 46.4104C105.408 45.859 106.089 45.4282 106.834 45.1432C107.579 44.8581 108.374 44.7246 109.171 44.7503C109.533 44.7471 109.894 44.7739 110.251 44.8304C110.615 44.8845 110.975 44.9579 111.331 45.0504L111.801 41.9204C111.453 41.8322 111.099 41.7752 110.741 41.7503C110.371 41.8003 110.001 41.7403 109.631 41.7403Z" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M133.211 47.7405C132.887 46.4683 132.286 45.2834 131.451 44.2706C130.639 43.2859 129.613 42.4994 128.451 41.9706C127.144 41.3959 125.728 41.1126 124.301 41.1406C122.93 41.1313 121.57 41.393 120.301 41.9106C119.076 42.4239 117.967 43.1791 117.041 44.131C116.115 45.083 115.39 46.212 114.911 47.4506C114.398 48.7807 114.14 50.1952 114.151 51.6205C114.111 53.517 114.574 55.3902 115.491 57.0506C116.355 58.5868 117.638 59.8457 119.191 60.6806C120.872 61.5652 122.751 62.0091 124.651 61.9706C125.554 61.9719 126.455 61.8848 127.341 61.7106C128.252 61.5365 129.141 61.2614 129.991 60.8906C130.806 60.5438 131.57 60.0862 132.261 59.5306L130.811 57.2006C130.008 57.8894 129.082 58.4188 128.081 58.7605C127.065 59.1158 125.997 59.2984 124.921 59.3006C123.471 59.3392 122.034 59.027 120.731 58.3906C119.606 57.8315 118.675 56.9464 118.061 55.8506C117.434 54.6908 117.153 53.3754 117.251 52.0606H133.561C133.717 50.6114 133.598 49.1457 133.211 47.7405ZM117.321 49.5506C117.379 48.7304 117.602 47.9303 117.976 47.1983C118.351 46.4663 118.87 45.8174 119.501 45.2906C120.847 44.2449 122.518 43.7067 124.221 43.7706C125.869 43.6588 127.495 44.2055 128.741 45.2906C129.838 46.4342 130.439 47.9657 130.411 49.5506H117.321Z" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
                <path d="M12.8981 4.5691C13.9117 4.57342 14.9204 4.7113 15.8981 4.97914C16.8869 5.25785 17.8325 5.67173 18.7081 6.20912C19.6007 6.75617 20.4091 7.42986 21.1082 8.20912L22.7081 4.83912C21.4832 3.51011 19.9668 2.48322 18.2781 1.83912C16.5652 1.16474 14.7389 0.82527 12.8981 0.839123C10.9586 0.777788 9.04148 1.26654 7.36816 2.24904C5.86493 3.18639 4.67171 4.54657 3.93811 6.15907C3.13303 7.9917 2.73714 9.97789 2.77808 11.9791C2.60045 14.0895 3.10641 16.201 4.22107 18.0017C5.33573 19.8025 7.00005 21.197 8.96814 21.9791C8.72814 22.0591 8.48818 22.139 8.25818 22.239C7.06717 22.7412 5.98728 23.4745 5.08105 24.3961C4.17483 25.3178 3.46016 26.4098 2.97815 27.6091C2.47466 28.8298 2.21968 30.1387 2.22815 31.4591C2.22815 31.6691 2.22815 31.8791 2.22815 32.0891C2.22815 32.2991 2.22815 32.3391 2.22815 32.4691C2.14066 34.6735 2.75709 36.8484 3.98816 38.6791C5.4192 40.514 7.34472 41.9019 9.53809 42.6791L12.7681 43.989C14.6206 44.6035 16.2816 45.6891 17.5881 47.139C18.4704 48.3581 18.924 49.8351 18.8782 51.3391C18.9413 52.2975 18.7949 53.2581 18.4496 54.1543C18.1042 55.0505 17.5681 55.8608 16.8782 56.5291C15.4325 57.7581 13.5733 58.3909 11.6781 58.2991C10.126 58.3078 8.58951 57.99 7.16821 57.3663C5.74692 56.7427 4.47262 55.8271 3.4281 54.6791L1.82812 58.0491C3.05585 59.3748 4.57146 60.4011 6.25818 61.0491C7.97097 61.7237 9.79737 62.0632 11.6382 62.0491C13.5735 62.1137 15.4875 61.6283 17.1581 60.6491C18.666 59.7173 19.8607 58.3555 20.5881 56.739C21.4013 54.9087 21.8009 52.9215 21.7582 50.9191C21.8609 48.6407 21.2527 46.3868 20.0181 44.4691C18.8405 42.9033 17.2712 41.6754 15.4681 40.9091C15.7181 40.8191 15.9681 40.739 16.2081 40.639C17.4022 40.1304 18.4832 39.3894 19.3882 38.4591C20.2819 37.537 20.9882 36.4502 21.4681 35.259C21.8826 34.2532 22.1259 33.1852 22.1881 32.0991C22.2491 31.5513 22.2791 31.0004 22.2781 30.4491C22.369 28.2475 21.7522 26.0745 20.5181 24.249C19.0909 22.4144 17.1687 21.0264 14.9781 20.249L11.7382 18.9391C9.88824 18.3251 8.23031 17.2394 6.9281 15.7891C6.04301 14.571 5.58599 13.0942 5.62817 11.5891C5.56373 10.6306 5.70924 9.66951 6.05469 8.77308C6.40013 7.87666 6.93717 7.06646 7.62817 6.39906C9.0826 5.13139 10.971 4.47565 12.8981 4.5691ZM12.2881 23.989C13.5492 23.9658 14.7953 24.2654 15.9081 24.8591L15.9982 24.9191C17.034 25.5096 17.8829 26.3793 18.4481 27.4291C19.0754 28.6348 19.3852 29.9805 19.3481 31.3391C19.3817 32.691 19.0721 34.0294 18.4481 35.2291C17.8709 36.2972 17.0045 37.1809 15.9481 37.7791C14.8223 38.3703 13.5697 38.6792 12.2981 38.6792C11.0265 38.6792 9.77387 38.3703 8.64807 37.7791C7.59169 37.1809 6.72524 36.2972 6.14807 35.2291C5.55295 34.0152 5.24365 32.6811 5.24365 31.3291C5.24365 29.9771 5.55295 28.643 6.14807 27.4291C6.72524 26.3611 7.59169 25.4772 8.64807 24.879C9.76479 24.2746 11.0184 23.968 12.2881 23.989Z" fill="white" stroke="white" strokeWidth="1.5" strokeMiterlimit="10"/>
            </svg>
            </Link>
        </div>
    );
};

export default Logo;