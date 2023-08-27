let infoContainer = document.getElementById("info-container");

    fetch("data.json")
      .then(response => response.json())
      .then(jsonData => {
        jsonData.forEach(entry => {
          let div = document.createElement("div");
          div.className = "summary-item";
          div.id = "summary-" + (entry.category).toLowerCase();

          let iconEl = document.createElement("img");
          iconEl.src = entry.icon;
          iconEl.alt = "Icon for " + entry.category;

          let categoryEl = document.createElement("p");
          categoryEl.className = "summary-category";
          categoryEl.id = (entry.category).toLowerCase();
          categoryEl.textContent = entry.category;

          let scoreEl = document.createElement("p");
          scoreEl.className = "category-score";
          scoreEl.innerHTML = entry.score + `<span class="summary-100">/100</span>`;

          div.appendChild(iconEl);
          div.appendChild(categoryEl);
          div.appendChild(scoreEl);

          infoContainer.appendChild(div);
        });
      })
      .catch(error => console.log("Error fetching data", error));
