class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
  
        if @user
            signin(@user)
            render "api/users/show"
        else
            render json: ["Invalid email/password combination"], status: 401
        end
    end
  
    def destroy
        @user = current_user
        if logged_in?
            logout
            render "api/users/show"
        else
            render json: ["Can't find anyone to sign out :("], status: 404
        end
    end
end