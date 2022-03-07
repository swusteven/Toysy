class Api::UsersController < ApplicationController
    def show
        @user = User.find(params[:id])
    end
        
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            Cart.create("user_id"=>@user.id)
            debugger
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

      
    private    
    def user_params
        params.require(:user).permit(:fname, :email, :password)
    end
end
