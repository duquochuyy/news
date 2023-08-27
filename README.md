# news
Web project - 20TN
<a href="https://ptudw-20tn-nhom04-ck.onrender.com/">Link Demo</a>

Các thành viên của nhóm
<ul>
  <li>
    Nguyễn Minh Hiền
  </li>
  <li>
    Nguyễn Kông Đại
  </li>
  <li>
    Dũ Quốc Huy
  </li>
</ul>

<h2>1. Mô tả dự án</h2>
<img src="https://github.com/duquochuyy/news/assets/95600732/801c62ec-d464-4016-878c-144bd4f71c5b">

Đây là project trong một Lập trình ứng dụng Web, một trang web đọc báo với đầy đủ các tính năng chính như:
<ul>
  <li>Xem thông tin tổng quan: bài báo nổi bật, mới nhất, xem nhiều nhất, một vài bài báo tiêu biểu của chuyên mục</li>
  <li>Xem thông tin chi tiết của bài báo, bình luận, tải bài viết</li>
  <li>Tìm kiếm bài báo theo dạng full text search/ tiêu để/ nội dung/ tóm tắt, hoặc theo chuyên mục, tag</li>
  <li>Phân quyền trang web: 
    <ul>
      <li>
        User: người dùng thông thường, có thể đăng nhập hoặc đăng kí mới tài khoản để tham gia bình luận
      </li>
      <li>
        Premium: người dùng đã mua tài khoản premium với giá 49.000/ tuần, có thể xem các bài báo premium, tải bài báo,...
      </li>
      <li>
        Writer: người viết báo, bài báo sẽ bao gồm các thông tin như: tiêu để, tóm tắt, nội dung chính, hình ảnh minh họa,.... Bài báo sau khi viết sẽ gửi đến Editor/ Admin duyệt
      </li>
      <li>
        Editor: người chịu trách nhiệm quản lí chuyên mục, bài báo theo chuyên mục đó, duyệt, chỉnh sửa, hẹn ngày public hoặc xóa nếu bài báo không phù hợp.
      </li>
      <li>
        Admin: toàn quyền quản lí trang web, chỉnh sửa chức năng những người khác (editor, writer, gia hạn premium) hoặc quản lí tất cả báo của trang web bao gồm luôn quyền của Editor
    </ul>
  </li>
</ul>
<br>
Tech stack: boostrap, nodejs, express-handlebars và một số thư viện, công cụ khác
<br>
Dữ liệu của dự án được lấy từ các trang báo và lưu trữ bằng <b>PostgreSQL</b>

<h2>2. Minh họa dự án</h2>
<h3>2.1 Database</h3>
<img src="https://github.com/duquochuyy/news/assets/95600732/3b48a524-904f-40f9-a035-31272f543430">

<h3>2.2 Xem thông tin tổng quan</h3>
<img src="https://github.com/duquochuyy/news/assets/95600732/c917ba2a-06b0-4543-811c-1120800f7890">
Đây là trang chủ của web, ngoài ra bạn còn có thể xem thêm các thông tin về danh sách bài báo mới nhất, xem nhiều nhất, một vài bào báo của từng chuyên mục,...

<h3>2.3 Xem chi tiết bài báo</h3>
<img src="https://github.com/duquochuyy/news/assets/95600732/41cebf1b-c198-48db-9498-15fb53de8dac">
Thông tin bài báo sẽ bao gồm: thông tin (tác giả, ngày đăng, chuyên mục), nội dung (tiêu đề, hình ảnh, tóm tắt, content), phần bình luận bài báo và nút <b>Tải bài viết</b> chỉ có premium mới thực hiện được

<h3>2.4 Tìm kiếm, lọc bài viết theo nhu cầu</h3>
<img width="660" alt="image" src="https://github.com/duquochuyy/news/assets/95600732/100bf68d-4147-4f63-a0e7-3a403ee7c55d">
Trang web hỗ trợ full text search để bạn tìm kiếm một cách dễ dàng, hoặc bạn có thể tìm theo tiêu đề/ nội dung/ tóm tắt của bài viết
<br>
<br>
<br>
<img src="https://github.com/duquochuyy/news/assets/95600732/85b06df8-4ed2-465a-9e2f-3a865d9a3ac8">
Bạn cũng có thể tìm kiếm bài viết theo chuyên mục, tag được cung cấp sẵn 

<h3>2.5 Đăng kí, đăng nhập</h3>
<img src="https://github.com/duquochuyy/news/assets/95600732/18ccde3c-f06a-4a22-a2cf-0b0af85b6828" width=45%>
<img src="https://github.com/duquochuyy/news/assets/95600732/1dc6776b-4c46-4383-b838-767ece4610ac" width=45%>

Trang web hỗ trợ đăng nhập theo Google/ Facebook/ Zalo hoặc đăng kí thủ công để có tài khoản

<h3>2.6 Tài khoản Premium</h3>
<img src="https://github.com/duquochuyy/news/assets/95600732/c6ec4428-ddde-4f65-b51b-f64113dffa90" width=45%>
<img src="https://github.com/duquochuyy/news/assets/95600732/dcfb9650-09d0-4923-94fd-b9c515dfdf5e" width=45%>
Bạn dễ dàng nâng cấp tài khoản lên Premium chỉ với 7.000đ/ 1 ngày. Với Premium bạn có thể xem các bài viết không giới hạn, tải bài viết nhanh chóng. Trang web sử dụng API của <b>Momo</b> để thực hiện thanh toán (hãy sử dụng tài khoản Momo test)

<h3>2.7 Phân quyền Writer</h3>
<img src="https://github.com/duquochuyy/news/assets/95600732/375c9faa-0da7-4ffd-b150-4fa9231d5ce5">
Trang quản lý bài viết dành cho Writer, một bài báo sẽ trải qua nhiều gia đoạn để có thể được đăng lên. Nếu bài báo vẫn ở trạng thái chờ duyệt hoặc bị từ chối, writer có thể vào chỉnh sửa
<br>
<br>
<br>
<br>

<img src="https://github.com/duquochuyy/news/assets/95600732/35980e99-8da0-4beb-a640-0c5f4148e59d">
Writer là người có quyền đăng một bài viết mới lên trang web, bài viết sau khi được viết cần phải qua kiểm duyệt, đặt lịch của Editor hoặc Admin.

<h3>2.8 Phân quyền Editor</h3>

Editor là người quản lí chuyên mục, có chức năng kiểm duyệt bài viết chuyên mục mình quản lí

<h3>2.9 Phân quyền Admin</h3>
<img src="https://github.com/duquochuyy/news/assets/95600732/33aa52d4-70b9-4f65-a4f7-fbee55cc05e3" width=45%>
<img src="https://github.com/duquochuyy/news/assets/95600732/5669fd27-577b-443c-96fa-d7384328bf47" width=45%>
<img src="https://github.com/duquochuyy/news/assets/95600732/fd62cfd0-7e63-4f41-8e80-09a2d89be7a1" width=45%>
<img src="https://github.com/duquochuyy/news/assets/95600732/23fec69f-7441-4283-9986-f6acf0ab1824" width=45%>


Admin có toàn quyền cho trang web. Chỉnh sửa, thêm, xóa nhãn hoặc chuyên mục. Phân quyền cho người dùng, writer, editor. Tùy ý gia hạn tài khoản premium của người dùng


<h2>3. Tổng kết</h2>
Trên đây là mô tả về dự án The News, một trang web đọc báo với nhiều tính năng nhóm đã xây dựng
<br>
Để có thể trải nghiệm tốt nhất, hãy vào <a href="https://ptudw-20tn-nhom04-ck.onrender.com/">Link Demo</a> để dùng thử.












