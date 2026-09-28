fetch("./data.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((item) => {
      const li = document.querySelector(
        `.summary li.${item.category.toLowerCase()}`,
      );

      li.querySelector("span").textContent = item.score;

      const icon = document.createElement("img");
      icon.src = item.icon;
      icon.alt = "";
      const title = li.querySelector("p");
      title.before(icon);
    });
    const average = Math.round(
      data.reduce((sum, item) => sum + item.score, 0) / data.length,
    );
    document.querySelector(".visual-result h1").textContent = average;
  })
  .catch((error) => console.error("Could not load data:", error));
