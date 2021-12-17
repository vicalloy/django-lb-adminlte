test:
	cd testproject;python manage.py test lbadminlte

upload:
	python setup.py sdist --formats=gztar upload
