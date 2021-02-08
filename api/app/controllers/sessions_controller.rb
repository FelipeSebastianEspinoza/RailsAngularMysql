class SessionsController < Devise::SessionsController
    respond_to :json
    private
    def index
        @users = User.all
        render json: @users
        puts("user index")
      end
    def respond_with(resource, _opts = {})
     render json: resource
    puts(  json: resource)
    end

    def respond_to_on_destroy
        head :no_content
    end
    
    def show
        puts("user show")
        render json: @user
        puts(@user)
    end
end
