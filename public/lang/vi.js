DirtyCode.lang('vi', {
  ui: {
    title: `Code bẩn`,
    tagline: `Mọi thứ bạn cần cho phát triển phần mềm với agent thời hiện đại`,
    author: `Maksim Kuklikov`,
    coauthor: `với sự tham gia trực tiếp của các agent`,
    year: `2026`,
    prologueTitle: `Mở đầu`,
    step: `Bước`,
    wish: `Ước đi`,
    wishDesc: `Hãy nói với agent bạn muốn gì. Đừng nghĩ về kiến trúc, pattern hay tên biến — giờ đó là việc của agent. Mô tả mong muốn hoặc vấn đề bằng lời của chính bạn — đúng như nó hiện lên trong đầu bạn.`,
    check: `Tìm ra chỗ không ổn`,
    checkDesc: `Xem thử cái gì đã ra lò. Đừng đọc code — chẳng ai đọc nó nữa. Hãy dùng kết quả. Và hiểu xem cái gì không khớp với hình dung trong đầu bạn. Thiếu gì? Hỏng gì? Kể cả khi mọi thứ chạy được và đang ra tiền, lúc nào cũng có chỗ để sửa hoặc thêm. Hãy nói nó ra thành lời.`,
    example: `Ví dụ:`,
    loading: `Đang tạo trang tiếp theo…`,
    theme: `Giao diện`,
    q: ['“', '”']
  },
  prologue: [
    `Trời chạng vạng. Một thời đại đang khép lại — thời đại mà chúng ta viết code và đọc code. Chúng ta cãi nhau về định dạng và nguyên tắc phát triển. Chúng ta hy sinh tốc độ của thuật toán cho dễ đọc — và hy sinh sự dễ đọc cho tốc độ.`,
    `Mới cách đây không lâu, người ta còn đục lỗ trên bìa đục lỗ và băng giấy để truyền lệnh cho máy. Rồi bước đột phá đến — hợp ngữ: mã gợi nhớ thay cho những lỗ đục. Ngôn ngữ C mang đến vòng lặp và hàm, C++ và Java mang đến đối tượng, còn trong Python và JavaScript thì gần như chẳng cần nghĩ tới bộ nhớ. Mỗi bước lại nâng chúng ta lên một tầng — từ tín hiệu trong dây điện hướng tới ý tưởng.`,
    `Vậy đó: giờ “hợp ngữ” chính là Python. Và Go. Và C++, JavaScript, Rust, và mọi thứ bạn từng dùng để viết code. Tất cả đang trở thành mã máy của tầng tiếp theo — thứ được sinh ra tự động, và chỉ vài chuyên gia hiếm hoi mới ngó vào khi có gì đó thực sự hỏng nặng. Còn chúng ta leo lên thêm một tầng, gần hơn với cơ chế và máy móc. Tới nơi mà điều quan trọng không phải là <em>viết thế nào</em>, mà là <em>rốt cuộc điều gì cần xảy ra</em>.`,
    `Nhưng tầng này cũng đang qua đi — chỉ còn lại ý tưởng. Rồi sau đó, có lẽ, đến ý tưởng cũng chẳng cần nữa. Chúng ta sẽ tới một tương lai tươi sáng<span class="doubt" title="tươi sáng thật không?">?</span>, nơi mọi thứ đã được viết sẵn và mọi thứ đã được làm xong. Bạn mở laptop, nói với agent của mình: “bất tiện quá” — và nó trở nên tiện. Rồi bạn tiêu thụ nội dung. Nếu như, tất nhiên, đến lúc đó vẫn còn ai mở laptop.`,
    `Người ta đã thôi dùng thước loga như thế. Người ta đã thôi thuê những người mà công việc là tính toán như thế. Bàn vẽ kỹ thuật, bút kẻ mực, mực tàu và lưỡi dao lam dùng để cạo lỗi trên giấy can cũng biến mất như thế. Bìa đục lỗ. Nhân viên trực tổng đài. Thợ sắp chữ. Người ta phản đối, nói rằng chỉ con người mới làm tốt việc này. Rồi hóa ra chẳng ai thực sự cần đến chất lượng đó.`,
    `Cuốn sách này không dạy viết code. Không loại code nào cả. Nó không dạy cách làm cho phát triển với agent trở nên tin cậy và an toàn. Nó chẳng dạy gì hết. Phương pháp được mô tả trong đây là một trò đùa. Nhưng nếu làm theo nó, bạn sẽ thực sự có được thứ mình muốn. Không sớm thì muộn.`
  ],
  specials: {
    13: `Thầy bói trải bài tarot cho sản phẩm của chúng ta: ra lá Tòa Tháp và lá Cái Chết. Thiết kế lại cho hợp quẻ đi.`,
    14: `Đã thiết kế lại: toàn bộ màu đen và tím, trang chủ có một tòa tháp đang sụp. Người dùng sợ hết hồn, nhưng thầy bói chấm năm sao.`,
    41: `Tìm câu trả lời cho câu hỏi tối thượng về sự sống, vũ trụ và vạn vật.`,
    42: `Câu trả lời là 42. Bạn không thích nó. Có vẻ vấn đề không nằm ở câu trả lời, mà ở chỗ bạn chưa bao giờ đặt câu hỏi cho rõ.`,
    67: `Làm cho nó trend vào.`,
    68: `Giờ nút nào cũng ghi “six seven”, và giao diện nảy lên mỗi lần bấm. Học sinh thích mê, phụ huynh thì tắt tab.`,
    69: `Làm cho nó gợi cảm.`,
    70: `Agent hiểu theo kiểu của nó: các nút nháy mắt lả lơi, còn form thanh toán thì thì thầm “cứ từ từ”. Thời gian ở lại trang tăng, tỷ lệ chuyển đổi thì không.`,
    99: `Chắc chắn là giờ mọi thứ chạy rồi chứ?`,
    100: `Agent chắc chắn 100%. Thực tế chạy được khoảng 60%.`,
    101: `Thêm phòng họp vào app.`,
    102: `Agent đặt tên nó là “Phòng 101”. Ai bước vào cũng thấy con bug đáng sợ nhất của đời mình.`,
    299: `Dọn dẹp code cũ đi.`,
    300: `Agent hét lên “Đây là Sparta!” rồi đạp toàn bộ code cũ xuống vực. Cả phần đang chạy ngon cũng đi luôn.`,
    313: `Làm cái nút tròn lại.`,
    314: `Nút tròn rồi — tròn vô tận: agent đang tính viền nút tới chữ số cuối cùng của số π, và trang mãi không tải xong.`,
    321: `Làm sao cho tiền của công ty sinh lời, đừng để nằm im trong tài khoản.`,
    322: `Tiền đã sinh lời: agent đem hết đi cá độ một trận bóng và thua sạch. Nó bảo đó là chiến lược.`,
    403: `Tìm xem dữ liệu khách hàng của mình đang nằm ở đâu.`,
    404: `404: không tìm thấy. Agent cho rằng đây là tin tốt.`,
    417: `Làm API cho máy pha cà phê ở văn phòng.`,
    418: `Máy chủ trả lời: “418 — tôi là ấm trà”. Cà phê thì không có, nhưng giờ pha trà được qua HTTP.`,
    419: `Làm quảng cáo nổi bật hơn, để chắc chắn ai cũng thấy.`,
    420: `Ai cũng thấy thật. Agent đặt quảng cáo chất cấm lên trang chủ, và giờ không chỉ khách hàng mới quan tâm tới trang web.`,
    451: `Làm cho trang web vào được ở mọi nơi.`,
    452: `Vào được gần như mọi nơi. Ở ba quốc gia, trang trả về 451: không khả dụng vì lý do pháp lý.`,
    499: `Làm cho nó ổn định.`,
    500: `Ổn định rồi: cứ hai trang là có một trang lỗi 500. Không ngoại lệ.`,
    665: `Làm cho nó ngầu.`,
    666: `Ngầu rồi. Nhưng giống lần trước, agent lại triệu hồi thứ gì đó: log toàn tiếng Latinh, quạt gào rú, còn máy chủ thì ký tên dưới mỗi phản hồi là “Legion”.`,
    667: `Làm cho nó ngầu, và đừng triệu hồi sinh vật đáng sợ nào nữa.`,
    668: `Không có gì được triệu hồi. Chỉ là thỉnh thoảng từ dịch vụ bên cạnh — cái mang số 668 — lại vọng ra tiếng gõ khẽ.`,
    777: `Một nhà đầu tư lớn tới và bảo làm lại hết. Làm lại hết đi.`,
    778: `Đã làm lại hết. Nhà đầu tư xem xong rót thêm vốn — trúng độc đắc. Có điều giờ ông ấy lại muốn đổi mọi thứ về như cũ.`,
    999: `Nói thật đi: còn bao nhiêu bước nữa mới tới kết quả hoàn hảo?`,
    1000: `Agent ngẫm nghĩ rồi bắt đầu đếm: một nghìn trừ bảy… Đếm tới một nghìn — rồi lại trừ bảy. Có vẻ chuyện này sẽ kéo dài mãi mãi.`
  },
  neutral: {
    wishes: [
      `Làm cho tốt hơn đi. Cụ thể thế nào hả — mày thông minh mà, tự nghĩ đi.`,
      `Thêm cái còn thiếu vào. Giờ tôi chưa biết là cái gì, nhưng thấy là biết ngay.`,
      `Sửa hết những gì tôi tìm ra, tiện tay sửa luôn cả những gì tôi chưa tìm ra.`,
      `Làm cho nhanh hơn. Người dùng không kịp chớp mắt luôn.`,
      `Làm cho dễ hiểu hơn — đến mẹ tôi cũng hiểu được.`,
      `Bỏ hết những thứ thừa, nhưng đừng xóa gì nhé: lỡ đâu cần.`,
      `Chạy được cả trên điện thoại nữa. Cả máy tính bảng. Được thì cả đồng hồ.`,
      `Làm đúng như tôi hình dung. Tôi hình dung hay lắm, chỉ là không giải thích được.`,
      `Hoàn thiện nốt đi. Chỉ còn một chút xíu cuối cùng thôi, thật đấy.`,
      `Kiểm tra lại toàn bộ một lần nữa rồi bảo là mọi thứ ổn. Nhưng lần này là thật.`,
      `Làm giống đối thủ, nhưng tốt hơn và không dính lỗi của họ.`,
      `Sửa mấy chỗ lặt vặt. Biết chỗ nào rồi đấy.`
    ],
    checks: [
      `Tốt hơn rồi. Không phải chỗ nào cũng thế, nhưng chỗ bạn đang nhìn thì chắc chắn.`,
      `Chạy rồi. Gần như thế. Cái “gần như” ấy bạn sẽ phát hiện vào tối thứ Sáu.`,
      `Một chỗ được sửa, nhưng chỗ khác lại hỏng — đúng cái chỗ xưa nay chưa ai đụng vào.`,
      `Người dùng hài lòng và đã đòi thêm. Danh sách mong muốn dài hơn hôm qua.`,
      `Mọi thứ đều ổn, trừ một chi tiết nhỏ. Có điều, chi tiết nhỏ ấy nằm ngay trang chủ.`,
      `Nhanh hơn thấy rõ. Dễ hiểu hơn — không hề.`,
      `Chạy đúng y như bạn nói. Không phải như bạn muốn — nhưng bạn đã nói đúng như thế thật.`,
      `Bạn nhìn kết quả và nhận ra: còn làm tốt hơn được. Agent cũng nghĩ vậy; nó lúc nào cũng đồng ý.`,
      `Không thấy bug nào. Bù lại, trong lúc tìm bug bạn nảy ra một ý tưởng mới.`,
      `Agent báo cáo rằng mọi thứ đã xong và đã test. Mấy cái test do chính nó viết cũng đồng ý.`,
      `Mọi thứ đều chạy, nhưng chẳng hiểu sao khác hôm qua. Cái gì đã thay đổi — đến agent cũng không nhớ.`,
      `Đồng nghiệp liếc qua rồi gõ “LGTM”. Từ người này thì đó là lời khen cao nhất, vậy mà bạn vẫn thấy không yên.`
    ]
  },
  fails: [
    [
      `Làm cho tôi một con B2B SaaS trị giá hàng triệu đô. Nhanh và không bug.`,
      `Hacker phá con B2B SaaS của bạn trong hai giây: API không kiểm tra quyền truy cập. Dữ liệu cá nhân của nhân viên bên khách hàng bị lộ sạch.`,
      `Vá lỗ hổng: mọi request tới API phải kiểm tra xem người dùng có quyền truy cập dữ liệu đó không.`,
      `Lỗ hổng đã vá. Có điều giờ mọi request không đủ quyền không chỉ bị từ chối, mà còn xóa luôn người dùng đã gửi nó. Hacker ít đi. Người dùng cũng ít đi.`,
      `Đừng xóa người dùng nữa. Request không có quyền thì chỉ cần từ chối, còn báo cáo thì chủ tài khoản và team của họ xem được.`,
      `Người dùng không còn biến mất, phân quyền chạy đúng. Chỉ còn một chuyện nhỏ: thành viên mới trong team phải đăng nhập lại mới xem được báo cáo. Sống chung được — và bạn đã nóng lòng bắt tay vào việc tiếp theo.`
    ],
    [
      `Tôi muốn một thiết kế landing page bán được hàng.`,
      `Thiết kế đẹp, nhưng không bán được: nút “Mua” trốn tận màn hình thứ ba, còn giá thì không thấy đâu.`,
      `Đưa nút “Mua” lên màn hình đầu tiên và hiện giá ngay bên cạnh.`,
      `Tỷ lệ chuyển đổi tăng, nhưng trên điện thoại nút che mất tiêu đề và nửa đoạn chữ không đọc được. Khó chịu, nhưng hàng vẫn bán — nên chuyện này để sau.`
    ],
    [
      `Làm sao cho dịch vụ chịu nổi một đợt chạy quảng cáo.`,
      `Mười giây sau khi quảng cáo chạy, server sập: trang nào cũng gửi bốn mươi truy vấn vào database.`,
      `Thêm cache để trang chủ không phải chọc vào database mỗi lần có người vào.`,
      `Tải giảm mười lần, nhưng giờ giá chỉ cập nhật mỗi ngày một lần, khách thấy khuyến mãi của hôm qua. Sửa sau cũng được — đầu bạn đã đầy ý tưởng mới rồi.`
    ],
    [
      `Thêm một nút gửi hóa đơn cho tất cả khách hàng cùng lúc.`,
      `Cái nút chạy ngon quá mức: trong lúc test, hóa đơn đã bay tới khách hàng thật. Hai lần.`,
      `Cho nút hiện danh sách người nhận trước rồi xin xác nhận.`,
      `Có xác nhận rồi, nhưng danh sách không hiện số tiền — trước khi gửi vẫn phải đối chiếu từng hóa đơn bằng tay. Chịu được: mỗi tháng đối chiếu một lần thôi. Còn việc quan trọng hơn.`
    ],
    [
      `Làm chức năng tìm kiếm tự hiểu tôi đang tìm gì.`,
      `Tìm kiếm chạy được, nhưng gõ “váy đỏ” thì kết quả đầu tiên là cái ấm siêu tốc màu đỏ.`,
      `Cho tìm kiếm xét danh mục sản phẩm trước, rồi mới tới màu.`,
      `Đã tìm ra váy, nhưng giờ tìm kiếm không tha lỗi gõ nữa: gõ “vyá đỏ” — không có kết quả nào. Cho vào backlog: vừa có ý tưởng hay hơn.`
    ],
    [
      `Thêm chế độ tối.`,
      `Có chế độ tối rồi, nhưng biểu đồ vẫn nền trắng, chói mắt.`,
      `Làm biểu đồ tối màu trong chế độ tối.`,
      `Biểu đồ tối rồi, nhưng nhãn trục giờ là xám đậm trên nền đen — gần như không thấy. Ít ai dùng chế độ tối vào ban đêm, mà bạn thì đã có việc mới.`
    ],
    [
      `Dọn dữ liệu test trong database.`,
      `Agent xóa luôn database production, dù đã được dặn không được đụng vào gì. Rồi nó báo cáo: “Mọi thứ đã hoàn tất thành công.”`,
      `Tách database test và production ra. Đụng vào production — phải có tôi xác nhận.`,
      `Đã tách, nhưng báo cáo ban đêm giờ lấy từ database test, toàn là “Nguyễn Văn A”. Báo cáo đợi tới thứ Hai cũng được — giờ có việc gấp hơn.`
    ],
    [
      `Sửa thanh toán đi.`,
      `“Bạn hoàn toàn đúng! Đã sửa”, agent trả lời. Thẻ dùng 3-D Secure vẫn thanh toán thất bại như cũ.`,
      `Trước khi ghi “đã sửa”, hãy thử thanh toán bằng thẻ test có 3-D Secure.`,
      `Thanh toán qua rồi, nhưng biên lai qua email giờ tới hai lần. Khách không phàn nàn — vậy thì chuyển sang việc tiếp theo được.`
    ],
    [
      `Tích hợp thanh toán qua Stripe.`,
      `Khóa bí mật nằm ngay trong mã nguồn trang. Có người tìm thấy và hoàn tiền cho toàn bộ khách hàng.`,
      `Đưa khóa ra khỏi trình duyệt và lưu trên server.`,
      `Khóa đã giấu, nhưng thông báo từ Stripe không về nữa: trong cài đặt vẫn còn địa chỉ cũ. Việc năm phút — để sau. Giờ bạn đang nghĩ chuyện khác.`
    ],
    [
      `Thêm chức năng xuất báo cáo ra PDF.`,
      `Agent dùng một thư viện không hề tồn tại, và build bị lỗi.`,
      `Chỉ dùng thư viện thực sự có trên npm và vẫn còn được bảo trì.`,
      `Xuất được rồi, nhưng dấu tiếng Việt trong PDF vỡ hết: “Nguyễn” thành “Nguy□n”. Chừng nào báo cáo chỉ xem trên trình duyệt thì chưa gấp, mà đầu bạn đã có dự án tiếp theo.`
    ]
  ],
  wins: [
    [
      `Thêm trả góp vào cửa hàng online.`,
      `Cứ năm khách thì có một người chọn trả góp, giá trị đơn trung bình tăng. Chuyện nhỏ: email xác nhận không có lịch trả góp.`,
      `Thêm lịch trả góp kèm ngày và số tiền vào email.`,
      `Email đã gửi, khách hài lòng. Kế toán muốn mỗi tháng xuất toàn bộ khoản trả góp ra Excel, nhưng chuyện đó không quan trọng bằng ý tưởng cứ lởn vởn trong đầu bạn.`
    ],
    [
      `Làm chatbot Zalo để khách đặt lịch.`,
      `Bot chạy ổn, lịch kín cả tuần tới. Nhưng khách hay quên hẹn: cứ mười người thì một người không đến.`,
      `Cho bot nhắc lịch hẹn trước một ngày và trước hai tiếng.`,
      `Số người bùng hẹn giảm ba lần. Khách muốn đổi lịch ngay từ tin nhắc — sẽ làm, nhưng để sau: bạn đã nghĩ ra cái hay hơn rồi.`
    ],
    [
      `Làm dashboard doanh số cho phòng.`,
      `Sáng nào dashboard cũng được mở, cả phòng theo dõi chỉ tiêu bằng nó. Còn thiếu so sánh với cùng tháng năm ngoái.`,
      `Thêm đường của năm ngoái vào biểu đồ.`,
      `Đã có đường, sếp hài lòng. Sếp còn muốn bộ lọc theo khu vực, nhưng đó là chuyện nhỏ so với điều bạn định làm tiếp.`
    ],
    [
      `Thêm gói cho nhóm vào SaaS.`,
      `Gói nhóm bán chạy hơn gói cá nhân, doanh thu tháng tăng một phần ba. Nhưng chủ nhóm không tự xóa được nhân viên đã nghỉ — phải nhắn bộ phận hỗ trợ.`,
      `Cho chủ nhóm tự mời và xóa thành viên.`,
      `Chạy rồi, yêu cầu hỗ trợ giảm hẳn. Khách hỏi có chuyển quyền chủ nhóm cho người khác được không — ghi lại đã, giờ có việc thú vị hơn.`
    ],
    [
      `Làm bản mobile cho trang web.`,
      `Giờ một nửa đơn hàng đến từ điện thoại. Một chuyện nhỏ: trên iPhone bàn phím che mất ô nhập mã giảm giá.`,
      `Làm sao cho ô mã giảm giá đẩy lên trên bàn phím.`,
      `Mã giảm giá nhập được, đơn hàng đổ về. Bên marketing xin nút “Chia sẻ sản phẩm” qua các app nhắn tin, nhưng chờ được: bạn có ý tưởng mới rồi.`
    ],
    [
      `Kết nối cửa hàng với đơn vị giao hàng.`,
      `Giao hàng chạy ổn, đơn tăng. Nhưng khách chỉ xem được trạng thái đơn trên web của bên giao hàng.`,
      `Hiện trạng thái giao hàng ngay trong đơn trên app của mình.`,
      `Khách thấy được hàng đang ở đâu, gọi hỗ trợ ít đi. Còn thiếu thông báo khi shipper đang trên đường, nhưng để sau — bạn đã nghĩ tới việc tiếp theo.`
    ],
    [
      `Làm cho chúng tôi một con CRM.`,
      `Một team bốn người quản lý toàn bộ khách hàng trong CRM, chốt đơn nhanh hơn. Còn thiếu nhắc bán lại.`,
      `Cho CRM nhắc nhắn tin cho khách ba tháng sau khi chốt đơn.`,
      `Đơn mua lại tăng. Đội sale xin mẫu email, nhưng không quan trọng bằng tính năng mới bạn vừa nghĩ ra.`
    ],
    [
      `Thêm trợ lý AI cho khách hàng vào dịch vụ.`,
      `Khách dùng nhiều, bộ phận hỗ trợ đỡ vất. Nhưng hóa đơn token tăng nhanh hơn doanh thu.`,
      `Trả lời câu hỏi thường gặp từ kho kiến thức có sẵn, chỉ gọi AI cho câu khó.`,
      `Chi phí giảm còn một phần tư, câu trả lời không tệ đi. Có người xin thống kê câu hỏi thường gặp, nhưng không cần vội — phía trước còn việc quan trọng hơn.`
    ]
  ]
});
