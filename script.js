
function bored() {
    console.log('inside set time out');
    result.innerHTML = ''
    let html_data = `
    <div class="container text-center">
    <img class="img-fluid rounded mb-4 mb-lg-0"
        src = "https://media.tenor.com/6c5pBJ5lI5AAAAAC/cute-kawaii.gif" alt = "Happy" />
        <h4 class="mt-4 mb-5">Keep calm as we are searching world-class fun activites for you</h4>
        </div>
        `
    result.innerHTML += html_data
    hide.style.display = "none";
    setTimeout(() => {
        bored1()
    }, 3000)
}

function liar() {
    console.log('inside set time out');
    result.innerHTML = ''
    let html_data = `
    <div class="container text-center mb-2">
    <img width="450px" height="450px" class="img-fluid rounded mb-4 mb-lg-0"
        src = "https://media.tenor.com/3MWD9CJ_vfYAAAAj/i-know-thats-not-true-tolkien-black.gif" alt = "liar" />
        </div>
        `
    result.innerHTML += html_data
    hide.style.display = "none";
    setTimeout(() => {
        window.location.reload()
    }, 3000)
}

async function bored1() {
    a = ''
    b = ''
    d = ''
    const data = await fetch(`https://www.boredapi.com/api/activity`)
    console.log(data);
    // we see here it is a response to make it to normal output use jso
    data.json().then(
        output => {
            a = output
        }
    )
        .catch(output => {
            alert('we cannot suggest any activity right now!')
        }
        )

    const data1 = await fetch(`https://www.boredapi.com/api/activity`)
    console.log(data1);
    // we see here it is a response to make it to normal output use jso
    data1.json().then(
        output => {
            b = output
        }
    )
        .catch(output => {
            alert('we cannot suggest any activity right now!')
        }
        )

    const data2 = await fetch(`https://www.boredapi.com/api/activity`)
    console.log(data2);
    // we see here it is a response to make it to normal output use jso
    data2.json().then(
        output => {
            d = output
        }
    )
        .catch(output => {
            alert('we cannot suggest any activity right now!')
        }
        )

    const data3 = await fetch(`https://www.boredapi.com/api/activity`)
    console.log(data3);
    // we see here it is a response to make it to normal output use jso
    data3.json().then(
        output => {
            e = output
        }
    )
        .catch(output => {
            alert('we cannot suggest any activity right now!')
        }
        )

    displaydata(a, b, d);
}


function displaydata(a, b, d) {
    // console.log(a);
    console.log(a.link, b.link, d.link);

    let html_data = `
        <div class="container">
        <div class="card text-white bg-secondary my-4 py-1 text-center">
            <div class="card-body">
                <h4 class="text-white m-0">Lets try out these activities</h4>
            </div>
        </div>
        <!-- Content Row-->
        <div class="row gx-4 gx-lg-5 mb-0">
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title text-center"><span style="text-transform: capitalize;">${a.type}</span><img width="50px" height="50px" class="img-fluid rounded mb-4 mb-lg-0"
                        src="https://media.tenor.com/VCYmMvyw7rIAAAAi/rabbit.gif" alt="dancing" /></h2>
                        <p class="card-text">Activity : <strong>${a.activity}</strong></p>
                        <p class="card-text">Participants : ${a.participants} </p>
                        <p class="card-text">Price : ${a.price} </p>
                        <div id="link1" class="card-text"> </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title text-center"><span style="text-transform: capitalize;">${b.type}</span><img width="50px" height="50px" class="img-fluid rounded mb-4 mb-lg-0"
                        src="https://media.tenor.com/5x4UmDjnty0AAAAi/dog-caramelldansen.gif" alt="dancing" /></h2>
                        <p class="card-text">Activity : <strong>${b.activity}</strong></p>
                        <p class="card-text">Participants : ${b.participants} </p>
                        <p class="card-text">Price : ${b.price} </p>
                        <div id="link2" class="card-text"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title text-center"><img width="50px" height="50px" class="img-fluid rounded mb-4 mb-lg-0"
                        src="https://media.tenor.com/GQrYAgV37gkAAAAi/celebrating-dancing.gif" alt="dancing" /><span style="text-transform: capitalize;">${d.type}</span></h2>
                        <p class="card-text">Activity : <strong>${d.activity}</strong></p>
                        <p class="card-text">Participants : ${d.participants} </p>
                        <p class="card-text">Price : ${d.price} </p>
                        <div id="link3" class="card-text"> </div>
                    </div>
                </div>
            </div>
            <div class="text-center"><a onclick="bored()" class="btn btn-secondary btn mb-5 mt-3">Still bored?</a></div>
        </div></div>

    `

    // <a href="${a.link}" id="link1" class="card-text" target="_blank">Link : ${a.link} </a>
    // <a href="${b.link}" id="link2" class="card-text" target="_blank">Link : ${b.link} </a>
    // <a href="${d.link}" id="link3" class="card-text" target="_blank">Link : ${d.link} </a>
    // link1 = document.getElementById('#link1')
    // link2 = document.getElementById('#link2')
    // link3 = document.getElementById('#link3')
    // console.log(link1, link2, link3);
    result.innerHTML = html_data
    hide.style.display = "none";
    if (a.link != "") {
        var aTag = document.createElement('a');
        aTag.setAttribute('href', a.link);
        aTag.setAttribute('target', "_blank");
        aTag.innerHTML = a.link;
        document.getElementById("link1").appendChild(aTag);
    }

    if (b.link != "") {
        var aTag = document.createElement('a');
        aTag.setAttribute('href', b.link);
        aTag.setAttribute('target', "_blank");
        aTag.innerHTML = b.link;
        document.getElementById("link2").appendChild(aTag);
    }

    if (d.link != "") {
        var aTag = document.createElement('a');
        aTag.setAttribute('href', d.link);
        aTag.setAttribute('target', "_blank");
        aTag.innerHTML = d.link;
        document.getElementById("link3").appendChild(aTag);
    }

}

