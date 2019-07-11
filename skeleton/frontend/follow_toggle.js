class FollowToggle {
    constructor(el) {
        this.$el = $(el);
        this.userId = this.$el.data("userId");
        this.followState = this.$el.data("initialFollowState");
        
        this.render();
        this.handleClick();
    };

    render () {
        if (this.followState === 'unfollowed') {
            this.$el.html("Follow!");
        } else if (this.followState === 'followed') {
            this.$el.html("Unfollow!");
        }
    };

    // should we be using a promise for this? are we passing a function into the success property? 
    // 
    handleClick() {
        this.$el.on("click", (event) => {
            event.preventDefault();
            if (this.followState === 'unfollowed') {
                $.ajax({
                    type: "POST",
                    url: `/users/${this.userId}/follow`,
                    dataType: "json",
                    // data: this.$el.data('initialFollowState'), -- controller only needs the user_id from the request - passed in through route params
                    success: () => {
                        console.log("follow?");
                        this.followState = "followed";
                        this.render();
                    }
                })
                
            } else if (this.followState === 'followed') {
                $.ajax({
                    //some kind of delete requrest
                    type: "DELETE",
                    url: `/users/${this.userId}/follow`, 
                    dataType: "json",
                    // data:    
                    
                    success: () => {
                        console.log("UNFOLLOW?"),
                        this.followState = "unfollowed";
                        this.render();
                    },
                    error: () => console.log('fail')
                })
            }
        }); 
        
    };
}

module.exports = FollowToggle;