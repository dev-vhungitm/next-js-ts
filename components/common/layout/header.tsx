'use client';

import { headerMenuData, pathnames } from '@/constants';
import { useWindowDimensions } from '@/hooks';
import { HeaderMenu } from '@/models';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { PrimaryButton } from '../buttons';
import Logo from '../logo';
import styles from './header.module.scss';

export const Header = () => {
  const contactUsTitle = 'Contact Us';
  const screenBreakpoint = 992;
  const windowDimensions = useWindowDimensions();
  const windowWidth = windowDimensions.width;
  const pathname = usePathname();
  const arrowDownSvg = (
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="10" height="10" viewBox="0 0 512.011 512.011">
      <path
        d="M505.755 123.592c-8.341-8.341-21.824-8.341-30.165 0L256.005 343.176 36.421 123.592c-8.341-8.341-21.824-8.341-30.165 0s-8.341 21.824 0 30.165l234.667 234.667a21.275 21.275 0 0 0 15.083 6.251 21.275 21.275 0 0 0 15.083-6.251l234.667-234.667c8.34-8.341 8.34-21.824-.001-30.165z"
        fill="white"
        opacity="1"
      ></path>
    </svg>
  );

  const [isDesktopScreen, setIsDesktopScreen] = useState(windowWidth >= screenBreakpoint);
  const [isShowMenusContainer, setIsShowMenusContainer] = useState(false);
  const onToggle = () => setIsShowMenusContainer(!isShowMenusContainer);

  let headerClassName = styles.main;
  if (isShowMenusContainer) headerClassName += ' ' + styles.is_show_menu;

  const checkIsActiveMenu = (menu: HeaderMenu) => {
    return menu.url === '/'
      ? pathname === menu.url
      : pathname.startsWith(menu.url) || menu.children?.find(subMenu => pathname.startsWith(subMenu.url)) != null;
  };

  // Handle show and close sub menus container
  useEffect(() => {
    const getMenuContainerEls = () => {
      const menusEl = document?.querySelector('.' + styles.menus) as Element;
      const menuContainerEls = Object.values(menusEl.getElementsByClassName(styles.menu_container)) as HTMLElement[];

      return menuContainerEls;
    };

    const handleCloseSubMenusContainer = (activeIndex: number) => {
      const menuContainerEls = getMenuContainerEls();

      menuContainerEls.forEach((menuContainerEl, menuContainerElIndex) => {
        const subMenusContainerEl = menuContainerEl.querySelector('.' + styles.sub_menus_container) as HTMLElement;

        if (subMenusContainerEl && menuContainerElIndex !== activeIndex) {
          menuContainerEl.classList.remove(styles.is_show_sub_menus);
          subMenusContainerEl.style.height = '0px';
        }
      });
    };

    const menuContainerEls = getMenuContainerEls();

    menuContainerEls.forEach((menuContainerEl, menuContainerElIndex) => {
      const menuSvg = menuContainerEl.querySelector('svg') as SVGSVGElement;
      const subMenusContainerEl = menuContainerEl.querySelector('.' + styles.sub_menus_container) as HTMLElement;

      if (subMenusContainerEl) {
        const subMenusEl = subMenusContainerEl.querySelector('.' + styles.sub_menus) as HTMLElement;

        const handleShowSubMenusContainer = () => {
          const subMenuElHeight = subMenusEl?.offsetHeight;

          menuContainerEl.classList.toggle(styles.is_show_sub_menus);
          subMenusContainerEl.style.height = subMenuElHeight + 'px';
          handleCloseSubMenusContainer(menuContainerElIndex);
        };

        const onToggleMenu = () => {
          const isShowSubMenusContainer =
            subMenusContainerEl.style.height && subMenusContainerEl.style.height !== '0px';

          if (!isShowSubMenusContainer) {
            handleShowSubMenusContainer();
          } else {
            handleCloseSubMenusContainer(-1);
          }
        };

        const onClickSvg = () => windowWidth < screenBreakpoint && onToggleMenu();
        const onShowSubMenusContainer = () => windowWidth >= screenBreakpoint && handleShowSubMenusContainer();
        const onCloseSubMenusContainer = () => windowWidth >= screenBreakpoint && handleCloseSubMenusContainer(-1);

        menuSvg.onclick = onClickSvg;
        menuContainerEl.onmouseover = onShowSubMenusContainer;
        menuContainerEl.onmouseout = onCloseSubMenusContainer;
      }
    });

    if (windowWidth >= screenBreakpoint && !isDesktopScreen) {
      setIsDesktopScreen(true);
      handleCloseSubMenusContainer(-1);
    }
    if (windowWidth < screenBreakpoint && isDesktopScreen) {
      setIsDesktopScreen(false);
      handleCloseSubMenusContainer(-1);
    }
  }, [windowWidth, isDesktopScreen]);

  const logoJSX = (
    <div className={styles.logo} onClick={() => setIsShowMenusContainer}>
      <Link href={pathnames.home.pathname}>
        {/* <Image src={logoURL} width={130} height={60} alt={strings.appName} /> */}
        <Logo />
      </Link>
    </div>
  );

  const contactButtonJSX = (
    <Link href={pathnames.contact.pathname} className={styles.contact_button} onClick={onToggle}>
      <PrimaryButton>{contactUsTitle}</PrimaryButton>
    </Link>
  );

  const buildSubMenus = (menu: HeaderMenu) => (
    <div className={styles.sub_menus_container}>
      <div className={styles.sub_menus}>
        {menu.children?.map(subMenu => {
          const subMenuURL = subMenu.url;
          const isActiveSubMenu = checkIsActiveMenu(subMenu);

          // Sub menu class name
          let subMenuClassName = styles.sub_menu;
          if (isActiveSubMenu) subMenuClassName += ' ' + styles.is_active;

          return (
            <Link className={subMenuClassName} href={subMenuURL} key={subMenu.title} onClick={onToggle}>
              <div className={styles.sub_menu_title}>{subMenu.title}</div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  // Header menus jsx
  const headerMenusJSX = (
    <div className={styles.menus_container}>
      {/* Logo in menu */}
      {logoJSX}

      {/* Header menu */}
      <div className={styles.menus}>
        {headerMenuData.map(menu => {
          const isHaveSubMenu = menu.children && menu.children.length > 0;
          const isActiveMenu = checkIsActiveMenu(menu);

          // Menu class name
          let menuClassName = styles.menu;
          if (isActiveMenu) menuClassName += ' ' + styles.is_active;

          return (
            <div className={styles.menu_container} key={menu.title}>
              <div className={menuClassName}>
                <Link className={styles.menu_title} href={menu.url} onClick={onToggle}>
                  {menu.title}
                </Link>
                {isHaveSubMenu && arrowDownSvg}
              </div>
              {isHaveSubMenu && buildSubMenus(menu)}
            </div>
          );
        })}

        {/* Contact button in menu */}
        {contactButtonJSX}
      </div>
    </div>
  );

  return (
    <header className={headerClassName}>
      <nav className={styles.nav + ' container'}>
        {/* Logo */}
        {logoJSX}

        {/* Header menus */}
        {headerMenusJSX}

        {/* Contact */}
        {contactButtonJSX}

        {/* Toggle button */}
        <div className={styles.toggle_button} onClick={onToggle}>
          <div className={styles.toggle_button_line + ' ' + styles.line_1} />
          <div className={styles.toggle_button_line + ' ' + styles.line_2} />
          <div className={styles.toggle_button_line + ' ' + styles.line_3} />
        </div>
      </nav>
      {windowWidth < screenBreakpoint && isShowMenusContainer && <div className={styles.shadow} onClick={onToggle} />}
    </header>
  );
};
