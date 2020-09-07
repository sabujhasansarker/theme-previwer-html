const demoContainer = document.querySelector("#demo .container .row");

for (let i = 0; i < demoData.length; i++) {
  const element = demoData[i];
  let divContainer = document.createElement("div");
  let a = document.createElement("a");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let span = document.createElement("span");
  let div = document.createElement("div");
  let title = document.createElement("h3");
  let info = document.createElement("p");
  info.className = "info";
  title.className = "title";
  div.className = "demo_footer position-absolute";
  span.className = "badge bg-danger";
  p.className = "position-absolute";
  img.className = "img-fluid position-relative";
  a.className = "text-decoration-none";
  divContainer.className = "col-lg-4 col-md-6 mb-4";
  demoContainer.appendChild(divContainer);
  divContainer.appendChild(a);
  a.appendChild(img);
  a.appendChild(p);
  a.appendChild(div);
  p.appendChild(span);
  div.appendChild(title);
  div.appendChild(info);

  a.href = "#";
  a.target = "_blank";
  img.src = element.img;
  img.alt = " ";
  span.innerHTML = element.bandage ? element.bandage : "";
  title.innerHTML = element.name;
  info.innerHTML = element.text;
}
