document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Chọn một lá bài ngẫu nhiên
    const card = getRandomCard();
    
    // Hiển thị kết quả
    document.getElementById('card-image').src = card.image;
    document.getElementById('card-title').textContent = card.title;
    document.getElementById('card-description').textContent = card.description;
    document.getElementById('card-display').style.display = 'block';
});

document.getElementById('back-home').addEventListener('click', function() {
    window.location.href = 'index.html';
});

function getRandomCard() {
    const cards = [
        {
            image: 'The Fool.jpg',
            title: 'The Fool',
            description: 'Khởi đầu mới, sự ngây thơ, tiềm năng. Lá bài này biểu thị một hành trình mới đang mở ra trước mắt bạn, đầy sự háo hức và niềm tin vào những điều chưa biết. Hãy dũng cảm bước đi với lòng tin vào bản thân và những gì đang chờ đón.'
        },
        {
            image: 'The Magician.jpg',
            title: 'The Magician',
            description: 'Khả năng sáng tạo, quyền lực cá nhân. Lá bài này chỉ ra rằng bạn sở hữu tất cả các công cụ và tài nguyên cần thiết để biến những ý tưởng của mình thành hiện thực. Sử dụng sức mạnh nội tại và trí tuệ của mình để thực hiện những kế hoạch và mục tiêu của bạn.'
        },
        {
            image: 'The High Priestess.jpg',
            title: 'The High Priestess',
            description: 'Trực giác, sự bí ẩn, kiến thức ẩn giấu. Lá bài này khuyến khích bạn lắng nghe tiếng nói nội tâm và tin tưởng vào sự trực giác của mình. Đó là thời điểm để khám phá những bí ẩn chưa được hé lộ và tìm hiểu sâu hơn về bản thân và thế giới xung quanh.'
        },
        {
            image: 'The Empress.jpg',
            title: 'The Empress',
            description: 'Sự phong phú, nuôi dưỡng, tình yêu. Lá bài này biểu thị sự dư dả và phong phú trong cuộc sống, nơi tình yêu và sự chăm sóc chiếm ưu thế. Đây là thời điểm tuyệt vời để phát triển sáng tạo, nuôi dưỡng các mối quan hệ và tận hưởng những điều tốt đẹp mà cuộc sống mang lại.'
        },
        {
            image: 'The Emperor.jpg',
            title: 'The Emperor',
            description: 'Quyền lực, ổn định, trật tự. Lá bài này đại diện cho sự ổn định và kiểm soát trong cuộc sống. Nó khuyến khích bạn nắm bắt quyền lực cá nhân của mình, thiết lập trật tự và kiểm soát những khía cạnh quan trọng trong cuộc sống để đạt được thành công và ổn định.'
        },
        {
            image: 'The Hierophant.jpg',
            title: 'The Hierophant',
            description: 'Truyền thống, sự hướng dẫn, trí tuệ tâm linh. Lá bài này tượng trưng cho sự kết nối với trí tuệ và sự hướng dẫn tâm linh. Đây là thời điểm để tìm kiếm sự hiểu biết sâu sắc từ các nguồn kiến thức truyền thống và học hỏi từ những người đi trước.'
        },
        {
            image: 'The Lovers.jpg',
            title: 'The Lovers',
            description: 'Tình yêu, sự lựa chọn, kết nối. Lá bài này phản ánh sự kết nối sâu sắc và tình yêu trong mối quan hệ của bạn. Nó cũng có thể chỉ ra sự lựa chọn quan trọng mà bạn cần phải thực hiện, ảnh hưởng đến sự hòa hợp và sự cân bằng trong cuộc sống của bạn.'
        },
        {
            image: 'The Chariot.jpg',
            title: 'The Chariot',
            description: 'Sự chiến thắng, ý chí, hướng đi. Lá bài này đại diện cho sức mạnh ý chí và khả năng điều khiển tình hình để đạt được mục tiêu của bạn. Đó là thời điểm để tập trung năng lượng của bạn và tiến về phía trước với quyết tâm mạnh mẽ.'
        },
        {
            image: 'Strength.jpg',
            title: 'Strength',
            description: 'Sự can đảm, sức mạnh, kiên nhẫn. Lá bài này biểu thị sự can đảm và sức mạnh bên trong bạn. Nó khuyến khích bạn đối mặt với thử thách với lòng kiên nhẫn và sự kiên cường, tin tưởng vào khả năng vượt qua khó khăn.'
        },
        {
            image: 'The Hermit.jpg',
            title: 'The Hermit',
            description: 'Sự cô đơn, tìm kiếm nội tâm, sự chiêm nghiệm. Lá bài này đại diện cho thời gian tìm kiếm sự cô đơn và chiêm nghiệm để hiểu rõ hơn về bản thân. Đây là thời điểm để rút lui khỏi sự xô bồ của cuộc sống và tìm kiếm sự chỉ dẫn từ bên trong.'
        },
        {
            image: 'Wheel of Fortune.jpg',
            title: 'Wheel of Fortune',
            description: 'Sự thay đổi, vận mệnh, chu kỳ. Lá bài này chỉ ra sự thay đổi và vận mệnh trong cuộc sống của bạn. Đó là thời điểm để chấp nhận những thay đổi và thấu hiểu rằng mọi thứ luôn vận động theo chu kỳ.'
        },
        {
            image: 'justice.jpg',
            title: 'Justice',
            description: 'Công lý, sự cân bằng, quyết định. Lá bài này biểu thị sự công bằng và cân bằng trong các quyết định của bạn. Nó khuyến khích bạn xem xét mọi vấn đề một cách công bằng và cân nhắc tất cả các khía cạnh trước khi đưa ra quyết định.'
        },
        {
            image: 'The Hanged Man.jpg',
            title: 'The Hanged Man',
            description: 'Sự hy sinh, nhìn nhận từ góc độ khác, chờ đợi. Lá bài này đại diện cho sự hy sinh và nhìn nhận mọi thứ từ một góc độ khác. Đây là thời điểm để xem xét lại quan điểm của bạn và chấp nhận sự chậm trễ hoặc thử thách như là một cơ hội để trưởng thành.'
        },
        {
            image: 'Death.jpg',
            title: 'Death',
            description: 'Kết thúc, chuyển đổi, tái sinh. Lá bài này không phải là dấu hiệu của cái chết mà là sự kết thúc của một giai đoạn và sự bắt đầu của một giai đoạn mới. Đó là thời điểm để buông bỏ những điều không còn phục vụ bạn và chào đón sự chuyển đổi và tái sinh.'
        },
        {
            image: 'temperance.jpg',
            title: 'Temperance',
            description: 'Sự cân bằng, hòa hợp, kiên nhẫn. Lá bài này chỉ ra sự cần thiết của sự cân bằng và hòa hợp trong cuộc sống của bạn. Nó khuyến khích bạn tìm kiếm sự điều độ và kiên nhẫn trong mọi tình huống, hòa hợp các yếu tố khác nhau để đạt được kết quả tốt nhất.'
        },
        {
            image: 'The Devil.jpg',
            title: 'The Devil',
            description: 'Sự cám dỗ, trói buộc, ham muốn. Lá bài này phản ánh những cảm giác bị trói buộc hoặc cám dỗ trong cuộc sống của bạn. Đó là thời điểm để đối mặt với những khía cạnh tiêu cực hoặc ham muốn mà bạn cần phải giải phóng để tiến lên.'
        },
        {
            image: 'The Tower.jpg',
            title: 'The Tower',
            description: 'Sự sụp đổ, khủng hoảng, sự thay đổi đột ngột. Lá bài này biểu thị một sự thay đổi đột ngột hoặc khủng hoảng có thể gây ra sự sụp đổ trong một khía cạnh nào đó của cuộc sống. Đó là thời điểm để chấp nhận sự thay đổi và học hỏi từ những thử thách này.'
        },
        {
            image: 'The Star.jpg',
            title: 'The Star',
            description: 'Hy vọng, cảm hứng, sự chữa lành. Lá bài này đại diện cho sự hy vọng và cảm hứng trong cuộc sống của bạn. Nó khuyến khích bạn tìm kiếm ánh sáng và sự chữa lành, và tin tưởng vào một tương lai tươi sáng hơn.'
        },
        {
            image: 'The Moon.jpg',
            title: 'The Moon',
            description: 'Sự mơ hồ, trực giác, bí ẩn. Lá bài này chỉ ra sự mơ hồ và bí ẩn trong cuộc sống của bạn. Đó là thời điểm để tin tưởng vào trực giác của bạn và khám phá những điều chưa rõ ràng hoặc chưa được phát hiện.'
        },
        {
            image: 'The Sun.jpg',
            title: 'The Sun',
            description: 'Niềm vui, thành công, sự tích cực. Lá bài này biểu thị sự thành công và niềm vui trong cuộc sống của bạn. Đó là thời điểm để tận hưởng những thành tựu và cảm nhận sự tích cực và ánh sáng chiếu rọi trong cuộc sống của bạn.'
        },
        {
            image: 'judgement.jpg',
            title: 'Judgement',
            description: 'Sự đánh giá, sự phục sinh, sự tự phản ánh. Lá bài này đại diện cho thời điểm đánh giá và sự phục sinh, nơi bạn sẽ phản ánh lại những hành động và quyết định của mình. Đó là thời điểm để học hỏi từ quá khứ và chuẩn bị cho sự khởi đầu mới.'
        },
        {
            image: 'The World.jpg',
            title: 'The World',
            description: 'Sự hoàn thành, thành công, sự toàn vẹn. Lá bài này chỉ ra sự hoàn thành và thành công trong cuộc sống của bạn. Đó là thời điểm để cảm nhận sự toàn vẹn và đạt được sự hài lòng từ những gì bạn đã đạt được và trải nghiệm.'
        }
    ];
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}
