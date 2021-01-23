require "test_helper"

class ExtinguishersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @extinguisher = extinguishers(:one)
  end

  test "should get index" do
    get extinguishers_url, as: :json
    assert_response :success
  end

  test "should create extinguisher" do
    assert_difference('Extinguisher.count') do
      post extinguishers_url, params: { extinguisher: { charge: @extinguisher.charge, expiration: @extinguisher.expiration, name: @extinguisher.name, status: @extinguisher.status } }, as: :json
    end

    assert_response 201
  end

  test "should show extinguisher" do
    get extinguisher_url(@extinguisher), as: :json
    assert_response :success
  end

  test "should update extinguisher" do
    patch extinguisher_url(@extinguisher), params: { extinguisher: { charge: @extinguisher.charge, expiration: @extinguisher.expiration, name: @extinguisher.name, status: @extinguisher.status } }, as: :json
    assert_response 200
  end

  test "should destroy extinguisher" do
    assert_difference('Extinguisher.count', -1) do
      delete extinguisher_url(@extinguisher), as: :json
    end

    assert_response 204
  end
end
