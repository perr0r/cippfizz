$('.input').on('input', function() {
    var a = $(this).val();
    $(this).val(a.replace(/[^0-9]/g, ''));  
})

const rein = [[3, 4, 7], [180, 270, 470]];
const dven = [0, 5, 10, 15, 25, 35, 50, 60, 85, 105, 130, 155, 180, 205, 230, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255];
const stat140 = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 15, 24, 34, 45, 57, 70, 85, 102, 121, 142];
const stat150 = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 16, 26, 37, 49, 62, 76, 92, 110, 130, 152];
const stat160 = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 17, 28, 40, 53, 67, 82, 99, 118, 139, 162];
const stat200 = [0, 0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 19, 32, 46, 61, 77, 94, 113, 134, 157, 182];
const main140 = [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 49, 58, 67, 76, 85, 94, 103, 103, 103, 103];
const main150 = [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 51, 62, 73, 84, 95, 106, 117, 117, 117, 117];
const main160 = [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 53, 66, 79, 92, 105, 118, 131, 131, 131, 131];
const main200 = [0, 2, 4, 6, 8, 10, 13, 16, 19, 22, 25, 28, 31, 34, 37, 40, 55, 70, 85, 100, 115, 130, 145, 145, 145, 145];
const noti = ['100% 작 입니다.', '70% 작 입니다.', '30% 작 입니다.'];

$('#calc').on('click', function() {
    const star = $('#star').val();
    const rein = $('#rein').val();
    const main = $('#main').val();
    const sub = $('#sub').val();
    const att = $('#att').val();
    const option = $('input[name=option]:checked').val();

    if (option == 'armor') {
        if (rein == 0) {
            alert('작이 안 된 아이템입니다.');
        }
        else {
        const result = (main - sub) / rein;
        switch (result) {
            case 3: alert(noti[0]); break;
            case 4: alert(noti[1]); break;
            case 7: alert(noti[2]); break;
            case (main / rein):
                switch ((main - dven[star]) / rein) {
                    case 180: alert(noti[0]); break;
                    case 270: alert(noti[1]); break;
                    case 470: alert(noti[2]); break;
                    default: alert('주문의 흔적으로 작을 한 아이템이 아닌 것 같습니다.');
                }
                break;
                default: alert('주문의 흔적으로 작을 한 아이템이 아닌 것 같습니다.');
            }
        }
    }

    if (option == 'normal_glove') {
        if (rein == 0) {
            alert('작이 안 된 아이템입니다.');
        }
        else {
            switch (att - )
        }
    }
})
