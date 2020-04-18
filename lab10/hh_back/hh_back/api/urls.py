from django.urls import path
from rest_framework_jwt.views import obtain_jwt_token
from .views import company_list, company_detail, CompanyVacancies, VacancyList, VacancyDetail

urlpatterns = [
	path('login/', obtain_jwt_token),
	path('companies/', company_list),
	path('companies/<int:company_id>/', company_detail),
	path('companies/<int:company_id>/vacancies/', CompanyVacancies.as_view()),
	path('vacancies/', VacancyList.as_view()),
	path('vacancies/<int:pk>/', VacancyDetail.as_view())

]