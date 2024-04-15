$(document).ready(function () {

    /***
      * 모달 이벤트
   ****/

    function removeDefaultEvent(e) {
        e.preventDefault();
    }

    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).addClass("active");
        if (!$("#" + modalId).hasClass("full-modal")) {
            window.addEventListener("wheel", removeDefaultEvent, { passive: false });
        }
    });

    // 모달 닫기 버튼 클릭 이벤트
    $(".btn-modal-close").click(function () {
        var modal = $(this).closest(".modal-wrap"); // 가장 가까운 모달 찾기
        modal.removeClass("active");
        window.removeEventListener("wheel", removeDefaultEvent);
    });

    // 모달 영역 외부를 클릭하여 닫기
    $(".modal-wrap").click(function (e) {
        if ($(e.target).hasClass("modal-wrap")) { // 클릭이 모달 콘텐츠 외부인지 확인
            $(this).removeClass("active");
            $('.wrap').on("wheel", removeDefaultEvent);

        }

        $(".modal-wrap").removeClass("active");
        window.removeEventListener("wheel", removeDefaultEvent);
        console.log('qwerq');
    });

    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });


    /***
       * 하단 이벤트
    ****/
    $(".btn-address").click(function () {
        $(".footer-bottom").slideToggle();
    });

    /***
       * 약관 전체 동의 체크박스 클릭 이벤트
    ****/
    $("#chkAll").click(function () {
        // 약관 전체 동의 체크박스의 상태를 가져옴
        var isChecked = $(this).prop("checked");
        // 아래에 있는 모든 체크박스의 상태를 약관 전체 동의 체크박스와 동일하게 설정
        $(".check-group input[type='checkbox']").prop("checked", isChecked);
    });

    /***
       * 배송요청사항 직접입력 시
    ****/
    $('.delivery-direct').click(function () {
        $(this).parent().next('.input-group').show(); // 현재 요소의 다음 형제 요소를 보여줍니다.
    });

    /***
       * 등록 및 신청현황 상세내용
    ****/
    $('.btn-info-detail').click(function () {
        $(this).toggleClass('active');
        $(this).parents().parents().next('.card-footer').toggleClass('active');
    })

    /***
       * 일정
    ****/


});