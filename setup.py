from setuptools import find_packages, setup

from lbadminlte import __version__

setup(
    name='django-lb-adminlte',
    version=__version__,
    url='https://github.com/vicalloy/django-lb-adminlte',
    author='vicalloy',
    author_email='vicalloy@gmail.com',
    description="Reusable AdminLTE templates library for Django",
    license='BSD',
    packages=find_packages(exclude=['tests']),
    include_package_data=True,
    install_requires=[
        'Django>=2.2',
        'django-crispy-forms>=1.6',
        'django-lbutils>=1.1.0',
        'django-compressor>=2.1.1',
        'django-bower>=5.2.0',
    ],
    extras_require={
        'tests': [
            'coverage',
            'flake8==3.7.9',
            'isort',
        ]
    },
    classifiers=[
        'Development Status :: 4 - Beta',
        'Environment :: Web Environment',
        'Framework :: Django',
        'Intended Audience :: Developers',
        'License :: OSI Approved :: MIT License',
        'Operating System :: OS Independent',
        'Programming Language :: Python',
        'Programming Language :: Python :: 3',
        'Programming Language :: Python :: 3.5',
        'Programming Language :: Python :: 3.6',
        'Programming Language :: Python :: 3.7',
        'Programming Language :: Python :: 3.8',
        'Topic :: Software Development :: Libraries :: Python Modules',
    ],
)
