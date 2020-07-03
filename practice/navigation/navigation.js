import { productForm } from "../forms/productForm.js";
import { home } from "../pages/homePage.js";
import { productsServices } from "../products/productsServices.js";
export const navigation = () => {
  const navigation = document.querySelector(".navigation");

  const activeLink = navigation.querySelector(".navigationLink a");

  const content = document.querySelector(".content");
  activeLink.classList.add("activeNavigationLink");
  getContent(activeLink);

  const setActiveLink = (e) => {
    e.preventDefault();
    // console.log(e.target);
    if (e.target === e.currentTarget) {
      return;
    }

    const activeLink = navigation.querySelector(".activeNavigationLink");
    activeLink && activeLink.classList.remove("activeNavigationLink");
    e.target.classList.add("activeNavigationLink");

    getContent(e.target);
  };

  function getContent(link) {
    const activeLink = link.dataset.navlink;
    switch (activeLink) {
      case "Home":
        content.innerHTML = home();
        break;

      case "Profile":
        content.innerHTML = productForm();
        productsServices();
        break;

      case "Cart":
        content.innerHTML = "";
        break;

      default:
        content.innerHTML = home();
        break;
    }
  }

  navigation.addEventListener("click", setActiveLink);
};
