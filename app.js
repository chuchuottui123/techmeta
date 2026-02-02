fetch("tools.json")
    .then(res => res.json())
    .then(data => {
        const toolList = document.getElementById("toolList");

        data.forEach(tool => {
            const div = document.createElement("div");
            div.className = "tool";

            div.innerHTML = `
                <h2>${tool.name}</h2>
                <p>${tool.desc}</p>
                <a href=http://t.me/huyhoang8194 target="_blank" "?tag=${tool.tag}" class="tag">${tool.tag}</a>
            `;

            toolList.appendChild(div);
        });
    })
    .catch(err => {
        console.error("Lỗi load tools.json", err);
    });
