function selectColor(e) {
  console.log(e.target);
}
$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    items: 1,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
  });
  $(".size-option").on("click", function () {
    $(".size-option").each(function (ele) {
      $(this).removeClass("bg-dark text-light");
    });
    $(this).toggleClass("bg-dark text-light");
  });
  $(".hamburger-menu").on("click", function () {
    $(".menu-bar").addClass("active");
  });
  $(".close-icon").on("click", function () {
    $(".menu-bar").removeClass("active");
  });

  $(".shopping-bag").on("click", function () {
    $("#cart").addClass("active");
  });

  $(".color-options > div").on("click", function () {
    console.log(this);
    $("input[name='color-option']").each(function () {
      console.log("to remove", this);
      $(this).removeAttr("checked");
    });
    $($(this).find("input")).attr("checked", "true");
  });
  let cartItemsLength = 0;

  const cartContainer = $("#cart-content");
  const addToCartButton = $("#add-to-cart");
  function updateCart() {
    const colorAndSizeOptions = $(".item-detail").html();

    let html = "";
    let addToCartButtonHtml = "";
    if (cartItemsLength == 0) {
      addToCartButtonHtml = `
      <div class="add-jacket-item d-flex gap-1">
        <span><img src="/assets/icons/Plus.svg" /></span>
        <h5>Add To Basket</h5>
        </div>
      `;
      html = `  
      <p class="cart-info text-center">You have no items in your Shopping Bag.</p>
        <div class="d-flex gap-4 bg-dark text-light p-4 justify-content-center">
          <span><img src="/assets/icons/shopping bagW.svg" /></span>
          <h5>Continue shopping</h5>
      </div>`;
    } else {
      addToCartButtonHtml = `
      <div class="d-flex gap-2">
      <img src="/assets/icons/remove-bl.svg" class="remove-jacket-item"/>
      ${cartItemsLength}
      <img src="/assets/icons/add-bl.svg" class="add-jacket-item"/>
    </div>
  
    `;
      html = `
    <div>
      <div class="d-flex">
        <img class = "image-cart" src="/assets/images/jacket.png" />
        <div class="item-data d-flex flex-column gap-2 mt-0">
          <h1>Mohan</h1>
          <p class="item-info">Recycle boucle knit cardigan pink</p>
          <div class="d-flex gap-2">
            <img src="/assets/icons/remove-bl.svg" class="remove-jacket-item"/>
            ${cartItemsLength}
            <img src="/assets/icons/add-bl.svg" class="add-jacket-item"/>
          </div>
          <p class="item-price">$120</p>
        </div>
      </div>
      <form class="item-detail d-flex gap-5 mb-4">
       ${colorAndSizeOptions}
      </form>
    </div>
<div class="mt-auto d-flex flex-column gap-4">
<hr/>
<div class="d-flex justify-content-between"->
<h5>Sub Total</h5>
<p class="item-price">$${cartItemsLength * 120}</p>
</div>
<p>*shipping charges, taxes and discount codes are calculated at the time of accounting.</p>
<div class="d-flex gap-4 bg-dark text-light p-4 justify-content-center">
          <span><img src="/assets/icons/shopping bagW.svg" /></span>
          <h5>BUY NOW</h5>
      </div>
</div>
      `;
    }
    cartContainer.html(html);
    addToCartButton.html(addToCartButtonHtml);
    attachCartActionsListeners();
  }
  updateCart();

  $(".close-icon-cart").on("click", function () {
    $("#cart").removeClass("active");
  });
  function attachCartActionsListeners() {
    const addToCartButtons = $(".add-jacket-item");
    addToCartButtons.off("click");
    addToCartButtons.on("click", function () {
      console.log(cartItemsLength);
      cartItemsLength++;
      updateCart();
    });
    $(".remove-jacket-item").on("click", function () {
      cartItemsLength--;
      updateCart();
    });
  }

  $(function () {
    $(".item-dropdown").click(function () {
      const arrowIcon = $(this).find(".arrow-icon > img");
      console.log(arrowIcon.attr("src"));
      if (arrowIcon.attr("src") == "/assets/icons/Forward.svg") {
        arrowIcon.attr("src", "/assets/icons/Upward.svg");
      } else {
        arrowIcon.attr("src", "/assets/icons/Forward.svg");
      }

      $(this).next(".dropdown").slideToggle();
    });

    $(document).click(function (e) {
      var target = e.target;
      if (
        !$(target).is(".item-dropdown") &&
        !$(target).parents().is(".item-dropdown")
      ) {
        $(".dropdown").slideUp();
      }
    });
  });
});
