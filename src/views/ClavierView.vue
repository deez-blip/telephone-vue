<template>

<div id="phone">
    <div class="screen">
        <div class="content">
            <div class="aligner">
                <h1>Clavier</h1>
                <div class="contact">
                    <h2>{{ contact }}</h2>
                </div>
                <div class="numPan">
                    <div class="display">
                        <span>{{ number }}</span>
                    </div>
                    <div class="nums">
                        <div class="r r1">
                            <div class="chiffre" @click="addNumber(1)"><span>1</span></div>
                            <div class="chiffre" @click="addNumber(2)"><span>2</span></div>
                            <div class="chiffre" @click="addNumber(3)"><span>3</span></div>
                        </div>

                        <div class="r r2">
                            <div class="chiffre" @click="addNumber(4)"><span>4</span></div>
                            <div class="chiffre" @click="addNumber(5)"><span>5</span></div>
                            <div class="chiffre" @click="addNumber(6)"><span>6</span></div>
                        </div>

                        <div class="r r3">
                            <div class="chiffre" @click="addNumber(7)"><span>7</span></div>
                            <div class="chiffre" @click="addNumber(8)"><span>8</span></div>
                            <div class="chiffre" @click="addNumber(9)"><span>9</span></div>
                        </div>

                        <div class="r r4">
                            <div class="chiffre" @click="addNumber(0)"><span>0</span></div>
                        </div>
                    </div>
                    <div class="image">
                        <img src="../assets/phone.png" alt="" @click="addJournal()">
                    </div>
                </div>
                <div class="vue_nav">
                    <div>
                        <h2><router-link to="/clavier">Clavier</router-link></h2>
                    </div>
                    <div>
                        <h2><router-link to="/contact">Contact</router-link></h2>
                    </div>
                    <div>
                        <h2><router-link to="/journal">Journal</router-link></h2>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="time">11:30</div>
    <svg class="battery" viewBox="0 0 25 12">
        <rect opacity="0.35" x="0.5" y="0.833374" width="21" height="10.3333" rx="2.16667" fill="none" stroke="currentColor" />
        <path opacity="0.4" d="M23 4V8C23.8047 7.66122 24.328 6.87313 24.328 6C24.328 5.12687 23.8047 4.33878 23 4" fill="currentColor" />
        <rect x="2" y="2.33337" width="18" height="7.33333" rx="1.33333" fill="currentColor" />
    </svg>
    <svg class="wifi" viewBox="0 0 16 12">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.33045 2.60802C10.5463 2.60811 12.6775 3.45955 14.2835 4.98635C14.4044 5.10422 14.5977 5.10274 14.7168 4.98302L15.8728 3.81635C15.9331 3.75563 15.9667 3.67338 15.9662 3.58779C15.9657 3.50221 15.9311 3.42036 15.8701 3.36035C11.655 -0.679198 5.00522 -0.679198 0.79012 3.36035C0.729062 3.42032 0.694418 3.50215 0.693855 3.58773C0.693292 3.67331 0.726856 3.75558 0.78712 3.81635L1.94345 4.98302C2.06248 5.10292 2.25593 5.10441 2.37679 4.98635C3.98294 3.45945 6.11434 2.60801 8.33045 2.60802ZM8.33045 6.40368C9.54794 6.40361 10.722 6.85614 11.6245 7.67335C11.7465 7.78933 11.9388 7.78682 12.0578 7.66768L13.2125 6.50102C13.2733 6.43982 13.307 6.3568 13.3061 6.27054C13.3052 6.18427 13.2698 6.10196 13.2078 6.04202C10.4596 3.48563 6.20365 3.48563 3.45545 6.04202C3.39338 6.10196 3.35796 6.18432 3.35714 6.27061C3.35633 6.3569 3.39019 6.43991 3.45112 6.50102L4.60545 7.66768C4.72444 7.78682 4.91672 7.78933 5.03879 7.67335C5.94066 6.85668 7.11377 6.40419 8.33045 6.40368ZM10.6434 8.9575C10.6452 9.04401 10.6112 9.12741 10.5495 9.18802L8.55212 11.2037C8.49357 11.2629 8.41374 11.2963 8.33045 11.2963C8.24716 11.2963 8.16734 11.2629 8.10879 11.2037L6.11112 9.18802C6.04941 9.12736 6.01546 9.04394 6.01729 8.95743C6.01912 8.87092 6.05657 8.789 6.12079 8.73102C7.39636 7.65213 9.26455 7.65213 10.5401 8.73102C10.6043 8.78905 10.6417 8.87099 10.6434 8.9575Z" fill="currentColor" />
    </svg>
    <svg class="cellular" viewBox="0 0 18 12">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6665 0.666626H15.6665C15.1142 0.666626 14.6665 1.11434 14.6665 1.66663V10.3333C14.6665 10.8856 15.1142 11.3333 15.6665 11.3333H16.6665C17.2188 11.3333 17.6665 10.8856 17.6665 10.3333V1.66663C17.6665 1.11434 17.2188 0.666626 16.6665 0.666626ZM10.9998 2.99996H11.9998C12.5521 2.99996 12.9998 3.44767 12.9998 3.99996V10.3333C12.9998 10.8856 12.5521 11.3333 11.9998 11.3333H10.9998C10.4476 11.3333 9.99984 10.8856 9.99984 10.3333V3.99996C9.99984 3.44767 10.4476 2.99996 10.9998 2.99996ZM7.33317 5.33329H6.33317C5.78089 5.33329 5.33317 5.78101 5.33317 6.33329V10.3333C5.33317 10.8856 5.78089 11.3333 6.33317 11.3333H7.33317C7.88546 11.3333 8.33317 10.8856 8.33317 10.3333V6.33329C8.33317 5.78101 7.88546 5.33329 7.33317 5.33329ZM2.6665 7.33329H1.6665C1.11422 7.33329 0.666504 7.78101 0.666504 8.33329V10.3333C0.666504 10.8856 1.11422 11.3333 1.6665 11.3333H2.6665C3.21879 11.3333 3.6665 10.8856 3.6665 10.3333V8.33329C3.6665 7.78101 3.21879 7.33329 2.6665 7.33329Z" fill="currentColor" />
    </svg>
</div>

    
</template>

<script>
export default {
    name: "ClavierView",

    data() {
        return {
            number: "",
            canWrite: true,
            formJournal: {
                nom: "",
                numero: null,
                date: null
            }
        }
    },

    computed: {
        contact() {
            let val = (this.$store.state.contacts.find(contact => contact.numero == this.number))
            if(val != undefined) {
                return val.nom
            }
            return null
        }
    },

    methods: {
        addNumber(val) {
            if(this.canWrite) {
                this.number += val
                console.log(this.number)
                if(this.number.length == 10) {
                    this.canWrite = false
                }
            }
        },
        addJournal() {
            if(this.number.length == 10) {
                let val = (this.$store.state.contacts.find(contact => contact.numero == this.number))
                if(val != undefined) {
                    this.formJournal.nom = val.nom
                    this.formJournal.numero = val.numero
                }else {
                    this.formJournal.nom = "non-enregistr??"
                    this.formJournal.numero = this.number
                }
                const date = new Date()
                let day = date.getDate()
                let month = date.getMonth() + 1
                let year = date.getFullYear()
                let hours = date.getHours()
                let minutes = date.getMinutes()
                this.formJournal.date = day + '/' + month + '/' + year + ' ' + hours + 'h' + minutes
                console.log(this.formJournal)
                this.$store.commit('addJournal', this.formJournal)
            }
        }
    }
}

</script>

<style scoped>
    .aligner {
        margin-top: 10em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3em;
    }
.numPan {
        border-radius: 10px;
        /* background: #111; */
        width: 250px;
    }
    .numPan .display input{
        /* background: #111; */
        width: 100%;
        padding: 15px;
        outline: none;
        border: none;
        background: none;
        text-align: center;
        color: rgb(0, 0, 0);
        font-size: 2em;
    }

    .numPan .display {
        border-bottom: 2px solid #434343;
    }

    .numPan .nums {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .numPan .nums .r {
        display: flex;
    }

    .numPan .nums .r div{
        width: 50px;
        height: 50px;
        margin: 10px;
        border: 1px solid #434343;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        cursor: pointer;
        box-shadow: 0 0 30px #00a8ff0f;
    }

    span {
        color: rgb(0, 0, 0);
    }

    .image {
        padding-top: 2em;
        margin-top: 4em;
        height: 100px;
        cursor: pointer;
    }
    img {
        height: 100%;
    }

    .vue_nav {
        position: fixed;
        top: 85%;

        width: 100%;
        display: flex;
        justify-content: space-around;
        margin-top: 2em;
    }

    .vue_nav a {
        text-decoration: none;
        color: black;
    }
</style>