document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu > li');

    menuItems.forEach(item => {
        item.addEventListener('click', function (e) {
            e.stopPropagation(); // イベントのバブルを防ぐ

            // 他のすべてのメニューを閉じる
            menuItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherSubmenu = otherItem.querySelector('ul');
                    if (otherSubmenu) {
                        otherSubmenu.style.display = 'none';
                    }
                }
            });

            // 現在のメニューをトグルする
            const submenu = this.querySelector('ul');
            if (submenu) {
                submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
            }
        });
    });

    // メニュー以外をクリックしたら全て閉じる
    document.addEventListener('click', function () {
        menuItems.forEach(item => {
            const submenu = item.querySelector('ul');
            if (submenu) {
                submenu.style.display = 'none';
            }
        });
    });
});
