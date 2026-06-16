document.addEventListener("DOMContentLoaded", () => {
    // 1. Intersection Observer를 이용한 스크롤 애니메이션 (Fade-in-up)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // 요소가 15% 보일 때 트리거
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 한 번만 실행
            }
        });
    }, observerOptions);

    // 애니메이션을 적용할 요소들 선택 (.bento-card, .timeline-item, .app-card, 텍스트 요소들 등)
    const hiddenElements = document.querySelectorAll('.bento-card, .timeline-item, .app-card, .horizon-intro, .accordion-item, .hero-content, .hero-visual');
    hiddenElements.forEach((el) => {
        el.classList.add('hidden-reveal'); // 초기 상태 설정 클래스 추가
        observer.observe(el);
    });

    // 2. 미작동 버튼 기능 활성화 로직
    const exploreBtn = document.querySelector('header .btn-glow'); // Explore Tech Spec
    if (exploreBtn) {
        exploreBtn.addEventListener('click', () => {
            alert('준비 중: 상세 기술 사양서(Tech Spec) 문서를 불러옵니다.');
        });
    }

    const watchBtn = document.querySelector('.hero .btn-glow'); // Watch AI in Action
    if (watchBtn) {
        watchBtn.addEventListener('click', () => {
            // 간단한 모달이나 새 창으로 유튜브 등 영상 연결 시뮬레이션
            window.open('https://www.youtube.com/results?search_query=Physical+AI+Robotics', '_blank');
        });
    }

    const readBtn = document.querySelector('.hero .btn-outline'); // Read Whitepaper
    if (readBtn) {
        readBtn.addEventListener('click', () => {
            alert('다운로드: Physical AI 공식 백서 (PDF) 다운로드가 시작됩니다.');
        });
    }

    const joinBtn = document.querySelector('.horizon-section .large-btn'); // Join the Initiative
    if (joinBtn) {
        joinBtn.addEventListener('click', () => {
            alert('안내: 파트너십 및 이니셔티브 참여 신청 폼으로 이동합니다.');
        });
    }
});
