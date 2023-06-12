'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const items = [
        {
            "title": "Xuất khẩu nông sản sang Trung Quốc, Bộ Nông nghiệp báo cáo giải pháp cấp bách",
            "abstract": "Bộ Nông nghiệp vừa có báo cáo gửi Thủ tướng về việc triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản sang Trung Quốc tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Ngày 6/6, Bộ NN-PTNT đã có báo cáo gửi Thủ tướng Chính phủ Phạm Minh Chính và Phó Thủ tướng Trần Lưu Quang việc thực hiện Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Báo cáo nêu rõ, Bộ NN-PTNT đã cử đoàn công tác do Thứ trưởng Trần Thanh Nam dẫn đầu sang làm việc với chính quyền, Cục Hải quan hai tỉnh Quảng Tây và tỉnh Vân Nam (Trung Quốc) và chỉ đạo tổ chức Diễn đàn kết nối giao thương nông lâm thủy sản giữa Việt Nam - Trung Quốc qua hai tỉnh. \n Tại các cuộc hội đàm với phía bạn, trước mắt hai bên thống nhất chỉ đạo các đơn vị hải quan, kiểm dịch hai bên cửa khẩu có cơ chế thường xuyên giao lưu trao đổi quy trình nghiệp vụ, cập nhật thông tin phối hợp thông quan nhanh chóng, đặc biệt ưu tiên các mặt hàng tươi sống vào vụ thu hoạch nhằm giảm ùn ứ, thúc đẩy giao thương nông lâm thuỷ sản thông qua các cửa khẩu 2 tỉnh này.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Nỗi buồn nông dân: Giá nông sản sụt giảm, nguyên liệu đầu vào tăng và neo cao",
            "abstract": "Áp lực từ thị trường, giá thức ăn chăn nuôi tiếp tục tăng, còn giá phân bón neo ở mức cao. Trong khi giá nhiều loại nông sản lại giảm sâu khiến nông dân thua lỗ nặng.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Thủ tướng Chính phủ Phạm Minh Chính vừa ký ban hành Công điện số 492/CĐ-TTg ngày 31/5/2023 về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Công điện nêu rõ, qua theo dõi nắm tình hình và phản ánh của các cơ quan liên quan, những ngày gần đây, số lượng xe chở hàng nông sản xuất khẩu tăng đột biến tại các cửa khẩu trên địa bàn tỉnh Lạng Sơn, trong khi thời gian làm thủ tục thông quan kéo dài, năng lực thông quan hạn chế dễ gây ra tình trạng ùn ứ tại cửa khẩu.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Thủ tướng: Không để tái diễn nông sản ùn ứ tại cửa khẩu",
            "abstract": "Thủ tướng Chính phủ ban hành Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Hiện nay, một số loại trái cây đang vào vụ thu hoạch (sầu riêng, mít, vải, thanh long… ); dự báo phương tiện đường bộ chở hoa quả và nông sản xuất khẩu từ các địa phương sẽ tiếp tục dồn về các cửa khẩu trên địa bàn tỉnh Lạng Sơn và các tỉnh biên giới phía Bắc, nguy cơ xảy ra tình trạng ùn ứ hàng nông sản xuất khẩu, gia tăng chi phí, gây thiệt hại cho người dân, doanh nghiệp và ảnh hưởng đến an toàn giao thông, an ninh, trật tự, vệ sinh môi trường tại khu vực một số cửa khẩu ở Lạng Sơn. \n Do đó, Thủ tướng Chính phủ yêu cầu bộ trưởng các bộ: Công Thương, Tài chính, NN-PTNT, Ngoại giao, Giao thông vận tải, Thông tin và Truyền thông, Quốc phòng, Công an và chủ tịch UBND các tỉnh, thành phố trực thuộc Trung ương, các cơ quan liên quan chủ động chỉ đạo, tổ chức triển khai các giải pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản đang vào mùa vụ được thuận lợi.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Xuất khẩu nông sản sang Trung Quốc, Bộ Nông nghiệp báo cáo giải pháp cấp bách",
            "abstract": "Bộ Nông nghiệp vừa có báo cáo gửi Thủ tướng về việc triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản sang Trung Quốc tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Ngày 6/6, Bộ NN-PTNT đã có báo cáo gửi Thủ tướng Chính phủ Phạm Minh Chính và Phó Thủ tướng Trần Lưu Quang việc thực hiện Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Báo cáo nêu rõ, Bộ NN-PTNT đã cử đoàn công tác do Thứ trưởng Trần Thanh Nam dẫn đầu sang làm việc với chính quyền, Cục Hải quan hai tỉnh Quảng Tây và tỉnh Vân Nam (Trung Quốc) và chỉ đạo tổ chức Diễn đàn kết nối giao thương nông lâm thủy sản giữa Việt Nam - Trung Quốc qua hai tỉnh. \n Tại các cuộc hội đàm với phía bạn, trước mắt hai bên thống nhất chỉ đạo các đơn vị hải quan, kiểm dịch hai bên cửa khẩu có cơ chế thường xuyên giao lưu trao đổi quy trình nghiệp vụ, cập nhật thông tin phối hợp thông quan nhanh chóng, đặc biệt ưu tiên các mặt hàng tươi sống vào vụ thu hoạch nhằm giảm ùn ứ, thúc đẩy giao thương nông lâm thuỷ sản thông qua các cửa khẩu 2 tỉnh này.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Nỗi buồn nông dân: Giá nông sản sụt giảm, nguyên liệu đầu vào tăng và neo cao",
            "abstract": "Áp lực từ thị trường, giá thức ăn chăn nuôi tiếp tục tăng, còn giá phân bón neo ở mức cao. Trong khi giá nhiều loại nông sản lại giảm sâu khiến nông dân thua lỗ nặng.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Thủ tướng Chính phủ Phạm Minh Chính vừa ký ban hành Công điện số 492/CĐ-TTg ngày 31/5/2023 về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Công điện nêu rõ, qua theo dõi nắm tình hình và phản ánh của các cơ quan liên quan, những ngày gần đây, số lượng xe chở hàng nông sản xuất khẩu tăng đột biến tại các cửa khẩu trên địa bàn tỉnh Lạng Sơn, trong khi thời gian làm thủ tục thông quan kéo dài, năng lực thông quan hạn chế dễ gây ra tình trạng ùn ứ tại cửa khẩu.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Thủ tướng: Không để tái diễn nông sản ùn ứ tại cửa khẩu",
            "abstract": "Thủ tướng Chính phủ ban hành Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Hiện nay, một số loại trái cây đang vào vụ thu hoạch (sầu riêng, mít, vải, thanh long… ); dự báo phương tiện đường bộ chở hoa quả và nông sản xuất khẩu từ các địa phương sẽ tiếp tục dồn về các cửa khẩu trên địa bàn tỉnh Lạng Sơn và các tỉnh biên giới phía Bắc, nguy cơ xảy ra tình trạng ùn ứ hàng nông sản xuất khẩu, gia tăng chi phí, gây thiệt hại cho người dân, doanh nghiệp và ảnh hưởng đến an toàn giao thông, an ninh, trật tự, vệ sinh môi trường tại khu vực một số cửa khẩu ở Lạng Sơn. \n Do đó, Thủ tướng Chính phủ yêu cầu bộ trưởng các bộ: Công Thương, Tài chính, NN-PTNT, Ngoại giao, Giao thông vận tải, Thông tin và Truyền thông, Quốc phòng, Công an và chủ tịch UBND các tỉnh, thành phố trực thuộc Trung ương, các cơ quan liên quan chủ động chỉ đạo, tổ chức triển khai các giải pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản đang vào mùa vụ được thuận lợi.",
            "views": 0,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Xuất khẩu nông sản sang Trung Quốc, Bộ Nông nghiệp báo cáo giải pháp cấp bách",
            "abstract": "Bộ Nông nghiệp vừa có báo cáo gửi Thủ tướng về việc triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản sang Trung Quốc tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Ngày 6/6, Bộ NN-PTNT đã có báo cáo gửi Thủ tướng Chính phủ Phạm Minh Chính và Phó Thủ tướng Trần Lưu Quang việc thực hiện Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Báo cáo nêu rõ, Bộ NN-PTNT đã cử đoàn công tác do Thứ trưởng Trần Thanh Nam dẫn đầu sang làm việc với chính quyền, Cục Hải quan hai tỉnh Quảng Tây và tỉnh Vân Nam (Trung Quốc) và chỉ đạo tổ chức Diễn đàn kết nối giao thương nông lâm thủy sản giữa Việt Nam - Trung Quốc qua hai tỉnh. \n Tại các cuộc hội đàm với phía bạn, trước mắt hai bên thống nhất chỉ đạo các đơn vị hải quan, kiểm dịch hai bên cửa khẩu có cơ chế thường xuyên giao lưu trao đổi quy trình nghiệp vụ, cập nhật thông tin phối hợp thông quan nhanh chóng, đặc biệt ưu tiên các mặt hàng tươi sống vào vụ thu hoạch nhằm giảm ùn ứ, thúc đẩy giao thương nông lâm thuỷ sản thông qua các cửa khẩu 2 tỉnh này.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Nỗi buồn nông dân: Giá nông sản sụt giảm, nguyên liệu đầu vào tăng và neo cao",
            "abstract": "Áp lực từ thị trường, giá thức ăn chăn nuôi tiếp tục tăng, còn giá phân bón neo ở mức cao. Trong khi giá nhiều loại nông sản lại giảm sâu khiến nông dân thua lỗ nặng.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Thủ tướng Chính phủ Phạm Minh Chính vừa ký ban hành Công điện số 492/CĐ-TTg ngày 31/5/2023 về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Công điện nêu rõ, qua theo dõi nắm tình hình và phản ánh của các cơ quan liên quan, những ngày gần đây, số lượng xe chở hàng nông sản xuất khẩu tăng đột biến tại các cửa khẩu trên địa bàn tỉnh Lạng Sơn, trong khi thời gian làm thủ tục thông quan kéo dài, năng lực thông quan hạn chế dễ gây ra tình trạng ùn ứ tại cửa khẩu.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Thủ tướng: Không để tái diễn nông sản ùn ứ tại cửa khẩu",
            "abstract": "Thủ tướng Chính phủ ban hành Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Hiện nay, một số loại trái cây đang vào vụ thu hoạch (sầu riêng, mít, vải, thanh long… ); dự báo phương tiện đường bộ chở hoa quả và nông sản xuất khẩu từ các địa phương sẽ tiếp tục dồn về các cửa khẩu trên địa bàn tỉnh Lạng Sơn và các tỉnh biên giới phía Bắc, nguy cơ xảy ra tình trạng ùn ứ hàng nông sản xuất khẩu, gia tăng chi phí, gây thiệt hại cho người dân, doanh nghiệp và ảnh hưởng đến an toàn giao thông, an ninh, trật tự, vệ sinh môi trường tại khu vực một số cửa khẩu ở Lạng Sơn. \n Do đó, Thủ tướng Chính phủ yêu cầu bộ trưởng các bộ: Công Thương, Tài chính, NN-PTNT, Ngoại giao, Giao thông vận tải, Thông tin và Truyền thông, Quốc phòng, Công an và chủ tịch UBND các tỉnh, thành phố trực thuộc Trung ương, các cơ quan liên quan chủ động chỉ đạo, tổ chức triển khai các giải pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản đang vào mùa vụ được thuận lợi.",
            "views": 20,
            "type": 2,
            "authorId": 1
        },
        {
            "title": "Xuất khẩu nông sản sang Trung Quốc, Bộ Nông nghiệp báo cáo giải pháp cấp bách",
            "abstract": "Bộ Nông nghiệp vừa có báo cáo gửi Thủ tướng về việc triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản sang Trung Quốc tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Ngày 6/6, Bộ NN-PTNT đã có báo cáo gửi Thủ tướng Chính phủ Phạm Minh Chính và Phó Thủ tướng Trần Lưu Quang việc thực hiện Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Báo cáo nêu rõ, Bộ NN-PTNT đã cử đoàn công tác do Thứ trưởng Trần Thanh Nam dẫn đầu sang làm việc với chính quyền, Cục Hải quan hai tỉnh Quảng Tây và tỉnh Vân Nam (Trung Quốc) và chỉ đạo tổ chức Diễn đàn kết nối giao thương nông lâm thủy sản giữa Việt Nam - Trung Quốc qua hai tỉnh. \n Tại các cuộc hội đàm với phía bạn, trước mắt hai bên thống nhất chỉ đạo các đơn vị hải quan, kiểm dịch hai bên cửa khẩu có cơ chế thường xuyên giao lưu trao đổi quy trình nghiệp vụ, cập nhật thông tin phối hợp thông quan nhanh chóng, đặc biệt ưu tiên các mặt hàng tươi sống vào vụ thu hoạch nhằm giảm ùn ứ, thúc đẩy giao thương nông lâm thuỷ sản thông qua các cửa khẩu 2 tỉnh này.",
            "views": 20,
            "type": 1,
            "authorId": 1
        },
        {
            "title": "Nỗi buồn nông dân: Giá nông sản sụt giảm, nguyên liệu đầu vào tăng và neo cao",
            "abstract": "Áp lực từ thị trường, giá thức ăn chăn nuôi tiếp tục tăng, còn giá phân bón neo ở mức cao. Trong khi giá nhiều loại nông sản lại giảm sâu khiến nông dân thua lỗ nặng.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Thủ tướng Chính phủ Phạm Minh Chính vừa ký ban hành Công điện số 492/CĐ-TTg ngày 31/5/2023 về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Công điện nêu rõ, qua theo dõi nắm tình hình và phản ánh của các cơ quan liên quan, những ngày gần đây, số lượng xe chở hàng nông sản xuất khẩu tăng đột biến tại các cửa khẩu trên địa bàn tỉnh Lạng Sơn, trong khi thời gian làm thủ tục thông quan kéo dài, năng lực thông quan hạn chế dễ gây ra tình trạng ùn ứ tại cửa khẩu.",
            "views": 20,
            "type": 2,
            "authorId": 1
        },
        {
            "title": "Thủ tướng: Không để tái diễn nông sản ùn ứ tại cửa khẩu",
            "abstract": "Thủ tướng Chính phủ ban hành Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Hiện nay, một số loại trái cây đang vào vụ thu hoạch (sầu riêng, mít, vải, thanh long… ); dự báo phương tiện đường bộ chở hoa quả và nông sản xuất khẩu từ các địa phương sẽ tiếp tục dồn về các cửa khẩu trên địa bàn tỉnh Lạng Sơn và các tỉnh biên giới phía Bắc, nguy cơ xảy ra tình trạng ùn ứ hàng nông sản xuất khẩu, gia tăng chi phí, gây thiệt hại cho người dân, doanh nghiệp và ảnh hưởng đến an toàn giao thông, an ninh, trật tự, vệ sinh môi trường tại khu vực một số cửa khẩu ở Lạng Sơn. \n Do đó, Thủ tướng Chính phủ yêu cầu bộ trưởng các bộ: Công Thương, Tài chính, NN-PTNT, Ngoại giao, Giao thông vận tải, Thông tin và Truyền thông, Quốc phòng, Công an và chủ tịch UBND các tỉnh, thành phố trực thuộc Trung ương, các cơ quan liên quan chủ động chỉ đạo, tổ chức triển khai các giải pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản đang vào mùa vụ được thuận lợi.",
            "views": 20,
            "type": 1,
            "authorId": 1
        },
        {
            "title": "Xuất khẩu nông sản sang Trung Quốc, Bộ Nông nghiệp báo cáo giải pháp cấp bách",
            "abstract": "Bộ Nông nghiệp vừa có báo cáo gửi Thủ tướng về việc triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản sang Trung Quốc tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Ngày 6/6, Bộ NN-PTNT đã có báo cáo gửi Thủ tướng Chính phủ Phạm Minh Chính và Phó Thủ tướng Trần Lưu Quang việc thực hiện Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Báo cáo nêu rõ, Bộ NN-PTNT đã cử đoàn công tác do Thứ trưởng Trần Thanh Nam dẫn đầu sang làm việc với chính quyền, Cục Hải quan hai tỉnh Quảng Tây và tỉnh Vân Nam (Trung Quốc) và chỉ đạo tổ chức Diễn đàn kết nối giao thương nông lâm thủy sản giữa Việt Nam - Trung Quốc qua hai tỉnh. \n Tại các cuộc hội đàm với phía bạn, trước mắt hai bên thống nhất chỉ đạo các đơn vị hải quan, kiểm dịch hai bên cửa khẩu có cơ chế thường xuyên giao lưu trao đổi quy trình nghiệp vụ, cập nhật thông tin phối hợp thông quan nhanh chóng, đặc biệt ưu tiên các mặt hàng tươi sống vào vụ thu hoạch nhằm giảm ùn ứ, thúc đẩy giao thương nông lâm thuỷ sản thông qua các cửa khẩu 2 tỉnh này.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Nỗi buồn nông dân: Giá nông sản sụt giảm, nguyên liệu đầu vào tăng và neo cao",
            "abstract": "Áp lực từ thị trường, giá thức ăn chăn nuôi tiếp tục tăng, còn giá phân bón neo ở mức cao. Trong khi giá nhiều loại nông sản lại giảm sâu khiến nông dân thua lỗ nặng.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Thủ tướng Chính phủ Phạm Minh Chính vừa ký ban hành Công điện số 492/CĐ-TTg ngày 31/5/2023 về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Công điện nêu rõ, qua theo dõi nắm tình hình và phản ánh của các cơ quan liên quan, những ngày gần đây, số lượng xe chở hàng nông sản xuất khẩu tăng đột biến tại các cửa khẩu trên địa bàn tỉnh Lạng Sơn, trong khi thời gian làm thủ tục thông quan kéo dài, năng lực thông quan hạn chế dễ gây ra tình trạng ùn ứ tại cửa khẩu.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Thủ tướng: Không để tái diễn nông sản ùn ứ tại cửa khẩu",
            "abstract": "Thủ tướng Chính phủ ban hành Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Hiện nay, một số loại trái cây đang vào vụ thu hoạch (sầu riêng, mít, vải, thanh long… ); dự báo phương tiện đường bộ chở hoa quả và nông sản xuất khẩu từ các địa phương sẽ tiếp tục dồn về các cửa khẩu trên địa bàn tỉnh Lạng Sơn và các tỉnh biên giới phía Bắc, nguy cơ xảy ra tình trạng ùn ứ hàng nông sản xuất khẩu, gia tăng chi phí, gây thiệt hại cho người dân, doanh nghiệp và ảnh hưởng đến an toàn giao thông, an ninh, trật tự, vệ sinh môi trường tại khu vực một số cửa khẩu ở Lạng Sơn. \n Do đó, Thủ tướng Chính phủ yêu cầu bộ trưởng các bộ: Công Thương, Tài chính, NN-PTNT, Ngoại giao, Giao thông vận tải, Thông tin và Truyền thông, Quốc phòng, Công an và chủ tịch UBND các tỉnh, thành phố trực thuộc Trung ương, các cơ quan liên quan chủ động chỉ đạo, tổ chức triển khai các giải pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản đang vào mùa vụ được thuận lợi.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Xuất khẩu nông sản sang Trung Quốc, Bộ Nông nghiệp báo cáo giải pháp cấp bách",
            "abstract": "Bộ Nông nghiệp vừa có báo cáo gửi Thủ tướng về việc triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản sang Trung Quốc tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Ngày 6/6, Bộ NN-PTNT đã có báo cáo gửi Thủ tướng Chính phủ Phạm Minh Chính và Phó Thủ tướng Trần Lưu Quang việc thực hiện Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Báo cáo nêu rõ, Bộ NN-PTNT đã cử đoàn công tác do Thứ trưởng Trần Thanh Nam dẫn đầu sang làm việc với chính quyền, Cục Hải quan hai tỉnh Quảng Tây và tỉnh Vân Nam (Trung Quốc) và chỉ đạo tổ chức Diễn đàn kết nối giao thương nông lâm thủy sản giữa Việt Nam - Trung Quốc qua hai tỉnh. \n Tại các cuộc hội đàm với phía bạn, trước mắt hai bên thống nhất chỉ đạo các đơn vị hải quan, kiểm dịch hai bên cửa khẩu có cơ chế thường xuyên giao lưu trao đổi quy trình nghiệp vụ, cập nhật thông tin phối hợp thông quan nhanh chóng, đặc biệt ưu tiên các mặt hàng tươi sống vào vụ thu hoạch nhằm giảm ùn ứ, thúc đẩy giao thương nông lâm thuỷ sản thông qua các cửa khẩu 2 tỉnh này.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Nỗi buồn nông dân: Giá nông sản sụt giảm, nguyên liệu đầu vào tăng và neo cao",
            "abstract": "Áp lực từ thị trường, giá thức ăn chăn nuôi tiếp tục tăng, còn giá phân bón neo ở mức cao. Trong khi giá nhiều loại nông sản lại giảm sâu khiến nông dân thua lỗ nặng.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Thủ tướng Chính phủ Phạm Minh Chính vừa ký ban hành Công điện số 492/CĐ-TTg ngày 31/5/2023 về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Công điện nêu rõ, qua theo dõi nắm tình hình và phản ánh của các cơ quan liên quan, những ngày gần đây, số lượng xe chở hàng nông sản xuất khẩu tăng đột biến tại các cửa khẩu trên địa bàn tỉnh Lạng Sơn, trong khi thời gian làm thủ tục thông quan kéo dài, năng lực thông quan hạn chế dễ gây ra tình trạng ùn ứ tại cửa khẩu.",
            "views": 20,
            "type": 2,
            "authorId": 1
        },
        {
            "title": "Thủ tướng: Không để tái diễn nông sản ùn ứ tại cửa khẩu",
            "abstract": "Thủ tướng Chính phủ ban hành Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Hiện nay, một số loại trái cây đang vào vụ thu hoạch (sầu riêng, mít, vải, thanh long… ); dự báo phương tiện đường bộ chở hoa quả và nông sản xuất khẩu từ các địa phương sẽ tiếp tục dồn về các cửa khẩu trên địa bàn tỉnh Lạng Sơn và các tỉnh biên giới phía Bắc, nguy cơ xảy ra tình trạng ùn ứ hàng nông sản xuất khẩu, gia tăng chi phí, gây thiệt hại cho người dân, doanh nghiệp và ảnh hưởng đến an toàn giao thông, an ninh, trật tự, vệ sinh môi trường tại khu vực một số cửa khẩu ở Lạng Sơn. \n Do đó, Thủ tướng Chính phủ yêu cầu bộ trưởng các bộ: Công Thương, Tài chính, NN-PTNT, Ngoại giao, Giao thông vận tải, Thông tin và Truyền thông, Quốc phòng, Công an và chủ tịch UBND các tỉnh, thành phố trực thuộc Trung ương, các cơ quan liên quan chủ động chỉ đạo, tổ chức triển khai các giải pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản đang vào mùa vụ được thuận lợi.",
            "views": 20,
            "type": 4,
            "authorId": 1
        },
        {
            "title": "Xuất khẩu nông sản sang Trung Quốc, Bộ Nông nghiệp báo cáo giải pháp cấp bách",
            "abstract": "Bộ Nông nghiệp vừa có báo cáo gửi Thủ tướng về việc triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản sang Trung Quốc tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Ngày 6/6, Bộ NN-PTNT đã có báo cáo gửi Thủ tướng Chính phủ Phạm Minh Chính và Phó Thủ tướng Trần Lưu Quang việc thực hiện Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Báo cáo nêu rõ, Bộ NN-PTNT đã cử đoàn công tác do Thứ trưởng Trần Thanh Nam dẫn đầu sang làm việc với chính quyền, Cục Hải quan hai tỉnh Quảng Tây và tỉnh Vân Nam (Trung Quốc) và chỉ đạo tổ chức Diễn đàn kết nối giao thương nông lâm thủy sản giữa Việt Nam - Trung Quốc qua hai tỉnh. \n Tại các cuộc hội đàm với phía bạn, trước mắt hai bên thống nhất chỉ đạo các đơn vị hải quan, kiểm dịch hai bên cửa khẩu có cơ chế thường xuyên giao lưu trao đổi quy trình nghiệp vụ, cập nhật thông tin phối hợp thông quan nhanh chóng, đặc biệt ưu tiên các mặt hàng tươi sống vào vụ thu hoạch nhằm giảm ùn ứ, thúc đẩy giao thương nông lâm thuỷ sản thông qua các cửa khẩu 2 tỉnh này.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Nỗi buồn nông dân: Giá nông sản sụt giảm, nguyên liệu đầu vào tăng và neo cao",
            "abstract": "Áp lực từ thị trường, giá thức ăn chăn nuôi tiếp tục tăng, còn giá phân bón neo ở mức cao. Trong khi giá nhiều loại nông sản lại giảm sâu khiến nông dân thua lỗ nặng.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Thủ tướng Chính phủ Phạm Minh Chính vừa ký ban hành Công điện số 492/CĐ-TTg ngày 31/5/2023 về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc. \n Công điện nêu rõ, qua theo dõi nắm tình hình và phản ánh của các cơ quan liên quan, những ngày gần đây, số lượng xe chở hàng nông sản xuất khẩu tăng đột biến tại các cửa khẩu trên địa bàn tỉnh Lạng Sơn, trong khi thời gian làm thủ tục thông quan kéo dài, năng lực thông quan hạn chế dễ gây ra tình trạng ùn ứ tại cửa khẩu.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Thủ tướng: Không để tái diễn nông sản ùn ứ tại cửa khẩu",
            "abstract": "Thủ tướng Chính phủ ban hành Công điện về việc chủ động triển khai các biện pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản tại các cửa khẩu biên giới phía Bắc.",
            "mainImg": "/images/articles/article-1.png",
            "content": "Hiện nay, một số loại trái cây đang vào vụ thu hoạch (sầu riêng, mít, vải, thanh long… ); dự báo phương tiện đường bộ chở hoa quả và nông sản xuất khẩu từ các địa phương sẽ tiếp tục dồn về các cửa khẩu trên địa bàn tỉnh Lạng Sơn và các tỉnh biên giới phía Bắc, nguy cơ xảy ra tình trạng ùn ứ hàng nông sản xuất khẩu, gia tăng chi phí, gây thiệt hại cho người dân, doanh nghiệp và ảnh hưởng đến an toàn giao thông, an ninh, trật tự, vệ sinh môi trường tại khu vực một số cửa khẩu ở Lạng Sơn. \n Do đó, Thủ tướng Chính phủ yêu cầu bộ trưởng các bộ: Công Thương, Tài chính, NN-PTNT, Ngoại giao, Giao thông vận tải, Thông tin và Truyền thông, Quốc phòng, Công an và chủ tịch UBND các tỉnh, thành phố trực thuộc Trung ương, các cơ quan liên quan chủ động chỉ đạo, tổ chức triển khai các giải pháp cấp bách nhằm giảm ùn ứ và thúc đẩy xuất khẩu nông sản đang vào mùa vụ được thuận lợi.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Tiềm năng hợp tác thủy hải sản Việt Nam-Na Uy rất lớn",
            "abstract": "Theo thống kê của Tổng cục Hải quan năm 2022, Việt Nam đã nhập khẩu khoảng 259,8 triệu USD hải sản từ Na Uy và xuất khẩu 9,4 triệu USD, với tốc độ tăng trưởng lần lượt là 16,5% và 5,2%.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Đại sứ Hilde Solbakken đã đích thân cùng các đầu bếp chuẩn bị những món ăn hấp dẫn dành cho khách tham dự sự kiện theo truyền thống hiếu khách của người Na Uy. \n Phát biểu khai mạc Ngày hội Hải sản Na Uy, Đại sứ Solbakken cho biết: \"Sự kiện lần này sẽ mang hương vị Na Uy đến với những người yêu thích hải sản tại Hà Nội nói riêng và trên toàn Việt Nam nói chung. \n Nguồn nước biển trong lành và lạnh giá giúp hải sản Na Uy có hương vị và kết cấu đặc biệt. Chú trọng tới mục tiêu quản lý bền vững các nguồn tài nguyên biển và tỉ mỉ trong từng khâu đưa hải sản từ biển khơi đến bàn ăn đã tạo nên một thương hiệu hải sản Na Uy nổi tiếng về chất lượng trên toàn thế giới. Tôi tin rằng người tiêu dùng hải sản tại Việt Nam sẽ đánh giá cao chất lượng cũng như sẽ tin tưởng, ủng hộ lâu dài các sản phẩm cá hồi và cua nâu đến từ Na Uy\", Đại sứ chia sẻ.",
            "views": 15,
            "type": 2,
            "authorId": 2
        },
        {
            "title": "Giá hải sản tăng chóng mặt, thực phẩm giải nhiệt đắt khách",
            "abstract": "Giá hải sản trong nước lẫn nhập khẩu đều tăng từ 20-30% so với đầu năm khiến nhiều người tiêu dùng giật mình. Trong khi đó, nhiều mặt hàng thực phẩm giải nhiệt lên ngôi trong mùa nắng nóng.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Chị Nghiêm Huyền (Gò Vấp, TP.HCM) cho biết trên Báo Pháp Luật TP.HCM, nếu như sau Tết, giá cua Cà Mau chỉ khoảng 450.000 đồng/kg thì nay đã tăng lên 500.000-600.000 đồng/kg; tôm sú sống loại 30-35 con/kg tăng từ 165-170.000 đồng lên 190.000-200.000 đồng/kg. Ông Trần Văn Trường, Tổng Giám đốc Công ty TNHH Thương mại Quốc tế Hải Sản Hoàng Gia, thông tin trên báo này, hiện giá hải sản trong nước lẫn nhập khẩu tăng cao. \"Riêng hải sản trong nước từ tôm, cua, ghẹ, ốc… đều có mức tăng so với đầu năm và cùng kỳ năm ngoái. So với hồi đầu năm giá hải sản trong nước tăng 20-30% tùy vào mặt hàng, mức tăng này thực tế là rất cao, khiến cho giá trị đơn hàng mỗi lần mua sắm của người tiêu dùng cũng giảm\", ông Trường nói. \n Vào những ngày nắng nóng, mặt hàng thực phẩm ăn uống có tác dụng giải nhiệt cơ thể tiêu thụ mạnh. Đáng nói, có những mặt hàng tăng cao gấp đôi nhưng vẫn hút khách.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Bia và hải sản: Ngon miệng nhưng nguy cơ gây căn bệnh đau đớn",
            "abstract": "Trong bia và hải sản có nhiều chất purin, nếu ăn quá nhiều sẽ dẫn đến mắc bệnh gout.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Bệnh gout (còn gọi là gút hay thống phong) là một dạng viêm khớp phổ biến. Người bệnh thường phải chịu những cơn đau đột ngột và dữ dội ở các khớp ngón chân, ngón tay, đầu gối kèm theo sưng đó. Một số trường hợp nặng thậm chí không đi lại được. \n Nguyên nhân của bệnh do rối loạn chuyển hóa nhân purin trong thận, khiến thận không thể lọc axit uric trong máu. Nồng độ axit uric quá cao sẽ dẫn tới hình thành những tinh thể urat của axit uric, tập trung ở khớp và gây viêm sưng. \n Các bữa ăn kết hợp hải sản và bia là yếu tố nguy cơ cao dẫn tới bệnh gout do cả hai loại thực phẩm đều chứa nhiều purin. Việc hấp thụ quá nhiều purin khiến thận quá tải, không đào thải hết sẽ dẫn đến rối loạn chuyển hóa purin, từ đó làm tăng axit uric.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Tiềm năng hợp tác thủy hải sản Việt Nam-Na Uy rất lớn",
            "abstract": "Theo thống kê của Tổng cục Hải quan năm 2022, Việt Nam đã nhập khẩu khoảng 259,8 triệu USD hải sản từ Na Uy và xuất khẩu 9,4 triệu USD, với tốc độ tăng trưởng lần lượt là 16,5% và 5,2%.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Đại sứ Hilde Solbakken đã đích thân cùng các đầu bếp chuẩn bị những món ăn hấp dẫn dành cho khách tham dự sự kiện theo truyền thống hiếu khách của người Na Uy. \n Phát biểu khai mạc Ngày hội Hải sản Na Uy, Đại sứ Solbakken cho biết: \"Sự kiện lần này sẽ mang hương vị Na Uy đến với những người yêu thích hải sản tại Hà Nội nói riêng và trên toàn Việt Nam nói chung. \n Nguồn nước biển trong lành và lạnh giá giúp hải sản Na Uy có hương vị và kết cấu đặc biệt. Chú trọng tới mục tiêu quản lý bền vững các nguồn tài nguyên biển và tỉ mỉ trong từng khâu đưa hải sản từ biển khơi đến bàn ăn đã tạo nên một thương hiệu hải sản Na Uy nổi tiếng về chất lượng trên toàn thế giới. Tôi tin rằng người tiêu dùng hải sản tại Việt Nam sẽ đánh giá cao chất lượng cũng như sẽ tin tưởng, ủng hộ lâu dài các sản phẩm cá hồi và cua nâu đến từ Na Uy\", Đại sứ chia sẻ.",
            "views": 15,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Giá hải sản tăng chóng mặt, thực phẩm giải nhiệt đắt khách",
            "abstract": "Giá hải sản trong nước lẫn nhập khẩu đều tăng từ 20-30% so với đầu năm khiến nhiều người tiêu dùng giật mình. Trong khi đó, nhiều mặt hàng thực phẩm giải nhiệt lên ngôi trong mùa nắng nóng.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Chị Nghiêm Huyền (Gò Vấp, TP.HCM) cho biết trên Báo Pháp Luật TP.HCM, nếu như sau Tết, giá cua Cà Mau chỉ khoảng 450.000 đồng/kg thì nay đã tăng lên 500.000-600.000 đồng/kg; tôm sú sống loại 30-35 con/kg tăng từ 165-170.000 đồng lên 190.000-200.000 đồng/kg. Ông Trần Văn Trường, Tổng Giám đốc Công ty TNHH Thương mại Quốc tế Hải Sản Hoàng Gia, thông tin trên báo này, hiện giá hải sản trong nước lẫn nhập khẩu tăng cao. \"Riêng hải sản trong nước từ tôm, cua, ghẹ, ốc… đều có mức tăng so với đầu năm và cùng kỳ năm ngoái. So với hồi đầu năm giá hải sản trong nước tăng 20-30% tùy vào mặt hàng, mức tăng này thực tế là rất cao, khiến cho giá trị đơn hàng mỗi lần mua sắm của người tiêu dùng cũng giảm\", ông Trường nói. \n Vào những ngày nắng nóng, mặt hàng thực phẩm ăn uống có tác dụng giải nhiệt cơ thể tiêu thụ mạnh. Đáng nói, có những mặt hàng tăng cao gấp đôi nhưng vẫn hút khách.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Bia và hải sản: Ngon miệng nhưng nguy cơ gây căn bệnh đau đớn",
            "abstract": "Trong bia và hải sản có nhiều chất purin, nếu ăn quá nhiều sẽ dẫn đến mắc bệnh gout.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Bệnh gout (còn gọi là gút hay thống phong) là một dạng viêm khớp phổ biến. Người bệnh thường phải chịu những cơn đau đột ngột và dữ dội ở các khớp ngón chân, ngón tay, đầu gối kèm theo sưng đó. Một số trường hợp nặng thậm chí không đi lại được. \n Nguyên nhân của bệnh do rối loạn chuyển hóa nhân purin trong thận, khiến thận không thể lọc axit uric trong máu. Nồng độ axit uric quá cao sẽ dẫn tới hình thành những tinh thể urat của axit uric, tập trung ở khớp và gây viêm sưng. \n Các bữa ăn kết hợp hải sản và bia là yếu tố nguy cơ cao dẫn tới bệnh gout do cả hai loại thực phẩm đều chứa nhiều purin. Việc hấp thụ quá nhiều purin khiến thận quá tải, không đào thải hết sẽ dẫn đến rối loạn chuyển hóa purin, từ đó làm tăng axit uric.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Tiềm năng hợp tác thủy hải sản Việt Nam-Na Uy rất lớn",
            "abstract": "Theo thống kê của Tổng cục Hải quan năm 2022, Việt Nam đã nhập khẩu khoảng 259,8 triệu USD hải sản từ Na Uy và xuất khẩu 9,4 triệu USD, với tốc độ tăng trưởng lần lượt là 16,5% và 5,2%.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Đại sứ Hilde Solbakken đã đích thân cùng các đầu bếp chuẩn bị những món ăn hấp dẫn dành cho khách tham dự sự kiện theo truyền thống hiếu khách của người Na Uy. \n Phát biểu khai mạc Ngày hội Hải sản Na Uy, Đại sứ Solbakken cho biết: \"Sự kiện lần này sẽ mang hương vị Na Uy đến với những người yêu thích hải sản tại Hà Nội nói riêng và trên toàn Việt Nam nói chung. \n Nguồn nước biển trong lành và lạnh giá giúp hải sản Na Uy có hương vị và kết cấu đặc biệt. Chú trọng tới mục tiêu quản lý bền vững các nguồn tài nguyên biển và tỉ mỉ trong từng khâu đưa hải sản từ biển khơi đến bàn ăn đã tạo nên một thương hiệu hải sản Na Uy nổi tiếng về chất lượng trên toàn thế giới. Tôi tin rằng người tiêu dùng hải sản tại Việt Nam sẽ đánh giá cao chất lượng cũng như sẽ tin tưởng, ủng hộ lâu dài các sản phẩm cá hồi và cua nâu đến từ Na Uy\", Đại sứ chia sẻ.",
            "views": 15,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Giá hải sản tăng chóng mặt, thực phẩm giải nhiệt đắt khách",
            "abstract": "Giá hải sản trong nước lẫn nhập khẩu đều tăng từ 20-30% so với đầu năm khiến nhiều người tiêu dùng giật mình. Trong khi đó, nhiều mặt hàng thực phẩm giải nhiệt lên ngôi trong mùa nắng nóng.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Chị Nghiêm Huyền (Gò Vấp, TP.HCM) cho biết trên Báo Pháp Luật TP.HCM, nếu như sau Tết, giá cua Cà Mau chỉ khoảng 450.000 đồng/kg thì nay đã tăng lên 500.000-600.000 đồng/kg; tôm sú sống loại 30-35 con/kg tăng từ 165-170.000 đồng lên 190.000-200.000 đồng/kg. Ông Trần Văn Trường, Tổng Giám đốc Công ty TNHH Thương mại Quốc tế Hải Sản Hoàng Gia, thông tin trên báo này, hiện giá hải sản trong nước lẫn nhập khẩu tăng cao. \"Riêng hải sản trong nước từ tôm, cua, ghẹ, ốc… đều có mức tăng so với đầu năm và cùng kỳ năm ngoái. So với hồi đầu năm giá hải sản trong nước tăng 20-30% tùy vào mặt hàng, mức tăng này thực tế là rất cao, khiến cho giá trị đơn hàng mỗi lần mua sắm của người tiêu dùng cũng giảm\", ông Trường nói. \n Vào những ngày nắng nóng, mặt hàng thực phẩm ăn uống có tác dụng giải nhiệt cơ thể tiêu thụ mạnh. Đáng nói, có những mặt hàng tăng cao gấp đôi nhưng vẫn hút khách.",
            "views": 20,
            "type": 2,
            "authorId": 2
        },
        {
            "title": "Bia và hải sản: Ngon miệng nhưng nguy cơ gây căn bệnh đau đớn",
            "abstract": "Trong bia và hải sản có nhiều chất purin, nếu ăn quá nhiều sẽ dẫn đến mắc bệnh gout.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Bệnh gout (còn gọi là gút hay thống phong) là một dạng viêm khớp phổ biến. Người bệnh thường phải chịu những cơn đau đột ngột và dữ dội ở các khớp ngón chân, ngón tay, đầu gối kèm theo sưng đó. Một số trường hợp nặng thậm chí không đi lại được. \n Nguyên nhân của bệnh do rối loạn chuyển hóa nhân purin trong thận, khiến thận không thể lọc axit uric trong máu. Nồng độ axit uric quá cao sẽ dẫn tới hình thành những tinh thể urat của axit uric, tập trung ở khớp và gây viêm sưng. \n Các bữa ăn kết hợp hải sản và bia là yếu tố nguy cơ cao dẫn tới bệnh gout do cả hai loại thực phẩm đều chứa nhiều purin. Việc hấp thụ quá nhiều purin khiến thận quá tải, không đào thải hết sẽ dẫn đến rối loạn chuyển hóa purin, từ đó làm tăng axit uric.",
            "views": 20,
            "type": 1,
            "authorId": 2
        },
        {
            "title": "Tiềm năng hợp tác thủy hải sản Việt Nam-Na Uy rất lớn",
            "abstract": "Theo thống kê của Tổng cục Hải quan năm 2022, Việt Nam đã nhập khẩu khoảng 259,8 triệu USD hải sản từ Na Uy và xuất khẩu 9,4 triệu USD, với tốc độ tăng trưởng lần lượt là 16,5% và 5,2%.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Đại sứ Hilde Solbakken đã đích thân cùng các đầu bếp chuẩn bị những món ăn hấp dẫn dành cho khách tham dự sự kiện theo truyền thống hiếu khách của người Na Uy. \n Phát biểu khai mạc Ngày hội Hải sản Na Uy, Đại sứ Solbakken cho biết: \"Sự kiện lần này sẽ mang hương vị Na Uy đến với những người yêu thích hải sản tại Hà Nội nói riêng và trên toàn Việt Nam nói chung. \n Nguồn nước biển trong lành và lạnh giá giúp hải sản Na Uy có hương vị và kết cấu đặc biệt. Chú trọng tới mục tiêu quản lý bền vững các nguồn tài nguyên biển và tỉ mỉ trong từng khâu đưa hải sản từ biển khơi đến bàn ăn đã tạo nên một thương hiệu hải sản Na Uy nổi tiếng về chất lượng trên toàn thế giới. Tôi tin rằng người tiêu dùng hải sản tại Việt Nam sẽ đánh giá cao chất lượng cũng như sẽ tin tưởng, ủng hộ lâu dài các sản phẩm cá hồi và cua nâu đến từ Na Uy\", Đại sứ chia sẻ.",
            "views": 15,
            "type": 2,
            "authorId": 2
        },
        {
            "title": "Giá hải sản tăng chóng mặt, thực phẩm giải nhiệt đắt khách",
            "abstract": "Giá hải sản trong nước lẫn nhập khẩu đều tăng từ 20-30% so với đầu năm khiến nhiều người tiêu dùng giật mình. Trong khi đó, nhiều mặt hàng thực phẩm giải nhiệt lên ngôi trong mùa nắng nóng.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Chị Nghiêm Huyền (Gò Vấp, TP.HCM) cho biết trên Báo Pháp Luật TP.HCM, nếu như sau Tết, giá cua Cà Mau chỉ khoảng 450.000 đồng/kg thì nay đã tăng lên 500.000-600.000 đồng/kg; tôm sú sống loại 30-35 con/kg tăng từ 165-170.000 đồng lên 190.000-200.000 đồng/kg. Ông Trần Văn Trường, Tổng Giám đốc Công ty TNHH Thương mại Quốc tế Hải Sản Hoàng Gia, thông tin trên báo này, hiện giá hải sản trong nước lẫn nhập khẩu tăng cao. \"Riêng hải sản trong nước từ tôm, cua, ghẹ, ốc… đều có mức tăng so với đầu năm và cùng kỳ năm ngoái. So với hồi đầu năm giá hải sản trong nước tăng 20-30% tùy vào mặt hàng, mức tăng này thực tế là rất cao, khiến cho giá trị đơn hàng mỗi lần mua sắm của người tiêu dùng cũng giảm\", ông Trường nói. \n Vào những ngày nắng nóng, mặt hàng thực phẩm ăn uống có tác dụng giải nhiệt cơ thể tiêu thụ mạnh. Đáng nói, có những mặt hàng tăng cao gấp đôi nhưng vẫn hút khách.",
            "views": 20,
            "type": 1,
            "authorId": 2
        },
        {
            "title": "Bia và hải sản: Ngon miệng nhưng nguy cơ gây căn bệnh đau đớn",
            "abstract": "Trong bia và hải sản có nhiều chất purin, nếu ăn quá nhiều sẽ dẫn đến mắc bệnh gout.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Bệnh gout (còn gọi là gút hay thống phong) là một dạng viêm khớp phổ biến. Người bệnh thường phải chịu những cơn đau đột ngột và dữ dội ở các khớp ngón chân, ngón tay, đầu gối kèm theo sưng đó. Một số trường hợp nặng thậm chí không đi lại được. \n Nguyên nhân của bệnh do rối loạn chuyển hóa nhân purin trong thận, khiến thận không thể lọc axit uric trong máu. Nồng độ axit uric quá cao sẽ dẫn tới hình thành những tinh thể urat của axit uric, tập trung ở khớp và gây viêm sưng. \n Các bữa ăn kết hợp hải sản và bia là yếu tố nguy cơ cao dẫn tới bệnh gout do cả hai loại thực phẩm đều chứa nhiều purin. Việc hấp thụ quá nhiều purin khiến thận quá tải, không đào thải hết sẽ dẫn đến rối loạn chuyển hóa purin, từ đó làm tăng axit uric.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Tiềm năng hợp tác thủy hải sản Việt Nam-Na Uy rất lớn",
            "abstract": "Theo thống kê của Tổng cục Hải quan năm 2022, Việt Nam đã nhập khẩu khoảng 259,8 triệu USD hải sản từ Na Uy và xuất khẩu 9,4 triệu USD, với tốc độ tăng trưởng lần lượt là 16,5% và 5,2%.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Đại sứ Hilde Solbakken đã đích thân cùng các đầu bếp chuẩn bị những món ăn hấp dẫn dành cho khách tham dự sự kiện theo truyền thống hiếu khách của người Na Uy. \n Phát biểu khai mạc Ngày hội Hải sản Na Uy, Đại sứ Solbakken cho biết: \"Sự kiện lần này sẽ mang hương vị Na Uy đến với những người yêu thích hải sản tại Hà Nội nói riêng và trên toàn Việt Nam nói chung. \n Nguồn nước biển trong lành và lạnh giá giúp hải sản Na Uy có hương vị và kết cấu đặc biệt. Chú trọng tới mục tiêu quản lý bền vững các nguồn tài nguyên biển và tỉ mỉ trong từng khâu đưa hải sản từ biển khơi đến bàn ăn đã tạo nên một thương hiệu hải sản Na Uy nổi tiếng về chất lượng trên toàn thế giới. Tôi tin rằng người tiêu dùng hải sản tại Việt Nam sẽ đánh giá cao chất lượng cũng như sẽ tin tưởng, ủng hộ lâu dài các sản phẩm cá hồi và cua nâu đến từ Na Uy\", Đại sứ chia sẻ.",
            "views": 15,
            "type": 1,
            "authorId": 2
        },
        {
            "title": "Giá hải sản tăng chóng mặt, thực phẩm giải nhiệt đắt khách",
            "abstract": "Giá hải sản trong nước lẫn nhập khẩu đều tăng từ 20-30% so với đầu năm khiến nhiều người tiêu dùng giật mình. Trong khi đó, nhiều mặt hàng thực phẩm giải nhiệt lên ngôi trong mùa nắng nóng.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Chị Nghiêm Huyền (Gò Vấp, TP.HCM) cho biết trên Báo Pháp Luật TP.HCM, nếu như sau Tết, giá cua Cà Mau chỉ khoảng 450.000 đồng/kg thì nay đã tăng lên 500.000-600.000 đồng/kg; tôm sú sống loại 30-35 con/kg tăng từ 165-170.000 đồng lên 190.000-200.000 đồng/kg. Ông Trần Văn Trường, Tổng Giám đốc Công ty TNHH Thương mại Quốc tế Hải Sản Hoàng Gia, thông tin trên báo này, hiện giá hải sản trong nước lẫn nhập khẩu tăng cao. \"Riêng hải sản trong nước từ tôm, cua, ghẹ, ốc… đều có mức tăng so với đầu năm và cùng kỳ năm ngoái. So với hồi đầu năm giá hải sản trong nước tăng 20-30% tùy vào mặt hàng, mức tăng này thực tế là rất cao, khiến cho giá trị đơn hàng mỗi lần mua sắm của người tiêu dùng cũng giảm\", ông Trường nói. \n Vào những ngày nắng nóng, mặt hàng thực phẩm ăn uống có tác dụng giải nhiệt cơ thể tiêu thụ mạnh. Đáng nói, có những mặt hàng tăng cao gấp đôi nhưng vẫn hút khách.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Bia và hải sản: Ngon miệng nhưng nguy cơ gây căn bệnh đau đớn",
            "abstract": "Trong bia và hải sản có nhiều chất purin, nếu ăn quá nhiều sẽ dẫn đến mắc bệnh gout.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Bệnh gout (còn gọi là gút hay thống phong) là một dạng viêm khớp phổ biến. Người bệnh thường phải chịu những cơn đau đột ngột và dữ dội ở các khớp ngón chân, ngón tay, đầu gối kèm theo sưng đó. Một số trường hợp nặng thậm chí không đi lại được. \n Nguyên nhân của bệnh do rối loạn chuyển hóa nhân purin trong thận, khiến thận không thể lọc axit uric trong máu. Nồng độ axit uric quá cao sẽ dẫn tới hình thành những tinh thể urat của axit uric, tập trung ở khớp và gây viêm sưng. \n Các bữa ăn kết hợp hải sản và bia là yếu tố nguy cơ cao dẫn tới bệnh gout do cả hai loại thực phẩm đều chứa nhiều purin. Việc hấp thụ quá nhiều purin khiến thận quá tải, không đào thải hết sẽ dẫn đến rối loạn chuyển hóa purin, từ đó làm tăng axit uric.",
            "views": 20,
            "type": 4,
            "authorId": 2
        },
        {
            "title": "Tiềm năng hợp tác thủy hải sản Việt Nam-Na Uy rất lớn",
            "abstract": "Theo thống kê của Tổng cục Hải quan năm 2022, Việt Nam đã nhập khẩu khoảng 259,8 triệu USD hải sản từ Na Uy và xuất khẩu 9,4 triệu USD, với tốc độ tăng trưởng lần lượt là 16,5% và 5,2%.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Đại sứ Hilde Solbakken đã đích thân cùng các đầu bếp chuẩn bị những món ăn hấp dẫn dành cho khách tham dự sự kiện theo truyền thống hiếu khách của người Na Uy. \n Phát biểu khai mạc Ngày hội Hải sản Na Uy, Đại sứ Solbakken cho biết: \"Sự kiện lần này sẽ mang hương vị Na Uy đến với những người yêu thích hải sản tại Hà Nội nói riêng và trên toàn Việt Nam nói chung. \n Nguồn nước biển trong lành và lạnh giá giúp hải sản Na Uy có hương vị và kết cấu đặc biệt. Chú trọng tới mục tiêu quản lý bền vững các nguồn tài nguyên biển và tỉ mỉ trong từng khâu đưa hải sản từ biển khơi đến bàn ăn đã tạo nên một thương hiệu hải sản Na Uy nổi tiếng về chất lượng trên toàn thế giới. Tôi tin rằng người tiêu dùng hải sản tại Việt Nam sẽ đánh giá cao chất lượng cũng như sẽ tin tưởng, ủng hộ lâu dài các sản phẩm cá hồi và cua nâu đến từ Na Uy\", Đại sứ chia sẻ.",
            "views": 15,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Giá hải sản tăng chóng mặt, thực phẩm giải nhiệt đắt khách",
            "abstract": "Giá hải sản trong nước lẫn nhập khẩu đều tăng từ 20-30% so với đầu năm khiến nhiều người tiêu dùng giật mình. Trong khi đó, nhiều mặt hàng thực phẩm giải nhiệt lên ngôi trong mùa nắng nóng.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Chị Nghiêm Huyền (Gò Vấp, TP.HCM) cho biết trên Báo Pháp Luật TP.HCM, nếu như sau Tết, giá cua Cà Mau chỉ khoảng 450.000 đồng/kg thì nay đã tăng lên 500.000-600.000 đồng/kg; tôm sú sống loại 30-35 con/kg tăng từ 165-170.000 đồng lên 190.000-200.000 đồng/kg. Ông Trần Văn Trường, Tổng Giám đốc Công ty TNHH Thương mại Quốc tế Hải Sản Hoàng Gia, thông tin trên báo này, hiện giá hải sản trong nước lẫn nhập khẩu tăng cao. \"Riêng hải sản trong nước từ tôm, cua, ghẹ, ốc… đều có mức tăng so với đầu năm và cùng kỳ năm ngoái. So với hồi đầu năm giá hải sản trong nước tăng 20-30% tùy vào mặt hàng, mức tăng này thực tế là rất cao, khiến cho giá trị đơn hàng mỗi lần mua sắm của người tiêu dùng cũng giảm\", ông Trường nói. \n Vào những ngày nắng nóng, mặt hàng thực phẩm ăn uống có tác dụng giải nhiệt cơ thể tiêu thụ mạnh. Đáng nói, có những mặt hàng tăng cao gấp đôi nhưng vẫn hút khách.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Bia và hải sản: Ngon miệng nhưng nguy cơ gây căn bệnh đau đớn",
            "abstract": "Trong bia và hải sản có nhiều chất purin, nếu ăn quá nhiều sẽ dẫn đến mắc bệnh gout.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Bệnh gout (còn gọi là gút hay thống phong) là một dạng viêm khớp phổ biến. Người bệnh thường phải chịu những cơn đau đột ngột và dữ dội ở các khớp ngón chân, ngón tay, đầu gối kèm theo sưng đó. Một số trường hợp nặng thậm chí không đi lại được. \n Nguyên nhân của bệnh do rối loạn chuyển hóa nhân purin trong thận, khiến thận không thể lọc axit uric trong máu. Nồng độ axit uric quá cao sẽ dẫn tới hình thành những tinh thể urat của axit uric, tập trung ở khớp và gây viêm sưng. \n Các bữa ăn kết hợp hải sản và bia là yếu tố nguy cơ cao dẫn tới bệnh gout do cả hai loại thực phẩm đều chứa nhiều purin. Việc hấp thụ quá nhiều purin khiến thận quá tải, không đào thải hết sẽ dẫn đến rối loạn chuyển hóa purin, từ đó làm tăng axit uric.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Tiềm năng hợp tác thủy hải sản Việt Nam-Na Uy rất lớn",
            "abstract": "Theo thống kê của Tổng cục Hải quan năm 2022, Việt Nam đã nhập khẩu khoảng 259,8 triệu USD hải sản từ Na Uy và xuất khẩu 9,4 triệu USD, với tốc độ tăng trưởng lần lượt là 16,5% và 5,2%.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Đại sứ Hilde Solbakken đã đích thân cùng các đầu bếp chuẩn bị những món ăn hấp dẫn dành cho khách tham dự sự kiện theo truyền thống hiếu khách của người Na Uy. \n Phát biểu khai mạc Ngày hội Hải sản Na Uy, Đại sứ Solbakken cho biết: \"Sự kiện lần này sẽ mang hương vị Na Uy đến với những người yêu thích hải sản tại Hà Nội nói riêng và trên toàn Việt Nam nói chung. \n Nguồn nước biển trong lành và lạnh giá giúp hải sản Na Uy có hương vị và kết cấu đặc biệt. Chú trọng tới mục tiêu quản lý bền vững các nguồn tài nguyên biển và tỉ mỉ trong từng khâu đưa hải sản từ biển khơi đến bàn ăn đã tạo nên một thương hiệu hải sản Na Uy nổi tiếng về chất lượng trên toàn thế giới. Tôi tin rằng người tiêu dùng hải sản tại Việt Nam sẽ đánh giá cao chất lượng cũng như sẽ tin tưởng, ủng hộ lâu dài các sản phẩm cá hồi và cua nâu đến từ Na Uy\", Đại sứ chia sẻ.",
            "views": 15,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Giá hải sản tăng chóng mặt, thực phẩm giải nhiệt đắt khách",
            "abstract": "Giá hải sản trong nước lẫn nhập khẩu đều tăng từ 20-30% so với đầu năm khiến nhiều người tiêu dùng giật mình. Trong khi đó, nhiều mặt hàng thực phẩm giải nhiệt lên ngôi trong mùa nắng nóng.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Chị Nghiêm Huyền (Gò Vấp, TP.HCM) cho biết trên Báo Pháp Luật TP.HCM, nếu như sau Tết, giá cua Cà Mau chỉ khoảng 450.000 đồng/kg thì nay đã tăng lên 500.000-600.000 đồng/kg; tôm sú sống loại 30-35 con/kg tăng từ 165-170.000 đồng lên 190.000-200.000 đồng/kg. Ông Trần Văn Trường, Tổng Giám đốc Công ty TNHH Thương mại Quốc tế Hải Sản Hoàng Gia, thông tin trên báo này, hiện giá hải sản trong nước lẫn nhập khẩu tăng cao. \"Riêng hải sản trong nước từ tôm, cua, ghẹ, ốc… đều có mức tăng so với đầu năm và cùng kỳ năm ngoái. So với hồi đầu năm giá hải sản trong nước tăng 20-30% tùy vào mặt hàng, mức tăng này thực tế là rất cao, khiến cho giá trị đơn hàng mỗi lần mua sắm của người tiêu dùng cũng giảm\", ông Trường nói. \n Vào những ngày nắng nóng, mặt hàng thực phẩm ăn uống có tác dụng giải nhiệt cơ thể tiêu thụ mạnh. Đáng nói, có những mặt hàng tăng cao gấp đôi nhưng vẫn hút khách.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Bia và hải sản: Ngon miệng nhưng nguy cơ gây căn bệnh đau đớn",
            "abstract": "Trong bia và hải sản có nhiều chất purin, nếu ăn quá nhiều sẽ dẫn đến mắc bệnh gout.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Bệnh gout (còn gọi là gút hay thống phong) là một dạng viêm khớp phổ biến. Người bệnh thường phải chịu những cơn đau đột ngột và dữ dội ở các khớp ngón chân, ngón tay, đầu gối kèm theo sưng đó. Một số trường hợp nặng thậm chí không đi lại được. \n Nguyên nhân của bệnh do rối loạn chuyển hóa nhân purin trong thận, khiến thận không thể lọc axit uric trong máu. Nồng độ axit uric quá cao sẽ dẫn tới hình thành những tinh thể urat của axit uric, tập trung ở khớp và gây viêm sưng. \n Các bữa ăn kết hợp hải sản và bia là yếu tố nguy cơ cao dẫn tới bệnh gout do cả hai loại thực phẩm đều chứa nhiều purin. Việc hấp thụ quá nhiều purin khiến thận quá tải, không đào thải hết sẽ dẫn đến rối loạn chuyển hóa purin, từ đó làm tăng axit uric.",
            "views": 20,
            "type": 2,
            "authorId": 2
        },
        {
            "title": "Tiềm năng hợp tác thủy hải sản Việt Nam-Na Uy rất lớn",
            "abstract": "Theo thống kê của Tổng cục Hải quan năm 2022, Việt Nam đã nhập khẩu khoảng 259,8 triệu USD hải sản từ Na Uy và xuất khẩu 9,4 triệu USD, với tốc độ tăng trưởng lần lượt là 16,5% và 5,2%.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Đại sứ Hilde Solbakken đã đích thân cùng các đầu bếp chuẩn bị những món ăn hấp dẫn dành cho khách tham dự sự kiện theo truyền thống hiếu khách của người Na Uy. \n Phát biểu khai mạc Ngày hội Hải sản Na Uy, Đại sứ Solbakken cho biết: \"Sự kiện lần này sẽ mang hương vị Na Uy đến với những người yêu thích hải sản tại Hà Nội nói riêng và trên toàn Việt Nam nói chung. \n Nguồn nước biển trong lành và lạnh giá giúp hải sản Na Uy có hương vị và kết cấu đặc biệt. Chú trọng tới mục tiêu quản lý bền vững các nguồn tài nguyên biển và tỉ mỉ trong từng khâu đưa hải sản từ biển khơi đến bàn ăn đã tạo nên một thương hiệu hải sản Na Uy nổi tiếng về chất lượng trên toàn thế giới. Tôi tin rằng người tiêu dùng hải sản tại Việt Nam sẽ đánh giá cao chất lượng cũng như sẽ tin tưởng, ủng hộ lâu dài các sản phẩm cá hồi và cua nâu đến từ Na Uy\", Đại sứ chia sẻ.",
            "views": 15,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Giá hải sản tăng chóng mặt, thực phẩm giải nhiệt đắt khách",
            "abstract": "Giá hải sản trong nước lẫn nhập khẩu đều tăng từ 20-30% so với đầu năm khiến nhiều người tiêu dùng giật mình. Trong khi đó, nhiều mặt hàng thực phẩm giải nhiệt lên ngôi trong mùa nắng nóng.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Chị Nghiêm Huyền (Gò Vấp, TP.HCM) cho biết trên Báo Pháp Luật TP.HCM, nếu như sau Tết, giá cua Cà Mau chỉ khoảng 450.000 đồng/kg thì nay đã tăng lên 500.000-600.000 đồng/kg; tôm sú sống loại 30-35 con/kg tăng từ 165-170.000 đồng lên 190.000-200.000 đồng/kg. Ông Trần Văn Trường, Tổng Giám đốc Công ty TNHH Thương mại Quốc tế Hải Sản Hoàng Gia, thông tin trên báo này, hiện giá hải sản trong nước lẫn nhập khẩu tăng cao. \"Riêng hải sản trong nước từ tôm, cua, ghẹ, ốc… đều có mức tăng so với đầu năm và cùng kỳ năm ngoái. So với hồi đầu năm giá hải sản trong nước tăng 20-30% tùy vào mặt hàng, mức tăng này thực tế là rất cao, khiến cho giá trị đơn hàng mỗi lần mua sắm của người tiêu dùng cũng giảm\", ông Trường nói. \n Vào những ngày nắng nóng, mặt hàng thực phẩm ăn uống có tác dụng giải nhiệt cơ thể tiêu thụ mạnh. Đáng nói, có những mặt hàng tăng cao gấp đôi nhưng vẫn hút khách.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Bia và hải sản: Ngon miệng nhưng nguy cơ gây căn bệnh đau đớn",
            "abstract": "Trong bia và hải sản có nhiều chất purin, nếu ăn quá nhiều sẽ dẫn đến mắc bệnh gout.",
            "mainImg": "/images/articles/article-2.png",
            "content": "Bệnh gout (còn gọi là gút hay thống phong) là một dạng viêm khớp phổ biến. Người bệnh thường phải chịu những cơn đau đột ngột và dữ dội ở các khớp ngón chân, ngón tay, đầu gối kèm theo sưng đó. Một số trường hợp nặng thậm chí không đi lại được. \n Nguyên nhân của bệnh do rối loạn chuyển hóa nhân purin trong thận, khiến thận không thể lọc axit uric trong máu. Nồng độ axit uric quá cao sẽ dẫn tới hình thành những tinh thể urat của axit uric, tập trung ở khớp và gây viêm sưng. \n Các bữa ăn kết hợp hải sản và bia là yếu tố nguy cơ cao dẫn tới bệnh gout do cả hai loại thực phẩm đều chứa nhiều purin. Việc hấp thụ quá nhiều purin khiến thận quá tải, không đào thải hết sẽ dẫn đến rối loạn chuyển hóa purin, từ đó làm tăng axit uric.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "'Cháy vé' trận tuyển Việt Nam - Hong Kong",
            "abstract": "Toàn bộ vé online trận tuyển Việt Nam - Hong Kong (Trung Quốc) diễn ra vào ngày 15/6 trên SVĐ Lạch Tray được BTC thông báo đã bán hết.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Theo thông báo của VFF, sau 2 ngày mở bán, toàn bộ số vé trận tuyển Việt Nam - Hong Kong được phân phối qua kênh online đã được bán hết.\n Khán giả đặt vé trực tuyến thành công nhận được mã QR tương ứng với từng vé và phải mang đến điểm trả vé trực tuyến của BTC trận đấu để đổi lấy vé cứng vào sân. \n Từ ngày 12-13/6, BTC tiến hành trả vé online tại SVĐ Lạch Tray (Hải Phòng). Theo ghi nhận, có rất đông người hâm mộ xếp hàng chờ lấy vé nhưng không xảy ra tình trạng chen lấn, xô đẩy. \n Trận đấu giữa tuyển Việt Nam với Hong Kong diễn ra lúc 19h30 ngày 15/6 trên sân Lạch Tray (Hải Phòng). Có ba mệnh giá vé được phát ra là 50.000, 200.000 và 300.000 đồng. Ngoài vé online đã được bán hết, BTC cũng bán trực tiếp tại quầy (SVĐ Lạch Tray) từ 8h30 ngày 13/6.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Tuyển Việt Nam: Công Phượng, Quang Hải cần tự ái để lấy lại chỗ",
            "abstract": "HLV Philippe Troussier khẳng định gọi Quang Hải, Công Phượng khoác áo tuyển Việt Nam bằng những tấm vé vớt, chính bởi thế 2 ngôi sao này cần biết 'tự ái' để lấy lại vị trí.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Phát biểu với truyền thông HLV Philippe Troussier đã lý giải nguyên tắc gọi người lên tuyển Việt Nam trong đợt tập trung lần này, trong đó bao gồm Quang Hải, Công Phượng trở lại tuyển Việt Nam. \n Sở dĩ ông Philippe Troussier cần lên tiếng vì trước đó, chính HLV người Pháp từng khẳng định tuyển Việt Nam chỉ dùng những cầu thủ đang đạt phong độ cao. Thế nên khi Công Phượng, Quang Hải được lựa chọn gây ra khá nhiều tranh cãi, cần có lời giải thích. \n Cũng cần phải nói thêm, đưa ra quyết định gây nhiều tranh cãi này ông thầy người Pháp đang đối mặt với hàng loạt chỉ trích để Quang Hải hay Công Phượng cần tìm lại chính mình như một cách gỡ khó cho HLV Philippe Troussier. \n Tự ái nhằm tìm lại chính mình cũng là một cách “giữ chỗ” trong những lần tập trung tới, còn bằng không có lẽ khó được ưu ái lần thứ 2 khi ông thầy người Pháp đang tiến hành cuộc cách mạng về nhân sự cho tuyển Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "'Việt Nam vô địch' và những khoảnh khắc vì màu cờ sắc áo",
            "abstract": "Đứng đầu bảng xếp hạng huy chương SEA Games 31 cùng chiến thắng lịch sử của hai đội tuyển bóng đá nam - nữ là minh chứng cho tinh thần chiến đấu quả cảm, hết mình và sự ủng hộ của người hâm mộ.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Không chỉ là một sự kiện thể thao tầm cỡ khu vực, SEA Games 31 còn là cơ hội để mọi người dân Việt Nam thể hiện tình yêu với đội tuyển thể thao nước nhà. Mỗi người Việt Nam đều một lòng hết mình hướng về đội tuyển, với những cách ủng hộ khác nhau. \n Có cô thợ may tỉ mẩn may những chiếc áo thi đấu, hay anh đầu bếp chuẩn bị đồ ăn tặng cho đội tuyển. Dù âm thầm hay công khai, mỗi người đều đặt 100% tâm huyết và công sức vào trong đó, mong mỏi đội tuyển Việt Nam sẽ mạnh mẽ chiến đấu hết sức vì màu cờ sắc áo. \n Từ lòng tin tưởng dành cho đội tuyển Việt Nam, Bia Việt - nhà tài trợ kim cương cho SEA Games 31 đã kết hợp cùng các nghệ sĩ Hoàng Thùy Linh, Only C, Karik cùng đạo diễn Khương Vũ đã tạo nên MV Việt Nam hết mình, một sản phẩm tái hiện những hình ảnh chân thực nhất về lòng đam mê thể thao của người dân Việt Nam cùng khoảnh khắc ấn tượng của các VĐV. \n",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "'Cháy vé' trận tuyển Việt Nam - Hong Kong",
            "abstract": "Toàn bộ vé online trận tuyển Việt Nam - Hong Kong (Trung Quốc) diễn ra vào ngày 15/6 trên SVĐ Lạch Tray được BTC thông báo đã bán hết.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Theo thông báo của VFF, sau 2 ngày mở bán, toàn bộ số vé trận tuyển Việt Nam - Hong Kong được phân phối qua kênh online đã được bán hết.\n Khán giả đặt vé trực tuyến thành công nhận được mã QR tương ứng với từng vé và phải mang đến điểm trả vé trực tuyến của BTC trận đấu để đổi lấy vé cứng vào sân. \n Từ ngày 12-13/6, BTC tiến hành trả vé online tại SVĐ Lạch Tray (Hải Phòng). Theo ghi nhận, có rất đông người hâm mộ xếp hàng chờ lấy vé nhưng không xảy ra tình trạng chen lấn, xô đẩy. \n Trận đấu giữa tuyển Việt Nam với Hong Kong diễn ra lúc 19h30 ngày 15/6 trên sân Lạch Tray (Hải Phòng). Có ba mệnh giá vé được phát ra là 50.000, 200.000 và 300.000 đồng. Ngoài vé online đã được bán hết, BTC cũng bán trực tiếp tại quầy (SVĐ Lạch Tray) từ 8h30 ngày 13/6.",
            "views": 20,
            "type": 1,
            "authorId": 3
        },
        {
            "title": "Tuyển Việt Nam: Công Phượng, Quang Hải cần tự ái để lấy lại chỗ",
            "abstract": "HLV Philippe Troussier khẳng định gọi Quang Hải, Công Phượng khoác áo tuyển Việt Nam bằng những tấm vé vớt, chính bởi thế 2 ngôi sao này cần biết 'tự ái' để lấy lại vị trí.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Phát biểu với truyền thông HLV Philippe Troussier đã lý giải nguyên tắc gọi người lên tuyển Việt Nam trong đợt tập trung lần này, trong đó bao gồm Quang Hải, Công Phượng trở lại tuyển Việt Nam. \n Sở dĩ ông Philippe Troussier cần lên tiếng vì trước đó, chính HLV người Pháp từng khẳng định tuyển Việt Nam chỉ dùng những cầu thủ đang đạt phong độ cao. Thế nên khi Công Phượng, Quang Hải được lựa chọn gây ra khá nhiều tranh cãi, cần có lời giải thích. \n Cũng cần phải nói thêm, đưa ra quyết định gây nhiều tranh cãi này ông thầy người Pháp đang đối mặt với hàng loạt chỉ trích để Quang Hải hay Công Phượng cần tìm lại chính mình như một cách gỡ khó cho HLV Philippe Troussier. \n Tự ái nhằm tìm lại chính mình cũng là một cách “giữ chỗ” trong những lần tập trung tới, còn bằng không có lẽ khó được ưu ái lần thứ 2 khi ông thầy người Pháp đang tiến hành cuộc cách mạng về nhân sự cho tuyển Việt Nam.",
            "views": 20,
            "type": 2,
            "authorId": 3
        },
        {
            "title": "'Việt Nam vô địch' và những khoảnh khắc vì màu cờ sắc áo",
            "abstract": "Đứng đầu bảng xếp hạng huy chương SEA Games 31 cùng chiến thắng lịch sử của hai đội tuyển bóng đá nam - nữ là minh chứng cho tinh thần chiến đấu quả cảm, hết mình và sự ủng hộ của người hâm mộ.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Không chỉ là một sự kiện thể thao tầm cỡ khu vực, SEA Games 31 còn là cơ hội để mọi người dân Việt Nam thể hiện tình yêu với đội tuyển thể thao nước nhà. Mỗi người Việt Nam đều một lòng hết mình hướng về đội tuyển, với những cách ủng hộ khác nhau. \n Có cô thợ may tỉ mẩn may những chiếc áo thi đấu, hay anh đầu bếp chuẩn bị đồ ăn tặng cho đội tuyển. Dù âm thầm hay công khai, mỗi người đều đặt 100% tâm huyết và công sức vào trong đó, mong mỏi đội tuyển Việt Nam sẽ mạnh mẽ chiến đấu hết sức vì màu cờ sắc áo. \n Từ lòng tin tưởng dành cho đội tuyển Việt Nam, Bia Việt - nhà tài trợ kim cương cho SEA Games 31 đã kết hợp cùng các nghệ sĩ Hoàng Thùy Linh, Only C, Karik cùng đạo diễn Khương Vũ đã tạo nên MV Việt Nam hết mình, một sản phẩm tái hiện những hình ảnh chân thực nhất về lòng đam mê thể thao của người dân Việt Nam cùng khoảnh khắc ấn tượng của các VĐV. \n",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "'Cháy vé' trận tuyển Việt Nam - Hong Kong",
            "abstract": "Toàn bộ vé online trận tuyển Việt Nam - Hong Kong (Trung Quốc) diễn ra vào ngày 15/6 trên SVĐ Lạch Tray được BTC thông báo đã bán hết.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Theo thông báo của VFF, sau 2 ngày mở bán, toàn bộ số vé trận tuyển Việt Nam - Hong Kong được phân phối qua kênh online đã được bán hết.\n Khán giả đặt vé trực tuyến thành công nhận được mã QR tương ứng với từng vé và phải mang đến điểm trả vé trực tuyến của BTC trận đấu để đổi lấy vé cứng vào sân. \n Từ ngày 12-13/6, BTC tiến hành trả vé online tại SVĐ Lạch Tray (Hải Phòng). Theo ghi nhận, có rất đông người hâm mộ xếp hàng chờ lấy vé nhưng không xảy ra tình trạng chen lấn, xô đẩy. \n Trận đấu giữa tuyển Việt Nam với Hong Kong diễn ra lúc 19h30 ngày 15/6 trên sân Lạch Tray (Hải Phòng). Có ba mệnh giá vé được phát ra là 50.000, 200.000 và 300.000 đồng. Ngoài vé online đã được bán hết, BTC cũng bán trực tiếp tại quầy (SVĐ Lạch Tray) từ 8h30 ngày 13/6.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Tuyển Việt Nam: Công Phượng, Quang Hải cần tự ái để lấy lại chỗ",
            "abstract": "HLV Philippe Troussier khẳng định gọi Quang Hải, Công Phượng khoác áo tuyển Việt Nam bằng những tấm vé vớt, chính bởi thế 2 ngôi sao này cần biết 'tự ái' để lấy lại vị trí.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Phát biểu với truyền thông HLV Philippe Troussier đã lý giải nguyên tắc gọi người lên tuyển Việt Nam trong đợt tập trung lần này, trong đó bao gồm Quang Hải, Công Phượng trở lại tuyển Việt Nam. \n Sở dĩ ông Philippe Troussier cần lên tiếng vì trước đó, chính HLV người Pháp từng khẳng định tuyển Việt Nam chỉ dùng những cầu thủ đang đạt phong độ cao. Thế nên khi Công Phượng, Quang Hải được lựa chọn gây ra khá nhiều tranh cãi, cần có lời giải thích. \n Cũng cần phải nói thêm, đưa ra quyết định gây nhiều tranh cãi này ông thầy người Pháp đang đối mặt với hàng loạt chỉ trích để Quang Hải hay Công Phượng cần tìm lại chính mình như một cách gỡ khó cho HLV Philippe Troussier. \n Tự ái nhằm tìm lại chính mình cũng là một cách “giữ chỗ” trong những lần tập trung tới, còn bằng không có lẽ khó được ưu ái lần thứ 2 khi ông thầy người Pháp đang tiến hành cuộc cách mạng về nhân sự cho tuyển Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "'Việt Nam vô địch' và những khoảnh khắc vì màu cờ sắc áo",
            "abstract": "Đứng đầu bảng xếp hạng huy chương SEA Games 31 cùng chiến thắng lịch sử của hai đội tuyển bóng đá nam - nữ là minh chứng cho tinh thần chiến đấu quả cảm, hết mình và sự ủng hộ của người hâm mộ.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Không chỉ là một sự kiện thể thao tầm cỡ khu vực, SEA Games 31 còn là cơ hội để mọi người dân Việt Nam thể hiện tình yêu với đội tuyển thể thao nước nhà. Mỗi người Việt Nam đều một lòng hết mình hướng về đội tuyển, với những cách ủng hộ khác nhau. \n Có cô thợ may tỉ mẩn may những chiếc áo thi đấu, hay anh đầu bếp chuẩn bị đồ ăn tặng cho đội tuyển. Dù âm thầm hay công khai, mỗi người đều đặt 100% tâm huyết và công sức vào trong đó, mong mỏi đội tuyển Việt Nam sẽ mạnh mẽ chiến đấu hết sức vì màu cờ sắc áo. \n Từ lòng tin tưởng dành cho đội tuyển Việt Nam, Bia Việt - nhà tài trợ kim cương cho SEA Games 31 đã kết hợp cùng các nghệ sĩ Hoàng Thùy Linh, Only C, Karik cùng đạo diễn Khương Vũ đã tạo nên MV Việt Nam hết mình, một sản phẩm tái hiện những hình ảnh chân thực nhất về lòng đam mê thể thao của người dân Việt Nam cùng khoảnh khắc ấn tượng của các VĐV. \n",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "'Cháy vé' trận tuyển Việt Nam - Hong Kong",
            "abstract": "Toàn bộ vé online trận tuyển Việt Nam - Hong Kong (Trung Quốc) diễn ra vào ngày 15/6 trên SVĐ Lạch Tray được BTC thông báo đã bán hết.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Theo thông báo của VFF, sau 2 ngày mở bán, toàn bộ số vé trận tuyển Việt Nam - Hong Kong được phân phối qua kênh online đã được bán hết.\n Khán giả đặt vé trực tuyến thành công nhận được mã QR tương ứng với từng vé và phải mang đến điểm trả vé trực tuyến của BTC trận đấu để đổi lấy vé cứng vào sân. \n Từ ngày 12-13/6, BTC tiến hành trả vé online tại SVĐ Lạch Tray (Hải Phòng). Theo ghi nhận, có rất đông người hâm mộ xếp hàng chờ lấy vé nhưng không xảy ra tình trạng chen lấn, xô đẩy. \n Trận đấu giữa tuyển Việt Nam với Hong Kong diễn ra lúc 19h30 ngày 15/6 trên sân Lạch Tray (Hải Phòng). Có ba mệnh giá vé được phát ra là 50.000, 200.000 và 300.000 đồng. Ngoài vé online đã được bán hết, BTC cũng bán trực tiếp tại quầy (SVĐ Lạch Tray) từ 8h30 ngày 13/6.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Tuyển Việt Nam: Công Phượng, Quang Hải cần tự ái để lấy lại chỗ",
            "abstract": "HLV Philippe Troussier khẳng định gọi Quang Hải, Công Phượng khoác áo tuyển Việt Nam bằng những tấm vé vớt, chính bởi thế 2 ngôi sao này cần biết 'tự ái' để lấy lại vị trí.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Phát biểu với truyền thông HLV Philippe Troussier đã lý giải nguyên tắc gọi người lên tuyển Việt Nam trong đợt tập trung lần này, trong đó bao gồm Quang Hải, Công Phượng trở lại tuyển Việt Nam. \n Sở dĩ ông Philippe Troussier cần lên tiếng vì trước đó, chính HLV người Pháp từng khẳng định tuyển Việt Nam chỉ dùng những cầu thủ đang đạt phong độ cao. Thế nên khi Công Phượng, Quang Hải được lựa chọn gây ra khá nhiều tranh cãi, cần có lời giải thích. \n Cũng cần phải nói thêm, đưa ra quyết định gây nhiều tranh cãi này ông thầy người Pháp đang đối mặt với hàng loạt chỉ trích để Quang Hải hay Công Phượng cần tìm lại chính mình như một cách gỡ khó cho HLV Philippe Troussier. \n Tự ái nhằm tìm lại chính mình cũng là một cách “giữ chỗ” trong những lần tập trung tới, còn bằng không có lẽ khó được ưu ái lần thứ 2 khi ông thầy người Pháp đang tiến hành cuộc cách mạng về nhân sự cho tuyển Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "'Việt Nam vô địch' và những khoảnh khắc vì màu cờ sắc áo",
            "abstract": "Đứng đầu bảng xếp hạng huy chương SEA Games 31 cùng chiến thắng lịch sử của hai đội tuyển bóng đá nam - nữ là minh chứng cho tinh thần chiến đấu quả cảm, hết mình và sự ủng hộ của người hâm mộ.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Không chỉ là một sự kiện thể thao tầm cỡ khu vực, SEA Games 31 còn là cơ hội để mọi người dân Việt Nam thể hiện tình yêu với đội tuyển thể thao nước nhà. Mỗi người Việt Nam đều một lòng hết mình hướng về đội tuyển, với những cách ủng hộ khác nhau. \n Có cô thợ may tỉ mẩn may những chiếc áo thi đấu, hay anh đầu bếp chuẩn bị đồ ăn tặng cho đội tuyển. Dù âm thầm hay công khai, mỗi người đều đặt 100% tâm huyết và công sức vào trong đó, mong mỏi đội tuyển Việt Nam sẽ mạnh mẽ chiến đấu hết sức vì màu cờ sắc áo. \n Từ lòng tin tưởng dành cho đội tuyển Việt Nam, Bia Việt - nhà tài trợ kim cương cho SEA Games 31 đã kết hợp cùng các nghệ sĩ Hoàng Thùy Linh, Only C, Karik cùng đạo diễn Khương Vũ đã tạo nên MV Việt Nam hết mình, một sản phẩm tái hiện những hình ảnh chân thực nhất về lòng đam mê thể thao của người dân Việt Nam cùng khoảnh khắc ấn tượng của các VĐV. \n",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "'Cháy vé' trận tuyển Việt Nam - Hong Kong",
            "abstract": "Toàn bộ vé online trận tuyển Việt Nam - Hong Kong (Trung Quốc) diễn ra vào ngày 15/6 trên SVĐ Lạch Tray được BTC thông báo đã bán hết.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Theo thông báo của VFF, sau 2 ngày mở bán, toàn bộ số vé trận tuyển Việt Nam - Hong Kong được phân phối qua kênh online đã được bán hết.\n Khán giả đặt vé trực tuyến thành công nhận được mã QR tương ứng với từng vé và phải mang đến điểm trả vé trực tuyến của BTC trận đấu để đổi lấy vé cứng vào sân. \n Từ ngày 12-13/6, BTC tiến hành trả vé online tại SVĐ Lạch Tray (Hải Phòng). Theo ghi nhận, có rất đông người hâm mộ xếp hàng chờ lấy vé nhưng không xảy ra tình trạng chen lấn, xô đẩy. \n Trận đấu giữa tuyển Việt Nam với Hong Kong diễn ra lúc 19h30 ngày 15/6 trên sân Lạch Tray (Hải Phòng). Có ba mệnh giá vé được phát ra là 50.000, 200.000 và 300.000 đồng. Ngoài vé online đã được bán hết, BTC cũng bán trực tiếp tại quầy (SVĐ Lạch Tray) từ 8h30 ngày 13/6.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Tuyển Việt Nam: Công Phượng, Quang Hải cần tự ái để lấy lại chỗ",
            "abstract": "HLV Philippe Troussier khẳng định gọi Quang Hải, Công Phượng khoác áo tuyển Việt Nam bằng những tấm vé vớt, chính bởi thế 2 ngôi sao này cần biết 'tự ái' để lấy lại vị trí.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Phát biểu với truyền thông HLV Philippe Troussier đã lý giải nguyên tắc gọi người lên tuyển Việt Nam trong đợt tập trung lần này, trong đó bao gồm Quang Hải, Công Phượng trở lại tuyển Việt Nam. \n Sở dĩ ông Philippe Troussier cần lên tiếng vì trước đó, chính HLV người Pháp từng khẳng định tuyển Việt Nam chỉ dùng những cầu thủ đang đạt phong độ cao. Thế nên khi Công Phượng, Quang Hải được lựa chọn gây ra khá nhiều tranh cãi, cần có lời giải thích. \n Cũng cần phải nói thêm, đưa ra quyết định gây nhiều tranh cãi này ông thầy người Pháp đang đối mặt với hàng loạt chỉ trích để Quang Hải hay Công Phượng cần tìm lại chính mình như một cách gỡ khó cho HLV Philippe Troussier. \n Tự ái nhằm tìm lại chính mình cũng là một cách “giữ chỗ” trong những lần tập trung tới, còn bằng không có lẽ khó được ưu ái lần thứ 2 khi ông thầy người Pháp đang tiến hành cuộc cách mạng về nhân sự cho tuyển Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "'Việt Nam vô địch' và những khoảnh khắc vì màu cờ sắc áo",
            "abstract": "Đứng đầu bảng xếp hạng huy chương SEA Games 31 cùng chiến thắng lịch sử của hai đội tuyển bóng đá nam - nữ là minh chứng cho tinh thần chiến đấu quả cảm, hết mình và sự ủng hộ của người hâm mộ.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Không chỉ là một sự kiện thể thao tầm cỡ khu vực, SEA Games 31 còn là cơ hội để mọi người dân Việt Nam thể hiện tình yêu với đội tuyển thể thao nước nhà. Mỗi người Việt Nam đều một lòng hết mình hướng về đội tuyển, với những cách ủng hộ khác nhau. \n Có cô thợ may tỉ mẩn may những chiếc áo thi đấu, hay anh đầu bếp chuẩn bị đồ ăn tặng cho đội tuyển. Dù âm thầm hay công khai, mỗi người đều đặt 100% tâm huyết và công sức vào trong đó, mong mỏi đội tuyển Việt Nam sẽ mạnh mẽ chiến đấu hết sức vì màu cờ sắc áo. \n Từ lòng tin tưởng dành cho đội tuyển Việt Nam, Bia Việt - nhà tài trợ kim cương cho SEA Games 31 đã kết hợp cùng các nghệ sĩ Hoàng Thùy Linh, Only C, Karik cùng đạo diễn Khương Vũ đã tạo nên MV Việt Nam hết mình, một sản phẩm tái hiện những hình ảnh chân thực nhất về lòng đam mê thể thao của người dân Việt Nam cùng khoảnh khắc ấn tượng của các VĐV. \n",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "'Cháy vé' trận tuyển Việt Nam - Hong Kong",
            "abstract": "Toàn bộ vé online trận tuyển Việt Nam - Hong Kong (Trung Quốc) diễn ra vào ngày 15/6 trên SVĐ Lạch Tray được BTC thông báo đã bán hết.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Theo thông báo của VFF, sau 2 ngày mở bán, toàn bộ số vé trận tuyển Việt Nam - Hong Kong được phân phối qua kênh online đã được bán hết.\n Khán giả đặt vé trực tuyến thành công nhận được mã QR tương ứng với từng vé và phải mang đến điểm trả vé trực tuyến của BTC trận đấu để đổi lấy vé cứng vào sân. \n Từ ngày 12-13/6, BTC tiến hành trả vé online tại SVĐ Lạch Tray (Hải Phòng). Theo ghi nhận, có rất đông người hâm mộ xếp hàng chờ lấy vé nhưng không xảy ra tình trạng chen lấn, xô đẩy. \n Trận đấu giữa tuyển Việt Nam với Hong Kong diễn ra lúc 19h30 ngày 15/6 trên sân Lạch Tray (Hải Phòng). Có ba mệnh giá vé được phát ra là 50.000, 200.000 và 300.000 đồng. Ngoài vé online đã được bán hết, BTC cũng bán trực tiếp tại quầy (SVĐ Lạch Tray) từ 8h30 ngày 13/6.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Tuyển Việt Nam: Công Phượng, Quang Hải cần tự ái để lấy lại chỗ",
            "abstract": "HLV Philippe Troussier khẳng định gọi Quang Hải, Công Phượng khoác áo tuyển Việt Nam bằng những tấm vé vớt, chính bởi thế 2 ngôi sao này cần biết 'tự ái' để lấy lại vị trí.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Phát biểu với truyền thông HLV Philippe Troussier đã lý giải nguyên tắc gọi người lên tuyển Việt Nam trong đợt tập trung lần này, trong đó bao gồm Quang Hải, Công Phượng trở lại tuyển Việt Nam. \n Sở dĩ ông Philippe Troussier cần lên tiếng vì trước đó, chính HLV người Pháp từng khẳng định tuyển Việt Nam chỉ dùng những cầu thủ đang đạt phong độ cao. Thế nên khi Công Phượng, Quang Hải được lựa chọn gây ra khá nhiều tranh cãi, cần có lời giải thích. \n Cũng cần phải nói thêm, đưa ra quyết định gây nhiều tranh cãi này ông thầy người Pháp đang đối mặt với hàng loạt chỉ trích để Quang Hải hay Công Phượng cần tìm lại chính mình như một cách gỡ khó cho HLV Philippe Troussier. \n Tự ái nhằm tìm lại chính mình cũng là một cách “giữ chỗ” trong những lần tập trung tới, còn bằng không có lẽ khó được ưu ái lần thứ 2 khi ông thầy người Pháp đang tiến hành cuộc cách mạng về nhân sự cho tuyển Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "'Việt Nam vô địch' và những khoảnh khắc vì màu cờ sắc áo",
            "abstract": "Đứng đầu bảng xếp hạng huy chương SEA Games 31 cùng chiến thắng lịch sử của hai đội tuyển bóng đá nam - nữ là minh chứng cho tinh thần chiến đấu quả cảm, hết mình và sự ủng hộ của người hâm mộ.",
            "mainImg": "/images/articles/article-3.png",
            "content": "Không chỉ là một sự kiện thể thao tầm cỡ khu vực, SEA Games 31 còn là cơ hội để mọi người dân Việt Nam thể hiện tình yêu với đội tuyển thể thao nước nhà. Mỗi người Việt Nam đều một lòng hết mình hướng về đội tuyển, với những cách ủng hộ khác nhau. \n Có cô thợ may tỉ mẩn may những chiếc áo thi đấu, hay anh đầu bếp chuẩn bị đồ ăn tặng cho đội tuyển. Dù âm thầm hay công khai, mỗi người đều đặt 100% tâm huyết và công sức vào trong đó, mong mỏi đội tuyển Việt Nam sẽ mạnh mẽ chiến đấu hết sức vì màu cờ sắc áo. \n Từ lòng tin tưởng dành cho đội tuyển Việt Nam, Bia Việt - nhà tài trợ kim cương cho SEA Games 31 đã kết hợp cùng các nghệ sĩ Hoàng Thùy Linh, Only C, Karik cùng đạo diễn Khương Vũ đã tạo nên MV Việt Nam hết mình, một sản phẩm tái hiện những hình ảnh chân thực nhất về lòng đam mê thể thao của người dân Việt Nam cùng khoảnh khắc ấn tượng của các VĐV. \n",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Hụt Messi, Al-Hilal chi 200 triệu euro đón Neymar",
            "abstract": "Sau khi hụt Messi, Al-Hilal đang liên hệ đưa Neymar sang bóng đá Saudi Arabia mùa hè này với tiền lương 200 triệu euro.",
            "mainImg": "/images/articles/article-4.png",
            "content": "Tham vọng của gã khổng lồ Al-Hilal và bóng đá Saudi Arabia về việc ký hợp đồng với Lionel Messi đã bị ngôi sao người Argentina dội gáo nước lạnh. \n Messi quyết định không sang Saudi Arabia để mở ra giai đoạn đối đầu mới với Cristiano Ronaldo, mà anh chọn điểm đến Inter Miami. \n Cầu thủ người Brazil vốn là bạn thân của Messi trên sân cỏ lẫn ngoài đời, khi họ cùng đá với nhau từ Barcelona đến PSG. \n Một số quan chức Al-Hilal đã tới Paris hôm thứ Sáu tuần trước để hỏi thăm tình hình của Neymar. Các bên đều hy vọng sớm hoàn tất quá trình đàm phán chuyển nhượng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Man City mừng cú ăn 3, Jack Grealish vui say khó đỡ",
            "abstract": "Tiền vệ Jack Grealish đầu trò ăn nhậu thâu đêm, đến sáng hôm sau vẫn còn mặc nguyên trang phục thi đấu ở chung kết Cúp C1, Man City 1-0 Inter Milan.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Man City hoàn tất cú ăn ba lịch sử (Premier League, FA Cup và Champions League) vào đêm 10/6, với chiến thắng trước Inter Milan nhờ bàn duy nhất của Rodri ở phút 68 để lần đầu tiên xưng vương châu Âu. \n Thầy trò Pep Guardiola sẽ có màn diễu hành tưng bừng phủ nửa xanh thành Manchester vào hôm nay (12/6), sau khi từ Istanbul trở về. \n Tuy nhiên, trước khi trở lại Anh, các nhà vô địch đã mở tiệc ăn mừng ở khách sạn, nơi đội ‘đóng quân’ và Jack Grealish là một trong những người nhiệt tình, ‘quẩy’ mạnh nhất. \n Từng bị chỉ trích vì mải tiệc tùng nên chơi dở khi đến Man City trong mùa đầu tiên, Jack Grealish cho thấy là một phần ảnh hưởng đến thành công ăn ba của đoàn quân Pep Guardiola, với 46 lần ra sân, đóng góp trực tiếp vào 16 bàn thắng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Pep Guardiola tuyên bố lớn sau cú ăn ba lịch sử",
            "abstract": "HLV người Tây Ban Nha cam kết tiếp tục gắn bó với Man City, giúp đội bóng đạt được thêm nhiều thành công sau khi chinh phục đỉnh cao Champions League.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Pep Guardiola còn thời hạn 2 năm hợp đồng với Man City. Vừa trải qua mùa giải thành công nhất từ trước đến nay ở Etihad, Pep hứa sẽ tiếp tục theo đuổi bộ tứ danh hiệu thời gian tới. \n Ông cảnh báo các cầu thủ không được phép thỏa mãn: \"Tôi không muốn Man City biến mất sau một năm thành công tại Champions League.\" \n Toàn đội phải làm việc chăm chỉ hơn nữa. Có những đội vô địch Champions League xong rồi tuột dốc. Man City phải tránh điều đó. \n Cảm giác lúc này thật nhẹ nhõm, bởi cuối cùng Man City cũng chinh phục được đỉnh cao châu Âu. Mọi người sẽ không hỏi tôi về nỗi ám ảnh Champions League nữa.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Hụt Messi, Al-Hilal chi 200 triệu euro đón Neymar",
            "abstract": "Sau khi hụt Messi, Al-Hilal đang liên hệ đưa Neymar sang bóng đá Saudi Arabia mùa hè này với tiền lương 200 triệu euro.",
            "mainImg": "/images/articles/article-4.png",
            "content": "Tham vọng của gã khổng lồ Al-Hilal và bóng đá Saudi Arabia về việc ký hợp đồng với Lionel Messi đã bị ngôi sao người Argentina dội gáo nước lạnh. \n Messi quyết định không sang Saudi Arabia để mở ra giai đoạn đối đầu mới với Cristiano Ronaldo, mà anh chọn điểm đến Inter Miami. \n Cầu thủ người Brazil vốn là bạn thân của Messi trên sân cỏ lẫn ngoài đời, khi họ cùng đá với nhau từ Barcelona đến PSG. \n Một số quan chức Al-Hilal đã tới Paris hôm thứ Sáu tuần trước để hỏi thăm tình hình của Neymar. Các bên đều hy vọng sớm hoàn tất quá trình đàm phán chuyển nhượng.",
            "views": 20,
            "type": 2,
            "authorId": 4
        },
        {
            "title": "Man City mừng cú ăn 3, Jack Grealish vui say khó đỡ",
            "abstract": "Tiền vệ Jack Grealish đầu trò ăn nhậu thâu đêm, đến sáng hôm sau vẫn còn mặc nguyên trang phục thi đấu ở chung kết Cúp C1, Man City 1-0 Inter Milan.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Man City hoàn tất cú ăn ba lịch sử (Premier League, FA Cup và Champions League) vào đêm 10/6, với chiến thắng trước Inter Milan nhờ bàn duy nhất của Rodri ở phút 68 để lần đầu tiên xưng vương châu Âu. \n Thầy trò Pep Guardiola sẽ có màn diễu hành tưng bừng phủ nửa xanh thành Manchester vào hôm nay (12/6), sau khi từ Istanbul trở về. \n Tuy nhiên, trước khi trở lại Anh, các nhà vô địch đã mở tiệc ăn mừng ở khách sạn, nơi đội ‘đóng quân’ và Jack Grealish là một trong những người nhiệt tình, ‘quẩy’ mạnh nhất. \n Từng bị chỉ trích vì mải tiệc tùng nên chơi dở khi đến Man City trong mùa đầu tiên, Jack Grealish cho thấy là một phần ảnh hưởng đến thành công ăn ba của đoàn quân Pep Guardiola, với 46 lần ra sân, đóng góp trực tiếp vào 16 bàn thắng.",
            "views": 20,
            "type": 2,
            "authorId": 4
        },
        {
            "title": "Pep Guardiola tuyên bố lớn sau cú ăn ba lịch sử",
            "abstract": "HLV người Tây Ban Nha cam kết tiếp tục gắn bó với Man City, giúp đội bóng đạt được thêm nhiều thành công sau khi chinh phục đỉnh cao Champions League.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Pep Guardiola còn thời hạn 2 năm hợp đồng với Man City. Vừa trải qua mùa giải thành công nhất từ trước đến nay ở Etihad, Pep hứa sẽ tiếp tục theo đuổi bộ tứ danh hiệu thời gian tới. \n Ông cảnh báo các cầu thủ không được phép thỏa mãn: \"Tôi không muốn Man City biến mất sau một năm thành công tại Champions League.\" \n Toàn đội phải làm việc chăm chỉ hơn nữa. Có những đội vô địch Champions League xong rồi tuột dốc. Man City phải tránh điều đó. \n Cảm giác lúc này thật nhẹ nhõm, bởi cuối cùng Man City cũng chinh phục được đỉnh cao châu Âu. Mọi người sẽ không hỏi tôi về nỗi ám ảnh Champions League nữa.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Hụt Messi, Al-Hilal chi 200 triệu euro đón Neymar",
            "abstract": "Sau khi hụt Messi, Al-Hilal đang liên hệ đưa Neymar sang bóng đá Saudi Arabia mùa hè này với tiền lương 200 triệu euro.",
            "mainImg": "/images/articles/article-4.png",
            "content": "Tham vọng của gã khổng lồ Al-Hilal và bóng đá Saudi Arabia về việc ký hợp đồng với Lionel Messi đã bị ngôi sao người Argentina dội gáo nước lạnh. \n Messi quyết định không sang Saudi Arabia để mở ra giai đoạn đối đầu mới với Cristiano Ronaldo, mà anh chọn điểm đến Inter Miami. \n Cầu thủ người Brazil vốn là bạn thân của Messi trên sân cỏ lẫn ngoài đời, khi họ cùng đá với nhau từ Barcelona đến PSG. \n Một số quan chức Al-Hilal đã tới Paris hôm thứ Sáu tuần trước để hỏi thăm tình hình của Neymar. Các bên đều hy vọng sớm hoàn tất quá trình đàm phán chuyển nhượng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Man City mừng cú ăn 3, Jack Grealish vui say khó đỡ",
            "abstract": "Tiền vệ Jack Grealish đầu trò ăn nhậu thâu đêm, đến sáng hôm sau vẫn còn mặc nguyên trang phục thi đấu ở chung kết Cúp C1, Man City 1-0 Inter Milan.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Man City hoàn tất cú ăn ba lịch sử (Premier League, FA Cup và Champions League) vào đêm 10/6, với chiến thắng trước Inter Milan nhờ bàn duy nhất của Rodri ở phút 68 để lần đầu tiên xưng vương châu Âu. \n Thầy trò Pep Guardiola sẽ có màn diễu hành tưng bừng phủ nửa xanh thành Manchester vào hôm nay (12/6), sau khi từ Istanbul trở về. \n Tuy nhiên, trước khi trở lại Anh, các nhà vô địch đã mở tiệc ăn mừng ở khách sạn, nơi đội ‘đóng quân’ và Jack Grealish là một trong những người nhiệt tình, ‘quẩy’ mạnh nhất. \n Từng bị chỉ trích vì mải tiệc tùng nên chơi dở khi đến Man City trong mùa đầu tiên, Jack Grealish cho thấy là một phần ảnh hưởng đến thành công ăn ba của đoàn quân Pep Guardiola, với 46 lần ra sân, đóng góp trực tiếp vào 16 bàn thắng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Pep Guardiola tuyên bố lớn sau cú ăn ba lịch sử",
            "abstract": "HLV người Tây Ban Nha cam kết tiếp tục gắn bó với Man City, giúp đội bóng đạt được thêm nhiều thành công sau khi chinh phục đỉnh cao Champions League.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Pep Guardiola còn thời hạn 2 năm hợp đồng với Man City. Vừa trải qua mùa giải thành công nhất từ trước đến nay ở Etihad, Pep hứa sẽ tiếp tục theo đuổi bộ tứ danh hiệu thời gian tới. \n Ông cảnh báo các cầu thủ không được phép thỏa mãn: \"Tôi không muốn Man City biến mất sau một năm thành công tại Champions League.\" \n Toàn đội phải làm việc chăm chỉ hơn nữa. Có những đội vô địch Champions League xong rồi tuột dốc. Man City phải tránh điều đó. \n Cảm giác lúc này thật nhẹ nhõm, bởi cuối cùng Man City cũng chinh phục được đỉnh cao châu Âu. Mọi người sẽ không hỏi tôi về nỗi ám ảnh Champions League nữa.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Hụt Messi, Al-Hilal chi 200 triệu euro đón Neymar",
            "abstract": "Sau khi hụt Messi, Al-Hilal đang liên hệ đưa Neymar sang bóng đá Saudi Arabia mùa hè này với tiền lương 200 triệu euro.",
            "mainImg": "/images/articles/article-4.png",
            "content": "Tham vọng của gã khổng lồ Al-Hilal và bóng đá Saudi Arabia về việc ký hợp đồng với Lionel Messi đã bị ngôi sao người Argentina dội gáo nước lạnh. \n Messi quyết định không sang Saudi Arabia để mở ra giai đoạn đối đầu mới với Cristiano Ronaldo, mà anh chọn điểm đến Inter Miami. \n Cầu thủ người Brazil vốn là bạn thân của Messi trên sân cỏ lẫn ngoài đời, khi họ cùng đá với nhau từ Barcelona đến PSG. \n Một số quan chức Al-Hilal đã tới Paris hôm thứ Sáu tuần trước để hỏi thăm tình hình của Neymar. Các bên đều hy vọng sớm hoàn tất quá trình đàm phán chuyển nhượng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Man City mừng cú ăn 3, Jack Grealish vui say khó đỡ",
            "abstract": "Tiền vệ Jack Grealish đầu trò ăn nhậu thâu đêm, đến sáng hôm sau vẫn còn mặc nguyên trang phục thi đấu ở chung kết Cúp C1, Man City 1-0 Inter Milan.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Man City hoàn tất cú ăn ba lịch sử (Premier League, FA Cup và Champions League) vào đêm 10/6, với chiến thắng trước Inter Milan nhờ bàn duy nhất của Rodri ở phút 68 để lần đầu tiên xưng vương châu Âu. \n Thầy trò Pep Guardiola sẽ có màn diễu hành tưng bừng phủ nửa xanh thành Manchester vào hôm nay (12/6), sau khi từ Istanbul trở về. \n Tuy nhiên, trước khi trở lại Anh, các nhà vô địch đã mở tiệc ăn mừng ở khách sạn, nơi đội ‘đóng quân’ và Jack Grealish là một trong những người nhiệt tình, ‘quẩy’ mạnh nhất. \n Từng bị chỉ trích vì mải tiệc tùng nên chơi dở khi đến Man City trong mùa đầu tiên, Jack Grealish cho thấy là một phần ảnh hưởng đến thành công ăn ba của đoàn quân Pep Guardiola, với 46 lần ra sân, đóng góp trực tiếp vào 16 bàn thắng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Pep Guardiola tuyên bố lớn sau cú ăn ba lịch sử",
            "abstract": "HLV người Tây Ban Nha cam kết tiếp tục gắn bó với Man City, giúp đội bóng đạt được thêm nhiều thành công sau khi chinh phục đỉnh cao Champions League.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Pep Guardiola còn thời hạn 2 năm hợp đồng với Man City. Vừa trải qua mùa giải thành công nhất từ trước đến nay ở Etihad, Pep hứa sẽ tiếp tục theo đuổi bộ tứ danh hiệu thời gian tới. \n Ông cảnh báo các cầu thủ không được phép thỏa mãn: \"Tôi không muốn Man City biến mất sau một năm thành công tại Champions League.\" \n Toàn đội phải làm việc chăm chỉ hơn nữa. Có những đội vô địch Champions League xong rồi tuột dốc. Man City phải tránh điều đó. \n Cảm giác lúc này thật nhẹ nhõm, bởi cuối cùng Man City cũng chinh phục được đỉnh cao châu Âu. Mọi người sẽ không hỏi tôi về nỗi ám ảnh Champions League nữa.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Hụt Messi, Al-Hilal chi 200 triệu euro đón Neymar",
            "abstract": "Sau khi hụt Messi, Al-Hilal đang liên hệ đưa Neymar sang bóng đá Saudi Arabia mùa hè này với tiền lương 200 triệu euro.",
            "mainImg": "/images/articles/article-4.png",
            "content": "Tham vọng của gã khổng lồ Al-Hilal và bóng đá Saudi Arabia về việc ký hợp đồng với Lionel Messi đã bị ngôi sao người Argentina dội gáo nước lạnh. \n Messi quyết định không sang Saudi Arabia để mở ra giai đoạn đối đầu mới với Cristiano Ronaldo, mà anh chọn điểm đến Inter Miami. \n Cầu thủ người Brazil vốn là bạn thân của Messi trên sân cỏ lẫn ngoài đời, khi họ cùng đá với nhau từ Barcelona đến PSG. \n Một số quan chức Al-Hilal đã tới Paris hôm thứ Sáu tuần trước để hỏi thăm tình hình của Neymar. Các bên đều hy vọng sớm hoàn tất quá trình đàm phán chuyển nhượng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Man City mừng cú ăn 3, Jack Grealish vui say khó đỡ",
            "abstract": "Tiền vệ Jack Grealish đầu trò ăn nhậu thâu đêm, đến sáng hôm sau vẫn còn mặc nguyên trang phục thi đấu ở chung kết Cúp C1, Man City 1-0 Inter Milan.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Man City hoàn tất cú ăn ba lịch sử (Premier League, FA Cup và Champions League) vào đêm 10/6, với chiến thắng trước Inter Milan nhờ bàn duy nhất của Rodri ở phút 68 để lần đầu tiên xưng vương châu Âu. \n Thầy trò Pep Guardiola sẽ có màn diễu hành tưng bừng phủ nửa xanh thành Manchester vào hôm nay (12/6), sau khi từ Istanbul trở về. \n Tuy nhiên, trước khi trở lại Anh, các nhà vô địch đã mở tiệc ăn mừng ở khách sạn, nơi đội ‘đóng quân’ và Jack Grealish là một trong những người nhiệt tình, ‘quẩy’ mạnh nhất. \n Từng bị chỉ trích vì mải tiệc tùng nên chơi dở khi đến Man City trong mùa đầu tiên, Jack Grealish cho thấy là một phần ảnh hưởng đến thành công ăn ba của đoàn quân Pep Guardiola, với 46 lần ra sân, đóng góp trực tiếp vào 16 bàn thắng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Pep Guardiola tuyên bố lớn sau cú ăn ba lịch sử",
            "abstract": "HLV người Tây Ban Nha cam kết tiếp tục gắn bó với Man City, giúp đội bóng đạt được thêm nhiều thành công sau khi chinh phục đỉnh cao Champions League.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Pep Guardiola còn thời hạn 2 năm hợp đồng với Man City. Vừa trải qua mùa giải thành công nhất từ trước đến nay ở Etihad, Pep hứa sẽ tiếp tục theo đuổi bộ tứ danh hiệu thời gian tới. \n Ông cảnh báo các cầu thủ không được phép thỏa mãn: \"Tôi không muốn Man City biến mất sau một năm thành công tại Champions League.\" \n Toàn đội phải làm việc chăm chỉ hơn nữa. Có những đội vô địch Champions League xong rồi tuột dốc. Man City phải tránh điều đó. \n Cảm giác lúc này thật nhẹ nhõm, bởi cuối cùng Man City cũng chinh phục được đỉnh cao châu Âu. Mọi người sẽ không hỏi tôi về nỗi ám ảnh Champions League nữa.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Hụt Messi, Al-Hilal chi 200 triệu euro đón Neymar",
            "abstract": "Sau khi hụt Messi, Al-Hilal đang liên hệ đưa Neymar sang bóng đá Saudi Arabia mùa hè này với tiền lương 200 triệu euro.",
            "mainImg": "/images/articles/article-4.png",
            "content": "Tham vọng của gã khổng lồ Al-Hilal và bóng đá Saudi Arabia về việc ký hợp đồng với Lionel Messi đã bị ngôi sao người Argentina dội gáo nước lạnh. \n Messi quyết định không sang Saudi Arabia để mở ra giai đoạn đối đầu mới với Cristiano Ronaldo, mà anh chọn điểm đến Inter Miami. \n Cầu thủ người Brazil vốn là bạn thân của Messi trên sân cỏ lẫn ngoài đời, khi họ cùng đá với nhau từ Barcelona đến PSG. \n Một số quan chức Al-Hilal đã tới Paris hôm thứ Sáu tuần trước để hỏi thăm tình hình của Neymar. Các bên đều hy vọng sớm hoàn tất quá trình đàm phán chuyển nhượng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Man City mừng cú ăn 3, Jack Grealish vui say khó đỡ",
            "abstract": "Tiền vệ Jack Grealish đầu trò ăn nhậu thâu đêm, đến sáng hôm sau vẫn còn mặc nguyên trang phục thi đấu ở chung kết Cúp C1, Man City 1-0 Inter Milan.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Man City hoàn tất cú ăn ba lịch sử (Premier League, FA Cup và Champions League) vào đêm 10/6, với chiến thắng trước Inter Milan nhờ bàn duy nhất của Rodri ở phút 68 để lần đầu tiên xưng vương châu Âu. \n Thầy trò Pep Guardiola sẽ có màn diễu hành tưng bừng phủ nửa xanh thành Manchester vào hôm nay (12/6), sau khi từ Istanbul trở về. \n Tuy nhiên, trước khi trở lại Anh, các nhà vô địch đã mở tiệc ăn mừng ở khách sạn, nơi đội ‘đóng quân’ và Jack Grealish là một trong những người nhiệt tình, ‘quẩy’ mạnh nhất. \n Từng bị chỉ trích vì mải tiệc tùng nên chơi dở khi đến Man City trong mùa đầu tiên, Jack Grealish cho thấy là một phần ảnh hưởng đến thành công ăn ba của đoàn quân Pep Guardiola, với 46 lần ra sân, đóng góp trực tiếp vào 16 bàn thắng.",
            "views": 20,
            "type": 2,
            "authorId": 4
        },
        {
            "title": "Pep Guardiola tuyên bố lớn sau cú ăn ba lịch sử",
            "abstract": "HLV người Tây Ban Nha cam kết tiếp tục gắn bó với Man City, giúp đội bóng đạt được thêm nhiều thành công sau khi chinh phục đỉnh cao Champions League.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Pep Guardiola còn thời hạn 2 năm hợp đồng với Man City. Vừa trải qua mùa giải thành công nhất từ trước đến nay ở Etihad, Pep hứa sẽ tiếp tục theo đuổi bộ tứ danh hiệu thời gian tới. \n Ông cảnh báo các cầu thủ không được phép thỏa mãn: \"Tôi không muốn Man City biến mất sau một năm thành công tại Champions League.\" \n Toàn đội phải làm việc chăm chỉ hơn nữa. Có những đội vô địch Champions League xong rồi tuột dốc. Man City phải tránh điều đó. \n Cảm giác lúc này thật nhẹ nhõm, bởi cuối cùng Man City cũng chinh phục được đỉnh cao châu Âu. Mọi người sẽ không hỏi tôi về nỗi ám ảnh Champions League nữa.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Hụt Messi, Al-Hilal chi 200 triệu euro đón Neymar",
            "abstract": "Sau khi hụt Messi, Al-Hilal đang liên hệ đưa Neymar sang bóng đá Saudi Arabia mùa hè này với tiền lương 200 triệu euro.",
            "mainImg": "/images/articles/article-4.png",
            "content": "Tham vọng của gã khổng lồ Al-Hilal và bóng đá Saudi Arabia về việc ký hợp đồng với Lionel Messi đã bị ngôi sao người Argentina dội gáo nước lạnh. \n Messi quyết định không sang Saudi Arabia để mở ra giai đoạn đối đầu mới với Cristiano Ronaldo, mà anh chọn điểm đến Inter Miami. \n Cầu thủ người Brazil vốn là bạn thân của Messi trên sân cỏ lẫn ngoài đời, khi họ cùng đá với nhau từ Barcelona đến PSG. \n Một số quan chức Al-Hilal đã tới Paris hôm thứ Sáu tuần trước để hỏi thăm tình hình của Neymar. Các bên đều hy vọng sớm hoàn tất quá trình đàm phán chuyển nhượng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Man City mừng cú ăn 3, Jack Grealish vui say khó đỡ",
            "abstract": "Tiền vệ Jack Grealish đầu trò ăn nhậu thâu đêm, đến sáng hôm sau vẫn còn mặc nguyên trang phục thi đấu ở chung kết Cúp C1, Man City 1-0 Inter Milan.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Man City hoàn tất cú ăn ba lịch sử (Premier League, FA Cup và Champions League) vào đêm 10/6, với chiến thắng trước Inter Milan nhờ bàn duy nhất của Rodri ở phút 68 để lần đầu tiên xưng vương châu Âu. \n Thầy trò Pep Guardiola sẽ có màn diễu hành tưng bừng phủ nửa xanh thành Manchester vào hôm nay (12/6), sau khi từ Istanbul trở về. \n Tuy nhiên, trước khi trở lại Anh, các nhà vô địch đã mở tiệc ăn mừng ở khách sạn, nơi đội ‘đóng quân’ và Jack Grealish là một trong những người nhiệt tình, ‘quẩy’ mạnh nhất. \n Từng bị chỉ trích vì mải tiệc tùng nên chơi dở khi đến Man City trong mùa đầu tiên, Jack Grealish cho thấy là một phần ảnh hưởng đến thành công ăn ba của đoàn quân Pep Guardiola, với 46 lần ra sân, đóng góp trực tiếp vào 16 bàn thắng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Pep Guardiola tuyên bố lớn sau cú ăn ba lịch sử",
            "abstract": "HLV người Tây Ban Nha cam kết tiếp tục gắn bó với Man City, giúp đội bóng đạt được thêm nhiều thành công sau khi chinh phục đỉnh cao Champions League.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Pep Guardiola còn thời hạn 2 năm hợp đồng với Man City. Vừa trải qua mùa giải thành công nhất từ trước đến nay ở Etihad, Pep hứa sẽ tiếp tục theo đuổi bộ tứ danh hiệu thời gian tới. \n Ông cảnh báo các cầu thủ không được phép thỏa mãn: \"Tôi không muốn Man City biến mất sau một năm thành công tại Champions League.\" \n Toàn đội phải làm việc chăm chỉ hơn nữa. Có những đội vô địch Champions League xong rồi tuột dốc. Man City phải tránh điều đó. \n Cảm giác lúc này thật nhẹ nhõm, bởi cuối cùng Man City cũng chinh phục được đỉnh cao châu Âu. Mọi người sẽ không hỏi tôi về nỗi ám ảnh Champions League nữa.",
            "views": 20,
            "type": 1,
            "authorId": 4
        },
        {
            "title": "Hụt Messi, Al-Hilal chi 200 triệu euro đón Neymar",
            "abstract": "Sau khi hụt Messi, Al-Hilal đang liên hệ đưa Neymar sang bóng đá Saudi Arabia mùa hè này với tiền lương 200 triệu euro.",
            "mainImg": "/images/articles/article-4.png",
            "content": "Tham vọng của gã khổng lồ Al-Hilal và bóng đá Saudi Arabia về việc ký hợp đồng với Lionel Messi đã bị ngôi sao người Argentina dội gáo nước lạnh. \n Messi quyết định không sang Saudi Arabia để mở ra giai đoạn đối đầu mới với Cristiano Ronaldo, mà anh chọn điểm đến Inter Miami. \n Cầu thủ người Brazil vốn là bạn thân của Messi trên sân cỏ lẫn ngoài đời, khi họ cùng đá với nhau từ Barcelona đến PSG. \n Một số quan chức Al-Hilal đã tới Paris hôm thứ Sáu tuần trước để hỏi thăm tình hình của Neymar. Các bên đều hy vọng sớm hoàn tất quá trình đàm phán chuyển nhượng.",
            "views": 20,
            "type": 2,
            "authorId": 4
        },
        {
            "title": "Man City mừng cú ăn 3, Jack Grealish vui say khó đỡ",
            "abstract": "Tiền vệ Jack Grealish đầu trò ăn nhậu thâu đêm, đến sáng hôm sau vẫn còn mặc nguyên trang phục thi đấu ở chung kết Cúp C1, Man City 1-0 Inter Milan.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Man City hoàn tất cú ăn ba lịch sử (Premier League, FA Cup và Champions League) vào đêm 10/6, với chiến thắng trước Inter Milan nhờ bàn duy nhất của Rodri ở phút 68 để lần đầu tiên xưng vương châu Âu. \n Thầy trò Pep Guardiola sẽ có màn diễu hành tưng bừng phủ nửa xanh thành Manchester vào hôm nay (12/6), sau khi từ Istanbul trở về. \n Tuy nhiên, trước khi trở lại Anh, các nhà vô địch đã mở tiệc ăn mừng ở khách sạn, nơi đội ‘đóng quân’ và Jack Grealish là một trong những người nhiệt tình, ‘quẩy’ mạnh nhất. \n Từng bị chỉ trích vì mải tiệc tùng nên chơi dở khi đến Man City trong mùa đầu tiên, Jack Grealish cho thấy là một phần ảnh hưởng đến thành công ăn ba của đoàn quân Pep Guardiola, với 46 lần ra sân, đóng góp trực tiếp vào 16 bàn thắng.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Pep Guardiola tuyên bố lớn sau cú ăn ba lịch sử",
            "abstract": "HLV người Tây Ban Nha cam kết tiếp tục gắn bó với Man City, giúp đội bóng đạt được thêm nhiều thành công sau khi chinh phục đỉnh cao Champions League.",
            "mainImg": "/images/articles/article-5.png",
            "content": "Pep Guardiola còn thời hạn 2 năm hợp đồng với Man City. Vừa trải qua mùa giải thành công nhất từ trước đến nay ở Etihad, Pep hứa sẽ tiếp tục theo đuổi bộ tứ danh hiệu thời gian tới. \n Ông cảnh báo các cầu thủ không được phép thỏa mãn: \"Tôi không muốn Man City biến mất sau một năm thành công tại Champions League.\" \n Toàn đội phải làm việc chăm chỉ hơn nữa. Có những đội vô địch Champions League xong rồi tuột dốc. Man City phải tránh điều đó. \n Cảm giác lúc này thật nhẹ nhõm, bởi cuối cùng Man City cũng chinh phục được đỉnh cao châu Âu. Mọi người sẽ không hỏi tôi về nỗi ám ảnh Champions League nữa.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Mạo danh công an để lừa đảo người bán giò chả hàng trăm triệu đồng",
            "abstract": "Bị can Nguyễn Thị Thùy Hương mạo danh cán bộ công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Chiều 12/6, Công an huyện Thanh Oai (Hà Nội) cho biết, đã khởi tố vụ án, khởi tố bị can và ra lệnh tạm giam đối với Nguyễn Thị Thùy Hương (SN 1981 ở phường Hữu Nghị, TP. Hòa Bình, tỉnh Hòa Bình, hiện thuê trọ tại chung cư The Zei, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội) về tội lừa đảo. \n Được biết, Nguyễn Thị Thùy Hương đang kháng cáo bản án sơ thẩm tuyên 7 năm tù giam của TAND TP Hà Nội. \n Trước đó, khoảng tháng 12/2021, mặc dù không công tác tại Bộ Công an, không có chức năng nhiệm vụ gì trong việc tuyển chọn đầu mối cung cấp thực phẩm cho bếp ăn của Bộ Công an, nhưng khi gặp anh N.V.H. (ở huyện Thanh Oai, Hà Nội) có nghề làm giò chả, Nguyễn Thị Thùy Hương đã giới thiệu mình là cán bộ tại Bộ Công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai",
            "abstract": "Công an tỉnh Long An vừa phát thông báo truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai liên quan đến hành vi phát tán trên không gian mạng, có dấu hiệu phạm tội theo Điều 331 Bộ Luật hình sự.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Bắt đối tượng lừa 'chạy án' để chiếm đoạt tài sản của nhiều người",
            "abstract": "Nguyễn Trung Hiếu nắm được thông tin Công an đang thụ lý điều tra vụ cố ý gây thương tích. Hiếu liên hệ với người thân của các đối tượng nhằm lừa “chạy án” để chiếm đoạt tài sản.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Mạo danh công an để lừa đảo người bán giò chả hàng trăm triệu đồng",
            "abstract": "Bị can Nguyễn Thị Thùy Hương mạo danh cán bộ công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Chiều 12/6, Công an huyện Thanh Oai (Hà Nội) cho biết, đã khởi tố vụ án, khởi tố bị can và ra lệnh tạm giam đối với Nguyễn Thị Thùy Hương (SN 1981 ở phường Hữu Nghị, TP. Hòa Bình, tỉnh Hòa Bình, hiện thuê trọ tại chung cư The Zei, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội) về tội lừa đảo. \n Được biết, Nguyễn Thị Thùy Hương đang kháng cáo bản án sơ thẩm tuyên 7 năm tù giam của TAND TP Hà Nội. \n Trước đó, khoảng tháng 12/2021, mặc dù không công tác tại Bộ Công an, không có chức năng nhiệm vụ gì trong việc tuyển chọn đầu mối cung cấp thực phẩm cho bếp ăn của Bộ Công an, nhưng khi gặp anh N.V.H. (ở huyện Thanh Oai, Hà Nội) có nghề làm giò chả, Nguyễn Thị Thùy Hương đã giới thiệu mình là cán bộ tại Bộ Công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "views": 20,
            "type": 1,
            "authorId": 5
        },
        {
            "title": "Truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai",
            "abstract": "Công an tỉnh Long An vừa phát thông báo truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai liên quan đến hành vi phát tán trên không gian mạng, có dấu hiệu phạm tội theo Điều 331 Bộ Luật hình sự.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 2,
            "authorId": 5
        },
        {
            "title": "Bắt đối tượng lừa 'chạy án' để chiếm đoạt tài sản của nhiều người",
            "abstract": "Nguyễn Trung Hiếu nắm được thông tin Công an đang thụ lý điều tra vụ cố ý gây thương tích. Hiếu liên hệ với người thân của các đối tượng nhằm lừa “chạy án” để chiếm đoạt tài sản.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 1,
            "authorId": 5
        },
        {
            "title": "Mạo danh công an để lừa đảo người bán giò chả hàng trăm triệu đồng",
            "abstract": "Bị can Nguyễn Thị Thùy Hương mạo danh cán bộ công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Chiều 12/6, Công an huyện Thanh Oai (Hà Nội) cho biết, đã khởi tố vụ án, khởi tố bị can và ra lệnh tạm giam đối với Nguyễn Thị Thùy Hương (SN 1981 ở phường Hữu Nghị, TP. Hòa Bình, tỉnh Hòa Bình, hiện thuê trọ tại chung cư The Zei, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội) về tội lừa đảo. \n Được biết, Nguyễn Thị Thùy Hương đang kháng cáo bản án sơ thẩm tuyên 7 năm tù giam của TAND TP Hà Nội. \n Trước đó, khoảng tháng 12/2021, mặc dù không công tác tại Bộ Công an, không có chức năng nhiệm vụ gì trong việc tuyển chọn đầu mối cung cấp thực phẩm cho bếp ăn của Bộ Công an, nhưng khi gặp anh N.V.H. (ở huyện Thanh Oai, Hà Nội) có nghề làm giò chả, Nguyễn Thị Thùy Hương đã giới thiệu mình là cán bộ tại Bộ Công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai",
            "abstract": "Công an tỉnh Long An vừa phát thông báo truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai liên quan đến hành vi phát tán trên không gian mạng, có dấu hiệu phạm tội theo Điều 331 Bộ Luật hình sự.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Bắt đối tượng lừa 'chạy án' để chiếm đoạt tài sản của nhiều người",
            "abstract": "Nguyễn Trung Hiếu nắm được thông tin Công an đang thụ lý điều tra vụ cố ý gây thương tích. Hiếu liên hệ với người thân của các đối tượng nhằm lừa “chạy án” để chiếm đoạt tài sản.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Mạo danh công an để lừa đảo người bán giò chả hàng trăm triệu đồng",
            "abstract": "Bị can Nguyễn Thị Thùy Hương mạo danh cán bộ công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Chiều 12/6, Công an huyện Thanh Oai (Hà Nội) cho biết, đã khởi tố vụ án, khởi tố bị can và ra lệnh tạm giam đối với Nguyễn Thị Thùy Hương (SN 1981 ở phường Hữu Nghị, TP. Hòa Bình, tỉnh Hòa Bình, hiện thuê trọ tại chung cư The Zei, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội) về tội lừa đảo. \n Được biết, Nguyễn Thị Thùy Hương đang kháng cáo bản án sơ thẩm tuyên 7 năm tù giam của TAND TP Hà Nội. \n Trước đó, khoảng tháng 12/2021, mặc dù không công tác tại Bộ Công an, không có chức năng nhiệm vụ gì trong việc tuyển chọn đầu mối cung cấp thực phẩm cho bếp ăn của Bộ Công an, nhưng khi gặp anh N.V.H. (ở huyện Thanh Oai, Hà Nội) có nghề làm giò chả, Nguyễn Thị Thùy Hương đã giới thiệu mình là cán bộ tại Bộ Công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai",
            "abstract": "Công an tỉnh Long An vừa phát thông báo truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai liên quan đến hành vi phát tán trên không gian mạng, có dấu hiệu phạm tội theo Điều 331 Bộ Luật hình sự.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Bắt đối tượng lừa 'chạy án' để chiếm đoạt tài sản của nhiều người",
            "abstract": "Nguyễn Trung Hiếu nắm được thông tin Công an đang thụ lý điều tra vụ cố ý gây thương tích. Hiếu liên hệ với người thân của các đối tượng nhằm lừa “chạy án” để chiếm đoạt tài sản.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Mạo danh công an để lừa đảo người bán giò chả hàng trăm triệu đồng",
            "abstract": "Bị can Nguyễn Thị Thùy Hương mạo danh cán bộ công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Chiều 12/6, Công an huyện Thanh Oai (Hà Nội) cho biết, đã khởi tố vụ án, khởi tố bị can và ra lệnh tạm giam đối với Nguyễn Thị Thùy Hương (SN 1981 ở phường Hữu Nghị, TP. Hòa Bình, tỉnh Hòa Bình, hiện thuê trọ tại chung cư The Zei, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội) về tội lừa đảo. \n Được biết, Nguyễn Thị Thùy Hương đang kháng cáo bản án sơ thẩm tuyên 7 năm tù giam của TAND TP Hà Nội. \n Trước đó, khoảng tháng 12/2021, mặc dù không công tác tại Bộ Công an, không có chức năng nhiệm vụ gì trong việc tuyển chọn đầu mối cung cấp thực phẩm cho bếp ăn của Bộ Công an, nhưng khi gặp anh N.V.H. (ở huyện Thanh Oai, Hà Nội) có nghề làm giò chả, Nguyễn Thị Thùy Hương đã giới thiệu mình là cán bộ tại Bộ Công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai",
            "abstract": "Công an tỉnh Long An vừa phát thông báo truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai liên quan đến hành vi phát tán trên không gian mạng, có dấu hiệu phạm tội theo Điều 331 Bộ Luật hình sự.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 2,
            "authorId": 5
        },
        {
            "title": "Bắt đối tượng lừa 'chạy án' để chiếm đoạt tài sản của nhiều người",
            "abstract": "Nguyễn Trung Hiếu nắm được thông tin Công an đang thụ lý điều tra vụ cố ý gây thương tích. Hiếu liên hệ với người thân của các đối tượng nhằm lừa “chạy án” để chiếm đoạt tài sản.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Mạo danh công an để lừa đảo người bán giò chả hàng trăm triệu đồng",
            "abstract": "Bị can Nguyễn Thị Thùy Hương mạo danh cán bộ công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Chiều 12/6, Công an huyện Thanh Oai (Hà Nội) cho biết, đã khởi tố vụ án, khởi tố bị can và ra lệnh tạm giam đối với Nguyễn Thị Thùy Hương (SN 1981 ở phường Hữu Nghị, TP. Hòa Bình, tỉnh Hòa Bình, hiện thuê trọ tại chung cư The Zei, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội) về tội lừa đảo. \n Được biết, Nguyễn Thị Thùy Hương đang kháng cáo bản án sơ thẩm tuyên 7 năm tù giam của TAND TP Hà Nội. \n Trước đó, khoảng tháng 12/2021, mặc dù không công tác tại Bộ Công an, không có chức năng nhiệm vụ gì trong việc tuyển chọn đầu mối cung cấp thực phẩm cho bếp ăn của Bộ Công an, nhưng khi gặp anh N.V.H. (ở huyện Thanh Oai, Hà Nội) có nghề làm giò chả, Nguyễn Thị Thùy Hương đã giới thiệu mình là cán bộ tại Bộ Công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai",
            "abstract": "Công an tỉnh Long An vừa phát thông báo truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai liên quan đến hành vi phát tán trên không gian mạng, có dấu hiệu phạm tội theo Điều 331 Bộ Luật hình sự.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Bắt đối tượng lừa 'chạy án' để chiếm đoạt tài sản của nhiều người",
            "abstract": "Nguyễn Trung Hiếu nắm được thông tin Công an đang thụ lý điều tra vụ cố ý gây thương tích. Hiếu liên hệ với người thân của các đối tượng nhằm lừa “chạy án” để chiếm đoạt tài sản.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Mạo danh công an để lừa đảo người bán giò chả hàng trăm triệu đồng",
            "abstract": "Bị can Nguyễn Thị Thùy Hương mạo danh cán bộ công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Chiều 12/6, Công an huyện Thanh Oai (Hà Nội) cho biết, đã khởi tố vụ án, khởi tố bị can và ra lệnh tạm giam đối với Nguyễn Thị Thùy Hương (SN 1981 ở phường Hữu Nghị, TP. Hòa Bình, tỉnh Hòa Bình, hiện thuê trọ tại chung cư The Zei, phường Mỹ Đình 2, quận Nam Từ Liêm, Hà Nội) về tội lừa đảo. \n Được biết, Nguyễn Thị Thùy Hương đang kháng cáo bản án sơ thẩm tuyên 7 năm tù giam của TAND TP Hà Nội. \n Trước đó, khoảng tháng 12/2021, mặc dù không công tác tại Bộ Công an, không có chức năng nhiệm vụ gì trong việc tuyển chọn đầu mối cung cấp thực phẩm cho bếp ăn của Bộ Công an, nhưng khi gặp anh N.V.H. (ở huyện Thanh Oai, Hà Nội) có nghề làm giò chả, Nguyễn Thị Thùy Hương đã giới thiệu mình là cán bộ tại Bộ Công an, có khả năng xin cho anh H. đưa giò chả vào bán tại bếp ăn của Bộ Công an.",
            "views": 20,
            "type": 2,
            "authorId": 5
        },
        {
            "title": "Truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai",
            "abstract": "Công an tỉnh Long An vừa phát thông báo truy tìm 3 luật sư bào chữa cho các bị cáo ở Tịnh Thất Bồng Lai liên quan đến hành vi phát tán trên không gian mạng, có dấu hiệu phạm tội theo Điều 331 Bộ Luật hình sự.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Bắt đối tượng lừa 'chạy án' để chiếm đoạt tài sản của nhiều người",
            "abstract": "Nguyễn Trung Hiếu nắm được thông tin Công an đang thụ lý điều tra vụ cố ý gây thương tích. Hiếu liên hệ với người thân của các đối tượng nhằm lừa “chạy án” để chiếm đoạt tài sản.",
            "mainImg": "/images/articles/article-6.png",
            "content": "Công an tỉnh Long An truy tìm 3 người gồm: Nguyễn Văn Miếng (57 tuổi, ngụ phường Trường Thọ, TP Thủ Đức, TP.HCM); Đào Kim Lân (56 tuổi, ngụ phường 9, quận 6, TP.HCM) và Đặng Đình Mạnh ( 55 tuổi, ngụ phường 15, quận Phú Nhuận, TP.HCM). Cả ba người này trước đây là luật sư tham gia bào chữa cho các bị cáo liên quan đến Tịnh thất bồng lai. \n Trước đó, Cục An ninh mạng và phòng chống tội phạm sử dụng công nghệ cao Bộ Công an thông báo cho phía Công an tỉnh Long An về việc phát hiện 3 người trên có hành vi phát tán trên không gian mạng các đoạn video clip, những hình ảnh, lời nói, bài viết có dấu hiệu tội phạm \"Lợi dụng quyền tự do dân chủ xâm phạm lợi ích Nhà nước, quyền, lợi ích hợp pháp của tổ chức, cá nhân\" theo Điều 331 Bộ Luật hình sự năm 2015, sửa đổi bổ sung năm 2017.",
            "views": 20,
            "type": 2,
            "authorId": 5
        },
        {
            "title": "Nơi đang khốn khổ vì nắng nóng, cắt điện giữa trời 40 độ C, trường học đóng cửa",
            "abstract": "BANGLADESH - Đợt nắng nóng gay gắt kéo dài nhất trong nửa thập kỷ buộc hàng loạt trường tiểu học phải đóng cửa, người dân khốn khổ vì cắt điện thường xuyên.",
            "mainImg": "/images/articles/article-7.png",
            "content": "Bangladesh đã đóng cửa hàng nghìn trường học khi nước này phải vật lộn với đợt nắng nóng kéo dài nhất trong nửa thế kỷ, với tình trạng cắt điện trên diện rộng, làm tăng thêm nỗi khốn khổ của người dân địa phương. \n Nhiệt độ ở thủ đô Dhaka của quốc gia Nam Á đã tăng lên khoảng 40 độ C, khiến người dân phải gánh chịu cái nắng chói chang. \n Akhter nói: \"Những lớp học đó cũng nên đóng cửa vì học sinh phải chịu đựng rất nhiều khó khăn trong thời tiết nắng nóng này. Nhiều người bị ốm\".",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Chàng rể dọn nhà phát hiện kho báu bí mật hàng thập kỷ của bố vợ",
            "abstract": "MỸ - Chàng rể đang dọn dẹp nhà của bố vợ quá cố thì phát hiện ra kho báu bí mật chứa đến một triệu đồng xu, không ai đụng đến hàng thập kỷ.",
            "mainImg": "/images/articles/article-7.png",
            "content": "John Reyes cùng các thành viên trong gia đình dọn dẹp nhà của bố vợ quá cố ở Los Angeles (Mỹ). Anh tình cờ tìm thấy \"kho báu\" bộ sưu tập phong phú một triệu đồng xu, dưới tầm hầng của căn nhà. \n Ban đầu, anh nhìn thấy một số đồng xu lẻ trong các cuộn giấy cũ đang bị phân huỷ. Lần theo manh mối này, anh tìm thấy các hàng chục túi chứa đầy tiền xu. \n Nhiều túi trong số này được niêm phong trực tiếp từ ngân hàng. Trong đó, có một số ngân hàng lớn như Bank of America. Một số ngân hàng mà John chưa từng nghe đến, thậm chí, một số không còn tồn tại nữa. \n Anh chọn ngẫu nhiên 3 túi, lấy nhiều nắm và xác nhận rằng đây là những đồng xu bằng đồng, không phải kẽm. Họ làm một vài phép toán sơ bộ, cân các túi tiền xu và xác định mỗi túi chứa bao nhiêu tiền. Sau đó dừng lại khi họ cảm thấy thoải mái với ước tính: ít nhất 1 triệu đồng xu.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "‘Chú Phúc’ - giáo chủ của Năng lượng gốc khiến hàng ngàn người mê muội là ai?",
            "abstract": "Ông Lê Văn Phúc - hay còn gọi là \"chú Phúc\" có sức mạnh gì mà khiến hàng chục ngàn người Việt Nam mê muội thực hành những lý thuyết phản khoa học bất chấp sự ngăn cản của gia đình và các cơ quan chức năng?",
            "mainImg": "/images/articles/article-7.png",
            "content": "Chị An có em gái phải chạy thận nhân tạo 3 lần/tuần. Trong giai đoạn bệnh tật đau đớn, em gái chị được giới thiệu đến với NLG và đã học hết lớp 3. Do chứng kiến quá nhiều bệnh nhân ca tụng, lên sân khấu phát biểu cảm nghĩ nên em gái chị An hoàn toàn tin tưởng ông Phúc và sự màu nhiệm của bộ môn này. Ông Phúc hứa sẽ hồi phục 2 quả thận cho cô và hứa hẹn giúp cô sinh con bình thường. \n Chị An cũng bị gia đình “ép” học và học đến lớp 3. “Ông ta rất khôn ngoan gom góp các kiến thức từ các nhà tâm linh trên thế giới để lấy làm kiến thức của riêng mình và hướng dẫn người ta chữa bệnh nhờ biết yêu thương đúng cách - 5 yếu tố tình thương. Nhưng đến lớp 3 thì ông ta bắt đầu dạy về tâm linh, lồng ghép những tư tưởng lạ. Ông ta nói quá nhiều về bùa ngải theo cách tiêu cực và đưa con người vào những nỗi sợ âm thầm. Nếu ai từng gây ra lỗi lầm hoặc là người mê tín sẽ thấy thích thú và sợ hãi”. \n ",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Nơi đang khốn khổ vì nắng nóng, cắt điện giữa trời 40 độ C, trường học đóng cửa",
            "abstract": "BANGLADESH - Đợt nắng nóng gay gắt kéo dài nhất trong nửa thập kỷ buộc hàng loạt trường tiểu học phải đóng cửa, người dân khốn khổ vì cắt điện thường xuyên.",
            "mainImg": "/images/articles/article-7.png",
            "content": "Bangladesh đã đóng cửa hàng nghìn trường học khi nước này phải vật lộn với đợt nắng nóng kéo dài nhất trong nửa thế kỷ, với tình trạng cắt điện trên diện rộng, làm tăng thêm nỗi khốn khổ của người dân địa phương. \n Nhiệt độ ở thủ đô Dhaka của quốc gia Nam Á đã tăng lên khoảng 40 độ C, khiến người dân phải gánh chịu cái nắng chói chang. \n Akhter nói: \"Những lớp học đó cũng nên đóng cửa vì học sinh phải chịu đựng rất nhiều khó khăn trong thời tiết nắng nóng này. Nhiều người bị ốm\".",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Chàng rể dọn nhà phát hiện kho báu bí mật hàng thập kỷ của bố vợ",
            "abstract": "MỸ - Chàng rể đang dọn dẹp nhà của bố vợ quá cố thì phát hiện ra kho báu bí mật chứa đến một triệu đồng xu, không ai đụng đến hàng thập kỷ.",
            "mainImg": "/images/articles/article-7.png",
            "content": "John Reyes cùng các thành viên trong gia đình dọn dẹp nhà của bố vợ quá cố ở Los Angeles (Mỹ). Anh tình cờ tìm thấy \"kho báu\" bộ sưu tập phong phú một triệu đồng xu, dưới tầm hầng của căn nhà. \n Ban đầu, anh nhìn thấy một số đồng xu lẻ trong các cuộn giấy cũ đang bị phân huỷ. Lần theo manh mối này, anh tìm thấy các hàng chục túi chứa đầy tiền xu. \n Nhiều túi trong số này được niêm phong trực tiếp từ ngân hàng. Trong đó, có một số ngân hàng lớn như Bank of America. Một số ngân hàng mà John chưa từng nghe đến, thậm chí, một số không còn tồn tại nữa. \n Anh chọn ngẫu nhiên 3 túi, lấy nhiều nắm và xác nhận rằng đây là những đồng xu bằng đồng, không phải kẽm. Họ làm một vài phép toán sơ bộ, cân các túi tiền xu và xác định mỗi túi chứa bao nhiêu tiền. Sau đó dừng lại khi họ cảm thấy thoải mái với ước tính: ít nhất 1 triệu đồng xu.",
            "views": 20,
            "type": 2,
            "authorId": 2
        },
        {
            "title": "‘Chú Phúc’ - giáo chủ của Năng lượng gốc khiến hàng ngàn người mê muội là ai?",
            "abstract": "Ông Lê Văn Phúc - hay còn gọi là \"chú Phúc\" có sức mạnh gì mà khiến hàng chục ngàn người Việt Nam mê muội thực hành những lý thuyết phản khoa học bất chấp sự ngăn cản của gia đình và các cơ quan chức năng?",
            "mainImg": "/images/articles/article-7.png",
            "content": "Chị An có em gái phải chạy thận nhân tạo 3 lần/tuần. Trong giai đoạn bệnh tật đau đớn, em gái chị được giới thiệu đến với NLG và đã học hết lớp 3. Do chứng kiến quá nhiều bệnh nhân ca tụng, lên sân khấu phát biểu cảm nghĩ nên em gái chị An hoàn toàn tin tưởng ông Phúc và sự màu nhiệm của bộ môn này. Ông Phúc hứa sẽ hồi phục 2 quả thận cho cô và hứa hẹn giúp cô sinh con bình thường. \n Chị An cũng bị gia đình “ép” học và học đến lớp 3. “Ông ta rất khôn ngoan gom góp các kiến thức từ các nhà tâm linh trên thế giới để lấy làm kiến thức của riêng mình và hướng dẫn người ta chữa bệnh nhờ biết yêu thương đúng cách - 5 yếu tố tình thương. Nhưng đến lớp 3 thì ông ta bắt đầu dạy về tâm linh, lồng ghép những tư tưởng lạ. Ông ta nói quá nhiều về bùa ngải theo cách tiêu cực và đưa con người vào những nỗi sợ âm thầm. Nếu ai từng gây ra lỗi lầm hoặc là người mê tín sẽ thấy thích thú và sợ hãi”. \n ",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Nơi đang khốn khổ vì nắng nóng, cắt điện giữa trời 40 độ C, trường học đóng cửa",
            "abstract": "BANGLADESH - Đợt nắng nóng gay gắt kéo dài nhất trong nửa thập kỷ buộc hàng loạt trường tiểu học phải đóng cửa, người dân khốn khổ vì cắt điện thường xuyên.",
            "mainImg": "/images/articles/article-7.png",
            "content": "Bangladesh đã đóng cửa hàng nghìn trường học khi nước này phải vật lộn với đợt nắng nóng kéo dài nhất trong nửa thế kỷ, với tình trạng cắt điện trên diện rộng, làm tăng thêm nỗi khốn khổ của người dân địa phương. \n Nhiệt độ ở thủ đô Dhaka của quốc gia Nam Á đã tăng lên khoảng 40 độ C, khiến người dân phải gánh chịu cái nắng chói chang. \n Akhter nói: \"Những lớp học đó cũng nên đóng cửa vì học sinh phải chịu đựng rất nhiều khó khăn trong thời tiết nắng nóng này. Nhiều người bị ốm\".",
            "views": 20,
            "type": 2,
            "authorId": 1
        },
        {
            "title": "Chàng rể dọn nhà phát hiện kho báu bí mật hàng thập kỷ của bố vợ",
            "abstract": "MỸ - Chàng rể đang dọn dẹp nhà của bố vợ quá cố thì phát hiện ra kho báu bí mật chứa đến một triệu đồng xu, không ai đụng đến hàng thập kỷ.",
            "mainImg": "/images/articles/article-7.png",
            "content": "John Reyes cùng các thành viên trong gia đình dọn dẹp nhà của bố vợ quá cố ở Los Angeles (Mỹ). Anh tình cờ tìm thấy \"kho báu\" bộ sưu tập phong phú một triệu đồng xu, dưới tầm hầng của căn nhà. \n Ban đầu, anh nhìn thấy một số đồng xu lẻ trong các cuộn giấy cũ đang bị phân huỷ. Lần theo manh mối này, anh tìm thấy các hàng chục túi chứa đầy tiền xu. \n Nhiều túi trong số này được niêm phong trực tiếp từ ngân hàng. Trong đó, có một số ngân hàng lớn như Bank of America. Một số ngân hàng mà John chưa từng nghe đến, thậm chí, một số không còn tồn tại nữa. \n Anh chọn ngẫu nhiên 3 túi, lấy nhiều nắm và xác nhận rằng đây là những đồng xu bằng đồng, không phải kẽm. Họ làm một vài phép toán sơ bộ, cân các túi tiền xu và xác định mỗi túi chứa bao nhiêu tiền. Sau đó dừng lại khi họ cảm thấy thoải mái với ước tính: ít nhất 1 triệu đồng xu.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "‘Chú Phúc’ - giáo chủ của Năng lượng gốc khiến hàng ngàn người mê muội là ai?",
            "abstract": "Ông Lê Văn Phúc - hay còn gọi là \"chú Phúc\" có sức mạnh gì mà khiến hàng chục ngàn người Việt Nam mê muội thực hành những lý thuyết phản khoa học bất chấp sự ngăn cản của gia đình và các cơ quan chức năng?",
            "mainImg": "/images/articles/article-7.png",
            "content": "Chị An có em gái phải chạy thận nhân tạo 3 lần/tuần. Trong giai đoạn bệnh tật đau đớn, em gái chị được giới thiệu đến với NLG và đã học hết lớp 3. Do chứng kiến quá nhiều bệnh nhân ca tụng, lên sân khấu phát biểu cảm nghĩ nên em gái chị An hoàn toàn tin tưởng ông Phúc và sự màu nhiệm của bộ môn này. Ông Phúc hứa sẽ hồi phục 2 quả thận cho cô và hứa hẹn giúp cô sinh con bình thường. \n Chị An cũng bị gia đình “ép” học và học đến lớp 3. “Ông ta rất khôn ngoan gom góp các kiến thức từ các nhà tâm linh trên thế giới để lấy làm kiến thức của riêng mình và hướng dẫn người ta chữa bệnh nhờ biết yêu thương đúng cách - 5 yếu tố tình thương. Nhưng đến lớp 3 thì ông ta bắt đầu dạy về tâm linh, lồng ghép những tư tưởng lạ. Ông ta nói quá nhiều về bùa ngải theo cách tiêu cực và đưa con người vào những nỗi sợ âm thầm. Nếu ai từng gây ra lỗi lầm hoặc là người mê tín sẽ thấy thích thú và sợ hãi”. \n ",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Nơi đang khốn khổ vì nắng nóng, cắt điện giữa trời 40 độ C, trường học đóng cửa",
            "abstract": "BANGLADESH - Đợt nắng nóng gay gắt kéo dài nhất trong nửa thập kỷ buộc hàng loạt trường tiểu học phải đóng cửa, người dân khốn khổ vì cắt điện thường xuyên.",
            "mainImg": "/images/articles/article-7.png",
            "content": "Bangladesh đã đóng cửa hàng nghìn trường học khi nước này phải vật lộn với đợt nắng nóng kéo dài nhất trong nửa thế kỷ, với tình trạng cắt điện trên diện rộng, làm tăng thêm nỗi khốn khổ của người dân địa phương. \n Nhiệt độ ở thủ đô Dhaka của quốc gia Nam Á đã tăng lên khoảng 40 độ C, khiến người dân phải gánh chịu cái nắng chói chang. \n Akhter nói: \"Những lớp học đó cũng nên đóng cửa vì học sinh phải chịu đựng rất nhiều khó khăn trong thời tiết nắng nóng này. Nhiều người bị ốm\".",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Chàng rể dọn nhà phát hiện kho báu bí mật hàng thập kỷ của bố vợ",
            "abstract": "MỸ - Chàng rể đang dọn dẹp nhà của bố vợ quá cố thì phát hiện ra kho báu bí mật chứa đến một triệu đồng xu, không ai đụng đến hàng thập kỷ.",
            "mainImg": "/images/articles/article-7.png",
            "content": "John Reyes cùng các thành viên trong gia đình dọn dẹp nhà của bố vợ quá cố ở Los Angeles (Mỹ). Anh tình cờ tìm thấy \"kho báu\" bộ sưu tập phong phú một triệu đồng xu, dưới tầm hầng của căn nhà. \n Ban đầu, anh nhìn thấy một số đồng xu lẻ trong các cuộn giấy cũ đang bị phân huỷ. Lần theo manh mối này, anh tìm thấy các hàng chục túi chứa đầy tiền xu. \n Nhiều túi trong số này được niêm phong trực tiếp từ ngân hàng. Trong đó, có một số ngân hàng lớn như Bank of America. Một số ngân hàng mà John chưa từng nghe đến, thậm chí, một số không còn tồn tại nữa. \n Anh chọn ngẫu nhiên 3 túi, lấy nhiều nắm và xác nhận rằng đây là những đồng xu bằng đồng, không phải kẽm. Họ làm một vài phép toán sơ bộ, cân các túi tiền xu và xác định mỗi túi chứa bao nhiêu tiền. Sau đó dừng lại khi họ cảm thấy thoải mái với ước tính: ít nhất 1 triệu đồng xu.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "‘Chú Phúc’ - giáo chủ của Năng lượng gốc khiến hàng ngàn người mê muội là ai?",
            "abstract": "Ông Lê Văn Phúc - hay còn gọi là \"chú Phúc\" có sức mạnh gì mà khiến hàng chục ngàn người Việt Nam mê muội thực hành những lý thuyết phản khoa học bất chấp sự ngăn cản của gia đình và các cơ quan chức năng?",
            "mainImg": "/images/articles/article-7.png",
            "content": "Chị An có em gái phải chạy thận nhân tạo 3 lần/tuần. Trong giai đoạn bệnh tật đau đớn, em gái chị được giới thiệu đến với NLG và đã học hết lớp 3. Do chứng kiến quá nhiều bệnh nhân ca tụng, lên sân khấu phát biểu cảm nghĩ nên em gái chị An hoàn toàn tin tưởng ông Phúc và sự màu nhiệm của bộ môn này. Ông Phúc hứa sẽ hồi phục 2 quả thận cho cô và hứa hẹn giúp cô sinh con bình thường. \n Chị An cũng bị gia đình “ép” học và học đến lớp 3. “Ông ta rất khôn ngoan gom góp các kiến thức từ các nhà tâm linh trên thế giới để lấy làm kiến thức của riêng mình và hướng dẫn người ta chữa bệnh nhờ biết yêu thương đúng cách - 5 yếu tố tình thương. Nhưng đến lớp 3 thì ông ta bắt đầu dạy về tâm linh, lồng ghép những tư tưởng lạ. Ông ta nói quá nhiều về bùa ngải theo cách tiêu cực và đưa con người vào những nỗi sợ âm thầm. Nếu ai từng gây ra lỗi lầm hoặc là người mê tín sẽ thấy thích thú và sợ hãi”. \n ",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Nơi đang khốn khổ vì nắng nóng, cắt điện giữa trời 40 độ C, trường học đóng cửa",
            "abstract": "BANGLADESH - Đợt nắng nóng gay gắt kéo dài nhất trong nửa thập kỷ buộc hàng loạt trường tiểu học phải đóng cửa, người dân khốn khổ vì cắt điện thường xuyên.",
            "mainImg": "/images/articles/article-7.png",
            "content": "Bangladesh đã đóng cửa hàng nghìn trường học khi nước này phải vật lộn với đợt nắng nóng kéo dài nhất trong nửa thế kỷ, với tình trạng cắt điện trên diện rộng, làm tăng thêm nỗi khốn khổ của người dân địa phương. \n Nhiệt độ ở thủ đô Dhaka của quốc gia Nam Á đã tăng lên khoảng 40 độ C, khiến người dân phải gánh chịu cái nắng chói chang. \n Akhter nói: \"Những lớp học đó cũng nên đóng cửa vì học sinh phải chịu đựng rất nhiều khó khăn trong thời tiết nắng nóng này. Nhiều người bị ốm\".",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Chàng rể dọn nhà phát hiện kho báu bí mật hàng thập kỷ của bố vợ",
            "abstract": "MỸ - Chàng rể đang dọn dẹp nhà của bố vợ quá cố thì phát hiện ra kho báu bí mật chứa đến một triệu đồng xu, không ai đụng đến hàng thập kỷ.",
            "mainImg": "/images/articles/article-7.png",
            "content": "John Reyes cùng các thành viên trong gia đình dọn dẹp nhà của bố vợ quá cố ở Los Angeles (Mỹ). Anh tình cờ tìm thấy \"kho báu\" bộ sưu tập phong phú một triệu đồng xu, dưới tầm hầng của căn nhà. \n Ban đầu, anh nhìn thấy một số đồng xu lẻ trong các cuộn giấy cũ đang bị phân huỷ. Lần theo manh mối này, anh tìm thấy các hàng chục túi chứa đầy tiền xu. \n Nhiều túi trong số này được niêm phong trực tiếp từ ngân hàng. Trong đó, có một số ngân hàng lớn như Bank of America. Một số ngân hàng mà John chưa từng nghe đến, thậm chí, một số không còn tồn tại nữa. \n Anh chọn ngẫu nhiên 3 túi, lấy nhiều nắm và xác nhận rằng đây là những đồng xu bằng đồng, không phải kẽm. Họ làm một vài phép toán sơ bộ, cân các túi tiền xu và xác định mỗi túi chứa bao nhiêu tiền. Sau đó dừng lại khi họ cảm thấy thoải mái với ước tính: ít nhất 1 triệu đồng xu.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "‘Chú Phúc’ - giáo chủ của Năng lượng gốc khiến hàng ngàn người mê muội là ai?",
            "abstract": "Ông Lê Văn Phúc - hay còn gọi là \"chú Phúc\" có sức mạnh gì mà khiến hàng chục ngàn người Việt Nam mê muội thực hành những lý thuyết phản khoa học bất chấp sự ngăn cản của gia đình và các cơ quan chức năng?",
            "mainImg": "/images/articles/article-7.png",
            "content": "Chị An có em gái phải chạy thận nhân tạo 3 lần/tuần. Trong giai đoạn bệnh tật đau đớn, em gái chị được giới thiệu đến với NLG và đã học hết lớp 3. Do chứng kiến quá nhiều bệnh nhân ca tụng, lên sân khấu phát biểu cảm nghĩ nên em gái chị An hoàn toàn tin tưởng ông Phúc và sự màu nhiệm của bộ môn này. Ông Phúc hứa sẽ hồi phục 2 quả thận cho cô và hứa hẹn giúp cô sinh con bình thường. \n Chị An cũng bị gia đình “ép” học và học đến lớp 3. “Ông ta rất khôn ngoan gom góp các kiến thức từ các nhà tâm linh trên thế giới để lấy làm kiến thức của riêng mình và hướng dẫn người ta chữa bệnh nhờ biết yêu thương đúng cách - 5 yếu tố tình thương. Nhưng đến lớp 3 thì ông ta bắt đầu dạy về tâm linh, lồng ghép những tư tưởng lạ. Ông ta nói quá nhiều về bùa ngải theo cách tiêu cực và đưa con người vào những nỗi sợ âm thầm. Nếu ai từng gây ra lỗi lầm hoặc là người mê tín sẽ thấy thích thú và sợ hãi”. \n ",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Việt Nam chọn cách đi 'thông minh hoá' bằng dữ liệu mở và trí tuệ nhân tạo",
            "abstract": "Đó là khẳng định của Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng khi bàn về vai trò của dữ liệu mở và trí tuệ nhân tạo trong xu thế phát triển hiện nay của Việt Nam và thế giới.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Ứng dụng trí tuệ nhân tạo hỗ trợ doanh nghiệp phát hiện hóa đơn rủi ro",
            "abstract": "Bkav vừa ra mắt phần mềm Quản lý hóa đơn eQLHD, có khả năng phát hiện sai sót và cảnh báo cho kế toán viên những rủi ro trên hóa đơn, nhờ ứng dụng công nghệ trí tuệ nhân tạo.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Tiêm kích \"chim ưng sát thủ\" Ukraine sắp nhận có những công nghệ tối tân gì?",
            "abstract": "Ukraine được cho là sắp nhận tiêm kích F-16 từ đồng minh. Điều nhiều người quan tâm là những công nghệ tối tân gì sẽ có trên mẫu F-16 được chuyển giao cho Ukraine.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 2,
            "authorId": 1
        },
        {
            "title": "Việt Nam chọn cách đi 'thông minh hoá' bằng dữ liệu mở và trí tuệ nhân tạo",
            "abstract": "Đó là khẳng định của Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng khi bàn về vai trò của dữ liệu mở và trí tuệ nhân tạo trong xu thế phát triển hiện nay của Việt Nam và thế giới.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Ứng dụng trí tuệ nhân tạo hỗ trợ doanh nghiệp phát hiện hóa đơn rủi ro",
            "abstract": "Bkav vừa ra mắt phần mềm Quản lý hóa đơn eQLHD, có khả năng phát hiện sai sót và cảnh báo cho kế toán viên những rủi ro trên hóa đơn, nhờ ứng dụng công nghệ trí tuệ nhân tạo.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Tiêm kích \"chim ưng sát thủ\" Ukraine sắp nhận có những công nghệ tối tân gì?",
            "abstract": "Ukraine được cho là sắp nhận tiêm kích F-16 từ đồng minh. Điều nhiều người quan tâm là những công nghệ tối tân gì sẽ có trên mẫu F-16 được chuyển giao cho Ukraine.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Việt Nam chọn cách đi 'thông minh hoá' bằng dữ liệu mở và trí tuệ nhân tạo",
            "abstract": "Đó là khẳng định của Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng khi bàn về vai trò của dữ liệu mở và trí tuệ nhân tạo trong xu thế phát triển hiện nay của Việt Nam và thế giới.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 4,
            "authorId": 4
        },
        {
            "title": "Ứng dụng trí tuệ nhân tạo hỗ trợ doanh nghiệp phát hiện hóa đơn rủi ro",
            "abstract": "Bkav vừa ra mắt phần mềm Quản lý hóa đơn eQLHD, có khả năng phát hiện sai sót và cảnh báo cho kế toán viên những rủi ro trên hóa đơn, nhờ ứng dụng công nghệ trí tuệ nhân tạo.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Tiêm kích \"chim ưng sát thủ\" Ukraine sắp nhận có những công nghệ tối tân gì?",
            "abstract": "Ukraine được cho là sắp nhận tiêm kích F-16 từ đồng minh. Điều nhiều người quan tâm là những công nghệ tối tân gì sẽ có trên mẫu F-16 được chuyển giao cho Ukraine.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Việt Nam chọn cách đi 'thông minh hoá' bằng dữ liệu mở và trí tuệ nhân tạo",
            "abstract": "Đó là khẳng định của Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng khi bàn về vai trò của dữ liệu mở và trí tuệ nhân tạo trong xu thế phát triển hiện nay của Việt Nam và thế giới.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Ứng dụng trí tuệ nhân tạo hỗ trợ doanh nghiệp phát hiện hóa đơn rủi ro",
            "abstract": "Bkav vừa ra mắt phần mềm Quản lý hóa đơn eQLHD, có khả năng phát hiện sai sót và cảnh báo cho kế toán viên những rủi ro trên hóa đơn, nhờ ứng dụng công nghệ trí tuệ nhân tạo.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 2,
            "authorId": 4
        },
        {
            "title": "Tiêm kích \"chim ưng sát thủ\" Ukraine sắp nhận có những công nghệ tối tân gì?",
            "abstract": "Ukraine được cho là sắp nhận tiêm kích F-16 từ đồng minh. Điều nhiều người quan tâm là những công nghệ tối tân gì sẽ có trên mẫu F-16 được chuyển giao cho Ukraine.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 4,
            "authorId": 1
        },
        {
            "title": "Việt Nam chọn cách đi 'thông minh hoá' bằng dữ liệu mở và trí tuệ nhân tạo",
            "abstract": "Đó là khẳng định của Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng khi bàn về vai trò của dữ liệu mở và trí tuệ nhân tạo trong xu thế phát triển hiện nay của Việt Nam và thế giới.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 4,
            "authorId": 4
        },
        {
            "title": "Ứng dụng trí tuệ nhân tạo hỗ trợ doanh nghiệp phát hiện hóa đơn rủi ro",
            "abstract": "Bkav vừa ra mắt phần mềm Quản lý hóa đơn eQLHD, có khả năng phát hiện sai sót và cảnh báo cho kế toán viên những rủi ro trên hóa đơn, nhờ ứng dụng công nghệ trí tuệ nhân tạo.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 2,
            "authorId": 4
        },
        {
            "title": "Tiêm kích \"chim ưng sát thủ\" Ukraine sắp nhận có những công nghệ tối tân gì?",
            "abstract": "Ukraine được cho là sắp nhận tiêm kích F-16 từ đồng minh. Điều nhiều người quan tâm là những công nghệ tối tân gì sẽ có trên mẫu F-16 được chuyển giao cho Ukraine.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 2,
            "authorId": 1
        },
        {
            "title": "Việt Nam chọn cách đi 'thông minh hoá' bằng dữ liệu mở và trí tuệ nhân tạo",
            "abstract": "Đó là khẳng định của Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng khi bàn về vai trò của dữ liệu mở và trí tuệ nhân tạo trong xu thế phát triển hiện nay của Việt Nam và thế giới.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Ứng dụng trí tuệ nhân tạo hỗ trợ doanh nghiệp phát hiện hóa đơn rủi ro",
            "abstract": "Bkav vừa ra mắt phần mềm Quản lý hóa đơn eQLHD, có khả năng phát hiện sai sót và cảnh báo cho kế toán viên những rủi ro trên hóa đơn, nhờ ứng dụng công nghệ trí tuệ nhân tạo.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Tiêm kích \"chim ưng sát thủ\" Ukraine sắp nhận có những công nghệ tối tân gì?",
            "abstract": "Ukraine được cho là sắp nhận tiêm kích F-16 từ đồng minh. Điều nhiều người quan tâm là những công nghệ tối tân gì sẽ có trên mẫu F-16 được chuyển giao cho Ukraine.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Việt Nam chọn cách đi 'thông minh hoá' bằng dữ liệu mở và trí tuệ nhân tạo",
            "abstract": "Đó là khẳng định của Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng khi bàn về vai trò của dữ liệu mở và trí tuệ nhân tạo trong xu thế phát triển hiện nay của Việt Nam và thế giới.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Ứng dụng trí tuệ nhân tạo hỗ trợ doanh nghiệp phát hiện hóa đơn rủi ro",
            "abstract": "Bkav vừa ra mắt phần mềm Quản lý hóa đơn eQLHD, có khả năng phát hiện sai sót và cảnh báo cho kế toán viên những rủi ro trên hóa đơn, nhờ ứng dụng công nghệ trí tuệ nhân tạo.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Tiêm kích \"chim ưng sát thủ\" Ukraine sắp nhận có những công nghệ tối tân gì?",
            "abstract": "Ukraine được cho là sắp nhận tiêm kích F-16 từ đồng minh. Điều nhiều người quan tâm là những công nghệ tối tân gì sẽ có trên mẫu F-16 được chuyển giao cho Ukraine.",
            "mainImg": "/images/articles/article-8.png",
            "content": "Ngày 8/6, tại TP Huế, Bộ TT&TT phối hợp với UBND tỉnh TT-Huế, Ngân hàng Thế giới tổ chức Hội nghị quốc tế về “Dữ liệu mở và trí tuệ nhân tạo - Động lực tăng trưởng kinh tế”. \n Theo ban tổ chức, Hội nghị lần này nhằm trao đổi, nhận định về vai trò của dữ liệu mở và xu thế phát triển trí tuệ nhân tạo trên thế giới, từ đó xác định các thách thức, đề ra hành động cụ thể để phát triển dữ liệu mở, đẩy nhanh phát triển, ứng dụng trí tuệ nhân tạo nhằm tạo động lực tăng trưởng kinh tế. \n Phát biểu khai mạc qua hình thức trực tuyến, Thứ trưởng Bộ TT&TT Nguyễn Huy Dũng cho biết, năm 2023 là năm Dữ liệu số quốc gia ở Việt Nam.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Những người dễ bị cao huyết áp, cách đơn giản giúp giảm chỉ số",
            "abstract": "Chuyên gia tim mạch cảnh báo những người bị huyết áp cao nên tránh ăn quá nhiều muối.",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Tâm sự của 'người đàn ông' mang bầu",
            "abstract": "ANH - Nhà văn 27 tuổi sốc khi mang bầu, không biết chia sẻ như thế nào với người bạn đời.",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "9 đặc điểm của người sống thọ trong mắt bác sĩ",
            "abstract": "Cơ thể của những người sống lâu thường có một số đặc điểm chung. Vậy đâu là đặc điểm trường sinh trong mắt các bác sĩ?",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Những người dễ bị cao huyết áp, cách đơn giản giúp giảm chỉ số",
            "abstract": "Chuyên gia tim mạch cảnh báo những người bị huyết áp cao nên tránh ăn quá nhiều muối.",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Tâm sự của 'người đàn ông' mang bầu",
            "abstract": "ANH - Nhà văn 27 tuổi sốc khi mang bầu, không biết chia sẻ như thế nào với người bạn đời.",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "9 đặc điểm của người sống thọ trong mắt bác sĩ",
            "abstract": "Cơ thể của những người sống lâu thường có một số đặc điểm chung. Vậy đâu là đặc điểm trường sinh trong mắt các bác sĩ?",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Những người dễ bị cao huyết áp, cách đơn giản giúp giảm chỉ số",
            "abstract": "Chuyên gia tim mạch cảnh báo những người bị huyết áp cao nên tránh ăn quá nhiều muối.",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Tâm sự của 'người đàn ông' mang bầu",
            "abstract": "ANH - Nhà văn 27 tuổi sốc khi mang bầu, không biết chia sẻ như thế nào với người bạn đời.",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "9 đặc điểm của người sống thọ trong mắt bác sĩ",
            "abstract": "Cơ thể của những người sống lâu thường có một số đặc điểm chung. Vậy đâu là đặc điểm trường sinh trong mắt các bác sĩ?",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Những người dễ bị cao huyết áp, cách đơn giản giúp giảm chỉ số",
            "abstract": "Chuyên gia tim mạch cảnh báo những người bị huyết áp cao nên tránh ăn quá nhiều muối.",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Tâm sự của 'người đàn ông' mang bầu",
            "abstract": "ANH - Nhà văn 27 tuổi sốc khi mang bầu, không biết chia sẻ như thế nào với người bạn đời.",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "9 đặc điểm của người sống thọ trong mắt bác sĩ",
            "abstract": "Cơ thể của những người sống lâu thường có một số đặc điểm chung. Vậy đâu là đặc điểm trường sinh trong mắt các bác sĩ?",
            "mainImg": "/images/articles/article-9.png",
            "content": "Giáo sư Gerald Carr-White, chuyên gia tư vấn tim mạch tại Bệnh viện London Bridge (Anh), chia sẻ với Express về những loại thực phẩm mọi người nên tránh nếu bị huyết áp cao.\n Huyết áp dưới 120/80 mmHg được coi là mức bình thường. Khi huyết áp luôn ở mức từ 140/90 mmHg trở lên thì được xem là tình trạng tăng huyết áp. \n Đa phần các triệu chứng của huyết áp cao đều mờ nhạt ngay cả khi bệnh đã tiến triển khá nghiêm trọng. Một số ít bệnh nhân có biểu hiện thoáng qua như đau đầu, khó thở, hiếm hơn là chảy máu cam. \n Ngoài ra, các yếu tố dễ làm tăng nguy cơ bao gồm thừa cân béo phì, lười vận động, ăn uống không lành mạnh, ăn quá nhiều muối, uống rượu bia vô độ, hút thuốc lá, căng thẳng kéo dài. ",
            "views": 20,
            "type": 3,
            "authorId": 4
        },
        {
            "title": "Bật mí về nữ nghệ sĩ bán 1 ca khúc và sở hữu Đông Hùng ‘cả đời'",
            "abstract": "'Đồng nghiệp thường nói rằng anh đang có một 'cục vàng' bên cạnh. Anh vui lắm vì cuối cùng cũng được mang em ra khoe và thấy mọi người yêu em nhiều thế nào'' - ca sĩ Đông Hùng dành những lời yêu thương cho vợ.",
            "mainImg": "/images/articles/article-10.png",
            "content": "Minh Anh - nữ nghệ sĩ từng theo học trường Cao đẳng Nghệ thuật Hà Nội đến với ca sĩ Đông Hùng vô tư đến nỗi gần như cả showbiz biết chuyện anh và gia đình phải đối diện với những ngày khó khăn khi người thân vướng nợ nần thì cô lại ‘không hề hay biết’. Chỉ đến khi đã nhận lời yêu, một người bạn thân kể lại cô mới tá hoả đặt câu hỏi và nhận được câu trả lời: \"Đó là câu chuyện buồn và anh luôn muốn giấu\".",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "HLV Rap Việt tranh giành thí sinh rap trên nền nhạc 'Giấc mơ trưa'",
            "abstract": "Bộ 6 quyền lực gồm: Suboi, JustaTee, Karik, BigDaddy, Bray, Andree và Thái VG liên tục tranh giành thí sinh ở tập 3 Rap Việt mùa 3.",
            "mainImg": "/images/articles/article-11.png",
            "content": "Mikelodic trình diễn bản rap Về quê trên nền nhạc Giấc mơ trưa, mang âm sắc mới, đậm chất dân gian nhưng không kém phần vui nhộn, trong sáng. Trong lyric, thí sinh gợi nhắc nhiều kỷ niệm tuổi thơ như tắm mưa, tắm sông, thả diều, tập tầm vông... \n Mikelodic chinh phục được cả 4 HLV và chiếm 89% bình chọn từ khán giả. BigDaddy trân trọng thí sinh vì đem được văn hóa dân gian vào bài nhạc và nghe rất Tây. Đó là điều khó khăn. Suboi nhận xét đây là mảnh ghép chương trình đang cần, sự chân chất và con người thật của Mikelodic đã tỏa sáng trên sân khấu. \n Trong tập 3, bản rap Hãy yêu tôi bây giờ của HURRYKNG cũng gây ấn tượng, có màu sắc âm nhạc riêng với thông điệp ý nghĩa từ ca khúc gốc Nếu có yêu tôi. Phần trình diễn được 3 HLV là BigDaddy, Andree, B Ray yêu thích. Cuối cùng, HURRYKNG về đội BigDaddy. ",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "'Rap Việt' mùa 3 lên sóng",
            "abstract": "Sau thời gian chờ đợi, Rap Việt mùa 3 (2023) vừa chính thức công bố ngày lên sóng: 27.5.",
            "mainImg": "/images/articles/article-11.png",
            "content": "4 ngày trước khi lên sóng, người hâm mộ của Rap Việt mùa 3 đã \"nắm\" được khá đầy đủ thông tin về các \"ban - bệ\" tham gia: chương trình được hỗ trợ bởi 5 nhà sản xuất âm nhạc, ban giám khảo đã được công bố: Suboi, Karik, JustaTee, huấn luyện viên được thay mới toàn bộ và đã công bố 4 người: B Ray, BigDaddy, Andree Right Hand, Thái VG. \n Như vậy Rap Việt mùa 3 còn thiếu thông tin chính thức về MC. Trong khi thời gian qua, kể từ lúc Hari Won thay chồng nhận giải thưởng Đạo diễn xuất sắc cho phim Nhà bà Nữ tại lễ trao giải Liên hoan phim châu Á - Đà Nẵng và đã lỡ… tiết lộ rằng, Trấn Thành đang quay Rap Việt nên không thể nhận giải được. Nhưng, cho dù bà xã Trấn Thành không tiết lộ, có lẽ người hâm mộ Rap Việt cũng tin chắc rằng người tiếp tục dẫn show truyền hình thực tế dành cho rap/hip hop này không ai hợp hơn Trấn Thành.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Bật mí về nữ nghệ sĩ bán 1 ca khúc và sở hữu Đông Hùng ‘cả đời'",
            "abstract": "'Đồng nghiệp thường nói rằng anh đang có một 'cục vàng' bên cạnh. Anh vui lắm vì cuối cùng cũng được mang em ra khoe và thấy mọi người yêu em nhiều thế nào'' - ca sĩ Đông Hùng dành những lời yêu thương cho vợ.",
            "mainImg": "/images/articles/article-10.png",
            "content": "Minh Anh - nữ nghệ sĩ từng theo học trường Cao đẳng Nghệ thuật Hà Nội đến với ca sĩ Đông Hùng vô tư đến nỗi gần như cả showbiz biết chuyện anh và gia đình phải đối diện với những ngày khó khăn khi người thân vướng nợ nần thì cô lại ‘không hề hay biết’. Chỉ đến khi đã nhận lời yêu, một người bạn thân kể lại cô mới tá hoả đặt câu hỏi và nhận được câu trả lời: \"Đó là câu chuyện buồn và anh luôn muốn giấu\".",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "HLV Rap Việt tranh giành thí sinh rap trên nền nhạc 'Giấc mơ trưa'",
            "abstract": "Bộ 6 quyền lực gồm: Suboi, JustaTee, Karik, BigDaddy, Bray, Andree và Thái VG liên tục tranh giành thí sinh ở tập 3 Rap Việt mùa 3.",
            "mainImg": "/images/articles/article-11.png",
            "content": "Mikelodic trình diễn bản rap Về quê trên nền nhạc Giấc mơ trưa, mang âm sắc mới, đậm chất dân gian nhưng không kém phần vui nhộn, trong sáng. Trong lyric, thí sinh gợi nhắc nhiều kỷ niệm tuổi thơ như tắm mưa, tắm sông, thả diều, tập tầm vông... \n Mikelodic chinh phục được cả 4 HLV và chiếm 89% bình chọn từ khán giả. BigDaddy trân trọng thí sinh vì đem được văn hóa dân gian vào bài nhạc và nghe rất Tây. Đó là điều khó khăn. Suboi nhận xét đây là mảnh ghép chương trình đang cần, sự chân chất và con người thật của Mikelodic đã tỏa sáng trên sân khấu. \n Trong tập 3, bản rap Hãy yêu tôi bây giờ của HURRYKNG cũng gây ấn tượng, có màu sắc âm nhạc riêng với thông điệp ý nghĩa từ ca khúc gốc Nếu có yêu tôi. Phần trình diễn được 3 HLV là BigDaddy, Andree, B Ray yêu thích. Cuối cùng, HURRYKNG về đội BigDaddy. ",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "'Rap Việt' mùa 3 lên sóng",
            "abstract": "Sau thời gian chờ đợi, Rap Việt mùa 3 (2023) vừa chính thức công bố ngày lên sóng: 27.5.",
            "mainImg": "/images/articles/article-11.png",
            "content": "4 ngày trước khi lên sóng, người hâm mộ của Rap Việt mùa 3 đã \"nắm\" được khá đầy đủ thông tin về các \"ban - bệ\" tham gia: chương trình được hỗ trợ bởi 5 nhà sản xuất âm nhạc, ban giám khảo đã được công bố: Suboi, Karik, JustaTee, huấn luyện viên được thay mới toàn bộ và đã công bố 4 người: B Ray, BigDaddy, Andree Right Hand, Thái VG. \n Như vậy Rap Việt mùa 3 còn thiếu thông tin chính thức về MC. Trong khi thời gian qua, kể từ lúc Hari Won thay chồng nhận giải thưởng Đạo diễn xuất sắc cho phim Nhà bà Nữ tại lễ trao giải Liên hoan phim châu Á - Đà Nẵng và đã lỡ… tiết lộ rằng, Trấn Thành đang quay Rap Việt nên không thể nhận giải được. Nhưng, cho dù bà xã Trấn Thành không tiết lộ, có lẽ người hâm mộ Rap Việt cũng tin chắc rằng người tiếp tục dẫn show truyền hình thực tế dành cho rap/hip hop này không ai hợp hơn Trấn Thành.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Bật mí về nữ nghệ sĩ bán 1 ca khúc và sở hữu Đông Hùng ‘cả đời'",
            "abstract": "'Đồng nghiệp thường nói rằng anh đang có một 'cục vàng' bên cạnh. Anh vui lắm vì cuối cùng cũng được mang em ra khoe và thấy mọi người yêu em nhiều thế nào'' - ca sĩ Đông Hùng dành những lời yêu thương cho vợ.",
            "mainImg": "/images/articles/article-10.png",
            "content": "Minh Anh - nữ nghệ sĩ từng theo học trường Cao đẳng Nghệ thuật Hà Nội đến với ca sĩ Đông Hùng vô tư đến nỗi gần như cả showbiz biết chuyện anh và gia đình phải đối diện với những ngày khó khăn khi người thân vướng nợ nần thì cô lại ‘không hề hay biết’. Chỉ đến khi đã nhận lời yêu, một người bạn thân kể lại cô mới tá hoả đặt câu hỏi và nhận được câu trả lời: \"Đó là câu chuyện buồn và anh luôn muốn giấu\".",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "HLV Rap Việt tranh giành thí sinh rap trên nền nhạc 'Giấc mơ trưa'",
            "abstract": "Bộ 6 quyền lực gồm: Suboi, JustaTee, Karik, BigDaddy, Bray, Andree và Thái VG liên tục tranh giành thí sinh ở tập 3 Rap Việt mùa 3.",
            "mainImg": "/images/articles/article-11.png",
            "content": "Mikelodic trình diễn bản rap Về quê trên nền nhạc Giấc mơ trưa, mang âm sắc mới, đậm chất dân gian nhưng không kém phần vui nhộn, trong sáng. Trong lyric, thí sinh gợi nhắc nhiều kỷ niệm tuổi thơ như tắm mưa, tắm sông, thả diều, tập tầm vông... \n Mikelodic chinh phục được cả 4 HLV và chiếm 89% bình chọn từ khán giả. BigDaddy trân trọng thí sinh vì đem được văn hóa dân gian vào bài nhạc và nghe rất Tây. Đó là điều khó khăn. Suboi nhận xét đây là mảnh ghép chương trình đang cần, sự chân chất và con người thật của Mikelodic đã tỏa sáng trên sân khấu. \n Trong tập 3, bản rap Hãy yêu tôi bây giờ của HURRYKNG cũng gây ấn tượng, có màu sắc âm nhạc riêng với thông điệp ý nghĩa từ ca khúc gốc Nếu có yêu tôi. Phần trình diễn được 3 HLV là BigDaddy, Andree, B Ray yêu thích. Cuối cùng, HURRYKNG về đội BigDaddy. ",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "'Rap Việt' mùa 3 lên sóng",
            "abstract": "Sau thời gian chờ đợi, Rap Việt mùa 3 (2023) vừa chính thức công bố ngày lên sóng: 27.5.",
            "mainImg": "/images/articles/article-11.png",
            "content": "4 ngày trước khi lên sóng, người hâm mộ của Rap Việt mùa 3 đã \"nắm\" được khá đầy đủ thông tin về các \"ban - bệ\" tham gia: chương trình được hỗ trợ bởi 5 nhà sản xuất âm nhạc, ban giám khảo đã được công bố: Suboi, Karik, JustaTee, huấn luyện viên được thay mới toàn bộ và đã công bố 4 người: B Ray, BigDaddy, Andree Right Hand, Thái VG. \n Như vậy Rap Việt mùa 3 còn thiếu thông tin chính thức về MC. Trong khi thời gian qua, kể từ lúc Hari Won thay chồng nhận giải thưởng Đạo diễn xuất sắc cho phim Nhà bà Nữ tại lễ trao giải Liên hoan phim châu Á - Đà Nẵng và đã lỡ… tiết lộ rằng, Trấn Thành đang quay Rap Việt nên không thể nhận giải được. Nhưng, cho dù bà xã Trấn Thành không tiết lộ, có lẽ người hâm mộ Rap Việt cũng tin chắc rằng người tiếp tục dẫn show truyền hình thực tế dành cho rap/hip hop này không ai hợp hơn Trấn Thành.",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "Bật mí về nữ nghệ sĩ bán 1 ca khúc và sở hữu Đông Hùng ‘cả đời'",
            "abstract": "'Đồng nghiệp thường nói rằng anh đang có một 'cục vàng' bên cạnh. Anh vui lắm vì cuối cùng cũng được mang em ra khoe và thấy mọi người yêu em nhiều thế nào'' - ca sĩ Đông Hùng dành những lời yêu thương cho vợ.",
            "mainImg": "/images/articles/article-10.png",
            "content": "Minh Anh - nữ nghệ sĩ từng theo học trường Cao đẳng Nghệ thuật Hà Nội đến với ca sĩ Đông Hùng vô tư đến nỗi gần như cả showbiz biết chuyện anh và gia đình phải đối diện với những ngày khó khăn khi người thân vướng nợ nần thì cô lại ‘không hề hay biết’. Chỉ đến khi đã nhận lời yêu, một người bạn thân kể lại cô mới tá hoả đặt câu hỏi và nhận được câu trả lời: \"Đó là câu chuyện buồn và anh luôn muốn giấu\".",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "HLV Rap Việt tranh giành thí sinh rap trên nền nhạc 'Giấc mơ trưa'",
            "abstract": "Bộ 6 quyền lực gồm: Suboi, JustaTee, Karik, BigDaddy, Bray, Andree và Thái VG liên tục tranh giành thí sinh ở tập 3 Rap Việt mùa 3.",
            "mainImg": "/images/articles/article-11.png",
            "content": "Mikelodic trình diễn bản rap Về quê trên nền nhạc Giấc mơ trưa, mang âm sắc mới, đậm chất dân gian nhưng không kém phần vui nhộn, trong sáng. Trong lyric, thí sinh gợi nhắc nhiều kỷ niệm tuổi thơ như tắm mưa, tắm sông, thả diều, tập tầm vông... \n Mikelodic chinh phục được cả 4 HLV và chiếm 89% bình chọn từ khán giả. BigDaddy trân trọng thí sinh vì đem được văn hóa dân gian vào bài nhạc và nghe rất Tây. Đó là điều khó khăn. Suboi nhận xét đây là mảnh ghép chương trình đang cần, sự chân chất và con người thật của Mikelodic đã tỏa sáng trên sân khấu. \n Trong tập 3, bản rap Hãy yêu tôi bây giờ của HURRYKNG cũng gây ấn tượng, có màu sắc âm nhạc riêng với thông điệp ý nghĩa từ ca khúc gốc Nếu có yêu tôi. Phần trình diễn được 3 HLV là BigDaddy, Andree, B Ray yêu thích. Cuối cùng, HURRYKNG về đội BigDaddy. ",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "'Rap Việt' mùa 3 lên sóng",
            "abstract": "Sau thời gian chờ đợi, Rap Việt mùa 3 (2023) vừa chính thức công bố ngày lên sóng: 27.5.",
            "mainImg": "/images/articles/article-11.png",
            "content": "4 ngày trước khi lên sóng, người hâm mộ của Rap Việt mùa 3 đã \"nắm\" được khá đầy đủ thông tin về các \"ban - bệ\" tham gia: chương trình được hỗ trợ bởi 5 nhà sản xuất âm nhạc, ban giám khảo đã được công bố: Suboi, Karik, JustaTee, huấn luyện viên được thay mới toàn bộ và đã công bố 4 người: B Ray, BigDaddy, Andree Right Hand, Thái VG. \n Như vậy Rap Việt mùa 3 còn thiếu thông tin chính thức về MC. Trong khi thời gian qua, kể từ lúc Hari Won thay chồng nhận giải thưởng Đạo diễn xuất sắc cho phim Nhà bà Nữ tại lễ trao giải Liên hoan phim châu Á - Đà Nẵng và đã lỡ… tiết lộ rằng, Trấn Thành đang quay Rap Việt nên không thể nhận giải được. Nhưng, cho dù bà xã Trấn Thành không tiết lộ, có lẽ người hâm mộ Rap Việt cũng tin chắc rằng người tiếp tục dẫn show truyền hình thực tế dành cho rap/hip hop này không ai hợp hơn Trấn Thành.",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "Bật mí về nữ nghệ sĩ bán 1 ca khúc và sở hữu Đông Hùng ‘cả đời'",
            "abstract": "'Đồng nghiệp thường nói rằng anh đang có một 'cục vàng' bên cạnh. Anh vui lắm vì cuối cùng cũng được mang em ra khoe và thấy mọi người yêu em nhiều thế nào'' - ca sĩ Đông Hùng dành những lời yêu thương cho vợ.",
            "mainImg": "/images/articles/article-10.png",
            "content": "Minh Anh - nữ nghệ sĩ từng theo học trường Cao đẳng Nghệ thuật Hà Nội đến với ca sĩ Đông Hùng vô tư đến nỗi gần như cả showbiz biết chuyện anh và gia đình phải đối diện với những ngày khó khăn khi người thân vướng nợ nần thì cô lại ‘không hề hay biết’. Chỉ đến khi đã nhận lời yêu, một người bạn thân kể lại cô mới tá hoả đặt câu hỏi và nhận được câu trả lời: \"Đó là câu chuyện buồn và anh luôn muốn giấu\".",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "HLV Rap Việt tranh giành thí sinh rap trên nền nhạc 'Giấc mơ trưa'",
            "abstract": "Bộ 6 quyền lực gồm: Suboi, JustaTee, Karik, BigDaddy, Bray, Andree và Thái VG liên tục tranh giành thí sinh ở tập 3 Rap Việt mùa 3.",
            "mainImg": "/images/articles/article-11.png",
            "content": "Mikelodic trình diễn bản rap Về quê trên nền nhạc Giấc mơ trưa, mang âm sắc mới, đậm chất dân gian nhưng không kém phần vui nhộn, trong sáng. Trong lyric, thí sinh gợi nhắc nhiều kỷ niệm tuổi thơ như tắm mưa, tắm sông, thả diều, tập tầm vông... \n Mikelodic chinh phục được cả 4 HLV và chiếm 89% bình chọn từ khán giả. BigDaddy trân trọng thí sinh vì đem được văn hóa dân gian vào bài nhạc và nghe rất Tây. Đó là điều khó khăn. Suboi nhận xét đây là mảnh ghép chương trình đang cần, sự chân chất và con người thật của Mikelodic đã tỏa sáng trên sân khấu. \n Trong tập 3, bản rap Hãy yêu tôi bây giờ của HURRYKNG cũng gây ấn tượng, có màu sắc âm nhạc riêng với thông điệp ý nghĩa từ ca khúc gốc Nếu có yêu tôi. Phần trình diễn được 3 HLV là BigDaddy, Andree, B Ray yêu thích. Cuối cùng, HURRYKNG về đội BigDaddy. ",
            "views": 20,
            "type": 2,
            "authorId": 2
        },
        {
            "title": "'Rap Việt' mùa 3 lên sóng",
            "abstract": "Sau thời gian chờ đợi, Rap Việt mùa 3 (2023) vừa chính thức công bố ngày lên sóng: 27.5.",
            "mainImg": "/images/articles/article-11.png",
            "content": "4 ngày trước khi lên sóng, người hâm mộ của Rap Việt mùa 3 đã \"nắm\" được khá đầy đủ thông tin về các \"ban - bệ\" tham gia: chương trình được hỗ trợ bởi 5 nhà sản xuất âm nhạc, ban giám khảo đã được công bố: Suboi, Karik, JustaTee, huấn luyện viên được thay mới toàn bộ và đã công bố 4 người: B Ray, BigDaddy, Andree Right Hand, Thái VG. \n Như vậy Rap Việt mùa 3 còn thiếu thông tin chính thức về MC. Trong khi thời gian qua, kể từ lúc Hari Won thay chồng nhận giải thưởng Đạo diễn xuất sắc cho phim Nhà bà Nữ tại lễ trao giải Liên hoan phim châu Á - Đà Nẵng và đã lỡ… tiết lộ rằng, Trấn Thành đang quay Rap Việt nên không thể nhận giải được. Nhưng, cho dù bà xã Trấn Thành không tiết lộ, có lẽ người hâm mộ Rap Việt cũng tin chắc rằng người tiếp tục dẫn show truyền hình thực tế dành cho rap/hip hop này không ai hợp hơn Trấn Thành.",
            "views": 20,
            "type": 3,
            "authorId": 3
        },
        {
            "title": "Bật mí về nữ nghệ sĩ bán 1 ca khúc và sở hữu Đông Hùng ‘cả đời'",
            "abstract": "'Đồng nghiệp thường nói rằng anh đang có một 'cục vàng' bên cạnh. Anh vui lắm vì cuối cùng cũng được mang em ra khoe và thấy mọi người yêu em nhiều thế nào'' - ca sĩ Đông Hùng dành những lời yêu thương cho vợ.",
            "mainImg": "/images/articles/article-10.png",
            "content": "Minh Anh - nữ nghệ sĩ từng theo học trường Cao đẳng Nghệ thuật Hà Nội đến với ca sĩ Đông Hùng vô tư đến nỗi gần như cả showbiz biết chuyện anh và gia đình phải đối diện với những ngày khó khăn khi người thân vướng nợ nần thì cô lại ‘không hề hay biết’. Chỉ đến khi đã nhận lời yêu, một người bạn thân kể lại cô mới tá hoả đặt câu hỏi và nhận được câu trả lời: \"Đó là câu chuyện buồn và anh luôn muốn giấu\".",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "HLV Rap Việt tranh giành thí sinh rap trên nền nhạc 'Giấc mơ trưa'",
            "abstract": "Bộ 6 quyền lực gồm: Suboi, JustaTee, Karik, BigDaddy, Bray, Andree và Thái VG liên tục tranh giành thí sinh ở tập 3 Rap Việt mùa 3.",
            "mainImg": "/images/articles/article-11.png",
            "content": "Mikelodic trình diễn bản rap Về quê trên nền nhạc Giấc mơ trưa, mang âm sắc mới, đậm chất dân gian nhưng không kém phần vui nhộn, trong sáng. Trong lyric, thí sinh gợi nhắc nhiều kỷ niệm tuổi thơ như tắm mưa, tắm sông, thả diều, tập tầm vông... \n Mikelodic chinh phục được cả 4 HLV và chiếm 89% bình chọn từ khán giả. BigDaddy trân trọng thí sinh vì đem được văn hóa dân gian vào bài nhạc và nghe rất Tây. Đó là điều khó khăn. Suboi nhận xét đây là mảnh ghép chương trình đang cần, sự chân chất và con người thật của Mikelodic đã tỏa sáng trên sân khấu. \n Trong tập 3, bản rap Hãy yêu tôi bây giờ của HURRYKNG cũng gây ấn tượng, có màu sắc âm nhạc riêng với thông điệp ý nghĩa từ ca khúc gốc Nếu có yêu tôi. Phần trình diễn được 3 HLV là BigDaddy, Andree, B Ray yêu thích. Cuối cùng, HURRYKNG về đội BigDaddy. ",
            "views": 20,
            "type": 4,
            "authorId": 4
        },
        {
            "title": "'Rap Việt' mùa 3 lên sóng",
            "abstract": "Sau thời gian chờ đợi, Rap Việt mùa 3 (2023) vừa chính thức công bố ngày lên sóng: 27.5.",
            "mainImg": "/images/articles/article-11.png",
            "content": "4 ngày trước khi lên sóng, người hâm mộ của Rap Việt mùa 3 đã \"nắm\" được khá đầy đủ thông tin về các \"ban - bệ\" tham gia: chương trình được hỗ trợ bởi 5 nhà sản xuất âm nhạc, ban giám khảo đã được công bố: Suboi, Karik, JustaTee, huấn luyện viên được thay mới toàn bộ và đã công bố 4 người: B Ray, BigDaddy, Andree Right Hand, Thái VG. \n Như vậy Rap Việt mùa 3 còn thiếu thông tin chính thức về MC. Trong khi thời gian qua, kể từ lúc Hari Won thay chồng nhận giải thưởng Đạo diễn xuất sắc cho phim Nhà bà Nữ tại lễ trao giải Liên hoan phim châu Á - Đà Nẵng và đã lỡ… tiết lộ rằng, Trấn Thành đang quay Rap Việt nên không thể nhận giải được. Nhưng, cho dù bà xã Trấn Thành không tiết lộ, có lẽ người hâm mộ Rap Việt cũng tin chắc rằng người tiếp tục dẫn show truyền hình thực tế dành cho rap/hip hop này không ai hợp hơn Trấn Thành.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
        {
            "title": "Bật mí về nữ nghệ sĩ bán 1 ca khúc và sở hữu Đông Hùng ‘cả đời'",
            "abstract": "'Đồng nghiệp thường nói rằng anh đang có một 'cục vàng' bên cạnh. Anh vui lắm vì cuối cùng cũng được mang em ra khoe và thấy mọi người yêu em nhiều thế nào'' - ca sĩ Đông Hùng dành những lời yêu thương cho vợ.",
            "mainImg": "/images/articles/article-10.png",
            "content": "Minh Anh - nữ nghệ sĩ từng theo học trường Cao đẳng Nghệ thuật Hà Nội đến với ca sĩ Đông Hùng vô tư đến nỗi gần như cả showbiz biết chuyện anh và gia đình phải đối diện với những ngày khó khăn khi người thân vướng nợ nần thì cô lại ‘không hề hay biết’. Chỉ đến khi đã nhận lời yêu, một người bạn thân kể lại cô mới tá hoả đặt câu hỏi và nhận được câu trả lời: \"Đó là câu chuyện buồn và anh luôn muốn giấu\".",
            "views": 20,
            "type": 3,
            "authorId": 5
        },
        {
            "title": "HLV Rap Việt tranh giành thí sinh rap trên nền nhạc 'Giấc mơ trưa'",
            "abstract": "Bộ 6 quyền lực gồm: Suboi, JustaTee, Karik, BigDaddy, Bray, Andree và Thái VG liên tục tranh giành thí sinh ở tập 3 Rap Việt mùa 3.",
            "mainImg": "/images/articles/article-11.png",
            "content": "Mikelodic trình diễn bản rap Về quê trên nền nhạc Giấc mơ trưa, mang âm sắc mới, đậm chất dân gian nhưng không kém phần vui nhộn, trong sáng. Trong lyric, thí sinh gợi nhắc nhiều kỷ niệm tuổi thơ như tắm mưa, tắm sông, thả diều, tập tầm vông... \n Mikelodic chinh phục được cả 4 HLV và chiếm 89% bình chọn từ khán giả. BigDaddy trân trọng thí sinh vì đem được văn hóa dân gian vào bài nhạc và nghe rất Tây. Đó là điều khó khăn. Suboi nhận xét đây là mảnh ghép chương trình đang cần, sự chân chất và con người thật của Mikelodic đã tỏa sáng trên sân khấu. \n Trong tập 3, bản rap Hãy yêu tôi bây giờ của HURRYKNG cũng gây ấn tượng, có màu sắc âm nhạc riêng với thông điệp ý nghĩa từ ca khúc gốc Nếu có yêu tôi. Phần trình diễn được 3 HLV là BigDaddy, Andree, B Ray yêu thích. Cuối cùng, HURRYKNG về đội BigDaddy. ",
            "views": 20,
            "type": 3,
            "authorId": 1
        },
        {
            "title": "'Rap Việt' mùa 3 lên sóng",
            "abstract": "Sau thời gian chờ đợi, Rap Việt mùa 3 (2023) vừa chính thức công bố ngày lên sóng: 27.5.",
            "mainImg": "/images/articles/article-11.png",
            "content": "4 ngày trước khi lên sóng, người hâm mộ của Rap Việt mùa 3 đã \"nắm\" được khá đầy đủ thông tin về các \"ban - bệ\" tham gia: chương trình được hỗ trợ bởi 5 nhà sản xuất âm nhạc, ban giám khảo đã được công bố: Suboi, Karik, JustaTee, huấn luyện viên được thay mới toàn bộ và đã công bố 4 người: B Ray, BigDaddy, Andree Right Hand, Thái VG. \n Như vậy Rap Việt mùa 3 còn thiếu thông tin chính thức về MC. Trong khi thời gian qua, kể từ lúc Hari Won thay chồng nhận giải thưởng Đạo diễn xuất sắc cho phim Nhà bà Nữ tại lễ trao giải Liên hoan phim châu Á - Đà Nẵng và đã lỡ… tiết lộ rằng, Trấn Thành đang quay Rap Việt nên không thể nhận giải được. Nhưng, cho dù bà xã Trấn Thành không tiết lộ, có lẽ người hâm mộ Rap Việt cũng tin chắc rằng người tiếp tục dẫn show truyền hình thực tế dành cho rap/hip hop này không ai hợp hơn Trấn Thành.",
            "views": 20,
            "type": 3,
            "authorId": 2
        },
    ]
      
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    });
    await queryInterface.bulkInsert('Articles', items, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Articles', null, {});
  }
};
