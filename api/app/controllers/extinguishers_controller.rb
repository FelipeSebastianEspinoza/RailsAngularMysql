class ExtinguishersController < ApplicationController
  before_action :set_extinguisher, only: [:show, :update, :destroy]
 
  # GET /extinguishers
  def index
    if params[:name]
      extinguishers = Extinguisher.where('name LIKE ?', "%#{params[:name]}%")
      
      @var = paginate  extinguishers 
      @var2 = [@var,extinguishers.count] 
      render json: @var2
    else
      extinguishers = Extinguisher.where(active: 'true')
      @var = paginate  extinguishers 
      @var2 = [@var,extinguishers.count] 
      render json: @var2
    end
  end

  # GET /extinguishers/1
  def show
     render json: @extinguisher
  end

  # POST /extinguishers
  def create
    @extinguisher = Extinguisher.new(extinguisher_params)

    if @extinguisher.save
      render json: @extinguisher, status: :created, location: @extinguisher
    else
      render json: @extinguisher.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /extinguishers/1
  def update
    if @extinguisher.update(extinguisher_params)
      render json: @extinguisher
    else
      render json: @extinguisher.errors, status: :unprocessable_entity
    end
  end

  # DELETE /extinguishers/1
  def destroy
    @extinguisher.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_extinguisher
      @extinguisher = Extinguisher.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def extinguisher_params
      params.require(:extinguisher).permit(:name, :status, :charge, :expiration, :active)
    end
end
