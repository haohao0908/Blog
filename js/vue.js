//Json資料暫時
let card_users = [
    {
        "id": 1,
        "title": "世上最美味的泡麵",
        "label": "感人故事",
        "content": '他是個單親爸爸，獨自撫養一個七歲的小男孩。每當孩子和朋友玩耍受傷回來，他對過世妻子留下的缺憾，便感受尤深，心底不免傳來陣陣悲涼的低鳴。這是他留下孩子出差當天發生的事。因為要趕火車，沒時間陪孩子吃早餐，他便匆匆離開了家門。一路上擔心著孩子有沒有吃飯，會不會哭，心老是放不下。即使抵達了出差地點，也不時打電話回家。可孩子總是很懂事地要他不要擔心。然而因為心裡牽掛不安，便草草處理完事情，踏上歸途。回到家時孩子已經熟睡了，他這才松了一口氣。旅途上的疲憊，讓他全身無力。正準備就寢時，突然大吃一驚：棉被下麵，竟然有一碗打翻了的泡麵！「這孩子！」他在盛怒之下，朝熟睡中的兒子的屁股，一陣狠打。「為什麼這麼不乖，惹爸爸生氣？你這樣調皮，把棉被弄？要給誰洗？」 這是妻子過世之後，他第一次體罰孩子。「我沒有......」孩子抽抽咽咽地辯解著：「我沒有調皮，這......這是給爸爸吃的晚餐。」原來孩子為了配合爸爸回家的時間，特地泡了兩碗泡面，一碗自己吃，另一碗給爸爸。可是因為怕爸爸那碗面涼掉，所以放進了棉被底下保溫。爸爸聽了，不發一語地緊緊抱住孩子。看著碗裡剩下那一半已經泡漲的泡面： 「啊 ！孩子，這是世上最...最美味的泡面啊！」世上最美味的泡面孩子即使再年幼，也有他們的尊嚴，如果父母發現錯怪了孩子，要勇敢向他們說：「對不起！」。'
    },
    {
        "id": 2,
        "title": "便當裡的頭髮",
        "label": "感人故事",
        "content": '在那個貧困的年代裡，很多同學往往連帶個像樣的便當到學校上課的能力都沒有，我鄰座的同學就是如此。他的飯菜永遠是黑黑的豆豉，我的便當卻經常裝著火腿和荷包蛋，兩者有著天淵之別。而且這個同學，每次都會先從便當裡撿出頭髮之後，再若無其事地吃他的便當。這個令人渾身不舒服的發現一直持續著。  「可見他媽媽有多邋遢，竟然每天飯裡都有頭髮。」同學們私底下議論著。為了顧及同學自尊，又不能表現出來，總覺得好骯髒，因此對這同學的印象，也開始大打折扣。有一天學校放學之後，那同學叫住了我：「如果沒什麼事就去我家玩吧。」雖然心中不太願意，不過自從同班以來，他第一次開口邀請我到家裡玩，所以我不好意思拒絕他。  隨朋友來到了位於漢城最陡峭地形的某個貧民村。  「媽，我帶朋友來了。」聽到同學興奮的聲音之後，房門打開了。他年邁的母親出現在門口。  「我兒子的朋友來啦，讓我看看。」 但是走出房門的同學母親，只是用手摸著房門外的樑柱。原來她是雙眼失明的盲人。  我感覺到一陣鼻酸，一句話都說不出來。 同學的便當菜雖然每天如常都是豆豉，卻是眼睛看不到的母親，小心翼翼幫他裝的便當，那不只是一頓午餐，更是母親滿滿的愛心，甚至連摻雜在裡面的頭髮，也一樣是母親的愛。  便當裡的頭髮  先入為主的觀念，  往往影響人一生的格局，  多觀察、多探討，  會有更多意外的發現。  '
    }];

//index
Vue.component('card-content', {
    props: ['post'],
    template: '<div class="card article-card">' +
        '<div class="row no-gutters card-body">' +
        '<div class="col-md-2">' +
        '<div class="HotIssueImg">' +
        '<img src="./imgs/qq.png" class="img-article">' +
        '</div>' +
        '</div>' +
        '<div class="col-md-10">' +
        '<div class="right-article">' +
        '<h5 class="card-title">{{post.title}}</h5>' +
        '<h6 class="card-subtitle mb-2 text-muted">{{post.label}}</h6>' +
        '<p class="card-text">{{post.content}}</p>' +
        '</div>' +
        '</div>' +
        '</div>' +
        '<div class="author">' +
        '<div class="author-name-time">{{post.name}} {{post.time}}</div>' +
        '<i class="far fa-eye"></i>' +
        '<div style="color:#919191">{{post.view}}</div>' +
        '</div>' +
        '<div class="card-footer">' +
        '<a href="content.html" class="card-link">繼續閱讀</a>' +
        '<a href="#" class="card-link">加入收藏</a>' +
        '<a href="#" class="card-link">好文分享</a>' +
        '</div>' +
        '</div>'
});
Vue.component('loud-content', {
    props: ['loud'],
    template: '<div class="MessengeCard">' +
        '<div class="ImgWithAuthor">' +
        '<img src="./imgs/project_photo2.jpg" class="ImgAuthor">' +
        '<u>{{loud.name}}</u>' +
        '</div>' +
        '<div class="PushMessengeText">' +
        '{{loud.messenge}}' +
        '</div>' +
        '<div class="PushTime">{{loud.time}}</div><hr>' +
        '</div>'
})
Vue.component('btn-send', {
    template: `<div class="form-group textareaMessenge"> 
        <label for="exampleFormControlTextarea1">發送訊息：</label> 
        <textarea class="form-control loud-say-textarea" rows="3" 
        v-on:input="$emit('input', $event.target.value)"></textarea>
        <button type="button" class="btn btn-warning loud-say-button" v-on:click="$emit('enlarge-text')">送出</button>
        </div>`

})
//AddArticle
Vue.component('addarticle-btn', {
    template: `<button type="submit" class="btn btn-danger col-lg-2 float-right" v-on:click="$emit('get-inputvalue')">提交</button>`
})
//實體化

var components_demo = new Vue({
    el: '#components-demo,#addarticle',
    data: {
        posts: [
            {
                id: 1,
                title: '世上最美味的泡麵',
                label: "感人故事",
                content: '他是個單親爸爸，獨自撫養一個七歲的小男孩。每當孩子和朋友玩耍受傷回來，他對過世妻子留下的缺憾，便感受尤深，心底不免傳來陣陣悲涼的低鳴。這是他留下孩子出差當天發生的事。因為要趕火車，沒時間陪孩子吃早餐，他便匆匆離開了家門。一路上擔心著孩子有沒有吃飯，會不會哭，心老是放不下。即使抵達了出差地點，也不時打電話回家。可孩子總是很懂事地要他不要擔心。然而因為心裡牽掛不安，便草草處理完事情，踏上歸途。回到家時孩子已經熟睡了，他這才松了一口氣。旅途上的疲憊，讓他全身無力。正準備就寢時，突然大吃一驚：棉被下麵，竟然有一碗打翻了的泡麵！「這孩子！」他在盛怒之下，朝熟睡中的兒子的屁股，一陣狠打。「為什麼這麼不乖，惹爸爸生氣？你這樣調皮，把棉被弄？要給誰洗？」 這是妻子過世之後，他第一次體罰孩子。「我沒有......」孩子抽抽咽咽地辯解著：「我沒有調皮，這......這是給爸爸吃的晚餐。」原來孩子為了配合爸爸回家的時間，特地泡了兩碗泡面，一碗自己吃，另一碗給爸爸。可是因為怕爸爸那碗面涼掉，所以放進了棉被底下保溫。爸爸聽了，不發一語地緊緊抱住孩子。看著碗裡剩下那一半已經泡漲的泡面： 「啊 ！孩子，這是世上最...最美味的泡面啊！」世上最美味的泡面孩子即使再年幼，也有他們的尊嚴，如果父母發現錯怪了孩子，要勇敢向他們說：「對不起！」。',
                name: '北投幫竹鼠',
                time: new Date().toLocaleString(),
                view: '123858',
            },
            {
                id: 2,
                title: '便當裡的頭髮',
                label: '感人故事',
                content: '在那個貧困的年代裡，很多同學往往連帶個像樣的便當到學校上課的能力都沒有，我鄰座的同學就是如此。他的飯菜永遠是黑黑的豆豉，我的便當卻經常裝著火腿和荷包蛋，兩者有著天淵之別。而且這個同學，每次都會先從便當裡撿出頭髮之後，再若無其事地吃他的便當。這個令人渾身不舒服的發現一直持續著。  「可見他媽媽有多邋遢，竟然每天飯裡都有頭髮。」同學們私底下議論著。為了顧及同學自尊，又不能表現出來，總覺得好骯髒，因此對這同學的印象，也開始大打折扣。有一天學校放學之後，那同學叫住了我：「如果沒什麼事就去我家玩吧。」雖然心中不太願意，不過自從同班以來，他第一次開口邀請我到家裡玩，所以我不好意思拒絕他。  隨朋友來到了位於漢城最陡峭地形的某個貧民村。  「媽，我帶朋友來了。」聽到同學興奮的聲音之後，房門打開了。他年邁的母親出現在門口。  「我兒子的朋友來啦，讓我看看。」 但是走出房門的同學母親，只是用手摸著房門外的樑柱。原來她是雙眼失明的盲人。  我感覺到一陣鼻酸，一句話都說不出來。 同學的便當菜雖然每天如常都是豆豉，卻是眼睛看不到的母親，小心翼翼幫他裝的便當，那不只是一頓午餐，更是母親滿滿的愛心，甚至連摻雜在裡面的頭髮，也一樣是母親的愛。  便當裡的頭髮  先入為主的觀念，  往往影響人一生的格局，  多觀察、多探討，  會有更多意外的發現。',
                name: '難北投幫竹鼠',
                time: new Date().toLocaleString(),
                view: '8545',
            }
        ]
    },
    methods: {
        clickget: function () {
            title = $('#titleInput').val()
            content = $('#postInput').text()
            tag = $('#tagInput').val()
            var a = 1
            for (var i = 0; i < this.posts.length; i++) {
                a++;
            }
            this.posts.push({ id: a, title: title, label: tag, content: content, name: 'haohao', time: new Date().toLocaleString(), view: '0' })
            alert('成功新增')
        }
    }
})
var components_demo2 = new Vue({
    el: '#components-demo2',
    data: {
        searchText: '',
        posts: [
            {
                id: 1,
                name: 'JackRobin',
                messenge: '聽說白竹鼠大大發表新的文章了!',
                time: new Date().toLocaleString()
            },
            {
                id: 2,
                name: 'Banana',
                messenge: '真的嘛!那我要趕快去看看',
                time: new Date().toLocaleString()
            }
        ]
    },
    methods: {
        click: function () {
            x = this.searchText
            var a = 1
            for (var i = 0; i < this.posts.length; i++) {
                a++;
            }
            this.posts.push({ id: a, name: 'haohao', messenge: x, time: new Date().toLocaleString() })
        }
    }

})

const vm = new Vue({
    el: '#app',
    data: {
      results: []
    },
    mounted() {
      axios.get("")
      .then(response => {this.results = response.data.results})
    }
  });