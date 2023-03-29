<template>
    <header>
        <!-- top-header -->
        <div class="flex w-full font-font h-[56px] grid grid-cols-3 items-center boxshadow ">
            <!-- logo  -->
            <div>
                <img srcset="../assets/img/Logo_Meey_News.png 2x" alt="" class="ml-6">
            </div>
            <!-- logo  -->

            <!-- search  -->
            <div class="flex items-center w-[586px] bg-Background1 h-10 rounded-[40px] my-2">
                <img srcset="../assets/img/SearchBar.png 2x" alt="" class="w-4 h-4 ml-[15px] mr-[6px] my-3 ">
                <input type="text" placeholder="Tìm kiếm..." class="bg-Background1 outline-none w-[538px] h-[20px]">
            </div>
            <!-- search  -->

            <!-- user  -->
            <div class="flex items-center ml-auto">
                <img srcset="../assets/img/User.png 2x" alt="" class="w-4 h-4">
                <button class="ml-[6px] text-Primary5 mr-[36px]">Đăng nhập</button>
            </div>
            <!-- user  -->
        </div>
        <!-- top-header -->
    </header>

    <div class="grid grid-cols-3    bg-Background1 font-font">
        <!-- navbar-Left  -->
        <div class=" font-font col-span-1">
            <span class="pl-6 border-solid  py-8">
                <div class="flex items-center">
                    <img srcset="../assets/img/IconHome.png 2x" alt="" class="w-[15px] h-[14px] mr-[10px]">
                    <h3>Trang chủ</h3>
                    <img srcset="../assets/img/IconRight.png 2x" alt="" class="w-[5px] h-[9px] ml-4">
                </div>
                <h3 class="mt-8 mb-4 text-Grey6">Tất cả chuyên mục</h3>
                <div class="flex items-center  w-[220px] h-10">
                    <span class="bg-[#E86C64] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
                    <h4 class="text-Background4 ">Thị trường</h4>
                </div>
                <div class="flex items-center w-[220px] h-10">
                    <span class=" bg-[#8BAFE5] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
                    <h4 class="text-Background4">Dự án</h4>
                </div>
                <div class="flex items-center w-[220px] h-10">
                    <span class="bg-[#9F6DBE] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
                    <h4 class="text-Background4">Quy hoạch</h4>
                </div>
                <div class="flex items-center w-[220px] h-10">
                    <span class="bg-[#E5A62C] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
                    <h4 class="text-Background4"> Phân tích báo cáo</h4>
                </div>
                <div class="flex items-center w-[220px] h-10">
                    <span class="bg-[#827AE2] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
                    <h4 class="text-Background4"> Chuyên gia nhận định</h4>
                </div>
                <div class="flex items-center w-[220px] h-10">
                    <span class="bg-[#CE58A6] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
                    <h4 class="text-Background4"> Kiến thức</h4>
                </div>
                <div class="flex items-center w-[220px] h-10">
                    <span class="bg-[#2FBBC3] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
                    <h4 class="text-Background4"> Pháp lý</h4>
                </div>
                <div class="flex items-center w-[220px] h-10">
                    <span class="bg-[#55AC82] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
                    <h4 class="text-Background4"> Phong thủy</h4>
                </div>
                <div class="flex items-center w-[220px] h-10 mb-[238px]">
                    <span class="bg-[#DE782D] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
                    <h4 class="text-Background4"> Giải trí</h4>
                </div>

                <div class=" text-text3 text-[#999999] text-Grey7">
                    <p class="py-1">Về Meey Share</p>
                    <p class="py-1">Trợ giúp</p>
                    <p class="py-1">Điều khoản sử dụng</p>
                    <p class="py-1">Chính sách bảo mật</p>
                    <p class="py-1">Một sản phẩm của Meey Group</p>
                </div>
            </span>

        </div>
        <!-- navbar-Left  -->

        <!-- content  -->
        <div class=" py-8 ">

            <!-- content-post -->
            <div class="w-[568px] h-[574px] bg-[#fff] rounded-lg mb-5">
                <div class="ml-4 pt-7 h-6 flex items-center mb-[22px]">
                    <img srcset="../assets/img/avatar.png 2x" alt="" class="mr-1">
                    <h3 class=" ">Ngô Thu Thảo</h3>
                    <img srcset="../assets/img/Icon..png 2x" alt="" class="w-1 h-1 mx-[6px]">
                    <p class="text-Grey5 text-text4">15 phút trước</p>
                </div>
                <p class="pl-4 text-Background4 text-text2 font-normal leading-5 pb-2">Trong bối cảnh nền kinh tế nghẽn
                    thanh
                    khoản, thị
                    trường bất động sản gặp khó khăn, tôi bắt
                    đầu nghe thấy
                    các nhận định “doanh nghiệp bất động sản phải giảm giá”; “doanh nghiệp bất động sản không chịu nghe lời,
                    không chịu giảm... <strong class="text-text2 text-Grey5 font-normal cursor-pointer">xem thêm</strong>
                </p>
                <img src="../assets/img/ImageRatio.png" alt="">
                <h3 class="bg-Background1 px-2 h-[64px] flex items-center boxshadow-content">
                    Dòng tiền bất động sản cuối năm 2022 chuyển hướng ra sao, thời điểm nào để bắt đáy?
                </h3>
                <div class="flex border-b-[1px] items-center">
                    <span class="ml-[18px] bg-[#E86C64] w-3 h-3 border-[1px] rounded-[2px] mr-[10px]"></span>
                    <h3 class="py-3">thị trường</h3>
                </div>
                <div class="flex justify-around items-center h-[48px]">
                    <div class="flex items-center cursor-pointer">
                        <img srcset="../assets/img/up.png 2x" alt="" class="w-4 h[4] ">
                        <h3 class="text-text2 text-Grey7 px-3">278 vote</h3>
                        <img srcset="../assets/img/dow.png 2x" alt="" class="w-4 h[4]">
                    </div>
                    <div class="flex items-center cursor-pointer">
                        <img srcset="../assets/img/comment.png 2x" alt="" class="w-[15px] h-[15px]">
                        <h3 class="text-text2 text-Grey7 ml-[10px]">27 bình luận</h3>
                    </div>
                    <div class="flex items-center cursor-pointer ">
                        <img srcset="../assets/img/share.png 2x" alt="" class="w-4 h-[13px]">
                        <h3 class="text-text2 text-Grey7  ml-[10px]">Chia sẻ</h3>
                    </div>
                </div>
            </div>
            <!-- content-post -->

            <!-- short-video  -->
            <div class="w-[568px] h-[441px] bg-white rounded-lg">
                <div class="flex items-center pl-[18px] pt-[27px]">
                    <img srcset="../assets/img/video.png 2x" alt="" class=" mr-[10px]  w-[15px] h-[10px]">
                    <h2 class="text-Grey8 text-heading5 font-semibold">Video ngắn</h2>
                </div>
            </div>
            <!-- short-video  -->

        </div>
        <!-- content  -->


        <!-- navbar-right  -->
        <div class="ml-[8.5rem] py-8">
            <!-- Title  -->
            <div class="flex items-center mb-6">
                <img srcset="../assets/img/go_up.png 2x" alt="" class="mr-[10px] w-[20px] h-[12px]">
                <h2 class="text-heading6 font-semibold ">Xu hướng</h2>
            </div>
            <!-- Title  -->

            <div class="flex">
                <div class="">
                    <h3 class="w-[186px] mr-3 text-text2 text-Background4 content-navbar-right mb-1">
                        Hà Nội: Thị trường đất nền tại các điểm nóng vùng ven vẫn tăng cao
                    </h3>
                    <p class="text-text4 text-Grey3 font-normal">1.284 tương tác</p>
                </div>
                <img srcset="../assets/img/img1-navbar.png 2x" alt="" class="mb-6">
            </div>
            <div class="flex">
                <div class="">
                    <h3 class="w-[186px] mr-3 text-text2 text-Background4 content-navbar-right mb-1">
                        Đất nền Hòa Lạc: Nhiều tín hiệu cho thấy thủ phủ phân lô, bán nền đang “nóng” trở lại
                    </h3>
                    <p class="text-text4 text-Grey3 font-normal">1.284 tương tác</p>
                </div>
                <img srcset="../assets/img/img2-navbar.png 2x" alt="" class="mb-6">
            </div>
            <div class="flex">
                <div class="">
                    <h3 class="w-[186px] mr-3 text-text2 text-Background4 content-navbar-right mb-1">
                        Đánh thuế tài sản làm tăng giá nhà đất là không đúng
                    </h3>
                    <p class="text-text4 text-Grey3 font-normal">1.284 tương tác</p>
                </div>
                <img srcset="../assets/img/img3-navbar.png 2x" alt="" class="mb-6">
            </div>
            <div class="flex">
                <div class="">
                    <h3 class="w-[186px] mr-3 text-text2 text-Background4 content-navbar-right mb-1">
                        Vốn ngoại trở thành “điểm tựa” mới của thị trường bất động sản khi kênh huy động vốn trong nước “bế
                        tắc”
                    </h3>
                    <p class="text-text4 text-Grey3 font-normal">1.284 tương tác</p>
                </div>
                <img srcset="../assets/img/img4-navbar.png 2x" alt="" class="mb-6">
            </div>
            <div class="flex">
                <div class="">
                    <h3 class="w-[186px] mr-3 text-text2 text-Background4 content-navbar-right mb-1">
                        Vòng xoáy sốt đất ở Đắk Lắk - Kỳ 2: Trắng tay vì sốt đất
                    </h3>
                    <p class="text-text4 text-Grey3 font-normal">1.284 tương tác</p>
                </div>
                <img srcset="../assets/img/img5-navbar.png 2x" alt="" class="mb-6">
            </div>


        </div>
        <!-- navbar-right  -->

    </div>
</template>

<script>
export default {

}
</script>

<style></style>