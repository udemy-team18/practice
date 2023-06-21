export function go() {
  const place_to_go = document.querySelector("#place");

  addEventListener("click", () =>
    go(
      (location.href = ` https://www.goodchoice.kr/product/result?keyword=${place_to_go.vlaue}`)
    )
  );
}
