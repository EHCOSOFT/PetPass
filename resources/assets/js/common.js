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
        var $modal = $("#" + modalId);
        $("#" + modalId).addClass("active");
        if (!($modal.hasClass("full-modal") || $modal.hasClass("toggle-modal"))) {
            window.addEventListener("wheel", removeDefaultEvent, { passive: false });
        }

        if ($modal.hasClass("toggle-modal")) {
            window.addEventListener("touchmove", removeDefaultEvent, { passive: false });
        }
    });

    // 모달 닫기 버튼 클릭 이벤트
    $(".btn-modal-close").click(function () {
        var modal = $(this).closest(".modal-wrap"); // 가장 가까운 모달 찾기
        modal.removeClass("active");
        window.removeEventListener("wheel", removeDefaultEvent);
        window.removeEventListener("touchmove", removeDefaultEvent); // 모달 닫을 때 터치 이벤트 제거
    });

    // 모달 영역 외부를 클릭하여 닫기
    $(".modal-wrap").click(function (e) {
        if ($(e.target).hasClass("modal-wrap")) { // 클릭이 모달 콘텐츠 외부인지 확인
            $(this).removeClass("active");
            $('.wrap').on("wheel", removeDefaultEvent);
        }

        var modal = $(this).closest(".modal-wrap");
        modal.removeClass("active");
        window.removeEventListener("wheel", removeDefaultEvent);
        window.removeEventListener("touchmove", removeDefaultEvent); // 모달 닫을 때 터치 이벤트 제거
    });

    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });

    /***
      * ios 키보드 scroll resize (modal 에서만 생기는 현상) 
   ****/
    $('.modal-wrap input').keydown(function (event) {
        if (event.key === "Enter") {
            $(this).blur();
        }
    });

    $('.modal-wrap input').bind('blur', function (e) {
        window.scrollTo(0, 1);
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
        $(this).parent().next('.input-group').show();
    });

    /***
       * 등록 및 신청현황 상세내용
    ****/
    $('.btn-info-detail').click(function () {
        $(this).toggleClass('active');
        $(this).parents().parents().next('.card-footer').toggleClass('active');
    })

    /***
       * 주문취소 신청 : 직접입력 선택 시
    ****/
    $('input[name="order-cancel-reason"]').change(function () {
        if ($(this).hasClass('cancel-input')) {
            $('.input-group').removeClass('d-none');
        } else {
            $('.input-group').addClass('d-none');
        }
    });

    $('.btn-check').click(function() {
        $(this).toggleClass('active');
    })

});

function setAppHeight() {
    const appHeight = window.innerHeight;
    document.documentElement.style.setProperty('--app-height', `${appHeight}px`);
}

window.addEventListener('DOMContentLoaded', setAppHeight);
window.addEventListener('resize', setAppHeight);
window.addEventListener('orientationchange', setAppHeight);
