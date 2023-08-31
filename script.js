const handleCategory = async () => {
  //   fetch("https://openapi.programming-hero.com/api/news/categories")
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((err) => console.log(err));

  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();
  console.log(data.data.news_category);
  const tabContainer = document.getElementById("tab-container");

  data.data.news_category.slice(0, 5).forEach((category) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <a onclick="handleLodeNews('${category.category_id}')" class="tab tab-active m-5 text-white font-bold">${category.category_name}</a>    
    `;
    tabContainer.appendChild(div);
  });
};

const handleLodeNews = async (categoryId) => {
  //   console.log(categoryId);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${categoryId}`
  );
  const data = await response.json();
  console.log(data);
};

handleCategory();
