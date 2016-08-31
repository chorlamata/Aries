class PostController{
    constructor(postView, requester,baseUrl,appKey){
        this._postView = postView;
        this._requester = requester;
        this._appKey = appKey;
        this._baseServiceUrl = baseUrl + "/appdata/" + appKey + "/posts/";
    }
    showCreatePostPage(data, isLoggedIn){
        this._postView.showCreatePostPage(data, isLoggedIn)
    }
    createPost(requestData){
        if(requestData.title.length<10){
            showPopup('error', "Post title must be at least 10 symbols");
            return;

        }
        if(requestData.content.length<10){
            showPopup('error', "Post content must be at least 50 symbols");
            return;

        }
        let requestUrl = this._baseServiceUrl;
        this._requester.post(requestUrl, requestData,
        function success(data) {
            showPopup('success', "You have successfully created a new post");
            redirectUrl("#/");
        });
        function error(data) {
            showPopup('error', "An error has occurred, whille attemptnig to create post.");
            redirectUrl("#/");

        }
    }
}