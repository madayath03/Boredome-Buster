
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
                        <h2 class="card-title">Pure jollity!<img width="50px" height="50px" class="img-fluid rounded mb-4 mb-lg-0"
                        src="https://media.tenor.com/VCYmMvyw7rIAAAAi/rabbit.gif" alt="dancing" /></h2>
                        <p class="card-text">Activity : ${a.activity}</p>
                        <p class="card-text">Type : ${a.type} </p>
                        <p class="card-text">Participants : ${a.participants} </p>
                        <p class="card-text">Price : ${a.price} </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title text-center">Lets do it <img width="50px" height="50px" class="img-fluid rounded mb-4 mb-lg-0"
                        src="https://media.tenor.com/5x4UmDjnty0AAAAi/dog-caramelldansen.gif" alt="dancing" /></h2>
                        <p class="card-text">Activity : ${b.activity}</p>
                        <p class="card-text">Type : ${b.type} </p>
                        <p class="card-text">Participants : ${b.participants} </p>
                        <p class="card-text">Price : ${b.price} </p>
                    </div>
                </div>
            </div>
            <div class="col-md-4 mb-3">
                <div class="card h-100">
                    <div class="card-body">
                        <h2 class="card-title"><img width="50px" height="50px" class="img-fluid rounded mb-4 mb-lg-0"
                        src="https://media.tenor.com/GQrYAgV37gkAAAAi/celebrating-dancing.gif" alt="dancing" />It's fun!!</h2>
                        <p class="card-text">Activity : ${d.activity}</p>
                        <p class="card-text">Type : ${d.type} </p>
                        <p class="card-text">Participants : ${d.participants} </p>
                        <p class="card-text">Price : ${d.price} </p>
                    </div>
                </div>
            </div>
            <div class="text-center"><a onclick="bored()" class="btn btn-secondary btn mb-5">Still bored?</a></div>
        </div></div>

    `
    result.innerHTML = html_data
    hide.style.display = "none";
}

