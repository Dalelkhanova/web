from django.shortcuts import render
from django.http.response import JsonResponse
from .models import Company, Vacancy


def company_list(request):
    companies = Company.objects.all()
    companies_json = [company.to_json() for company in companies]
    return JsonResponse(companies_json, safe=False)


def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        raise JsonResponse({'error': str(e)})
    return JsonResponse(company.to_json())


def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        raise JsonResponse({'error': str(e)})
    vacancies = company.vacancies.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_list(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)


def vacancy_detail(request, id):
    try:
        company = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        raise JsonResponse({'error': str(e)})
    return JsonResponse(company.to_json())


def vacancy_top(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]
    vacancies_json = [v.to_json() for v in vacancies]
    return JsonResponse(vacancies_json, safe=False)
