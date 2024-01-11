import json
import os
from setuptools import setup

def read_req_file(req_type):
    with open(f"requires-{req_type}.txt", encoding="utf-8") as fp:
        requires = (line.strip() for line in fp)
        return [req for req in requires if req and not req.startswith("#")]

with open('package.json') as f:
    package = json.load(f)

package_name = package["name"].replace(" ", "_").replace("-", "_")

setup(
    name=package_name,
    version=package["version"],
    author=package['author'],
    packages=[package_name],
    include_package_data=True,
    license=package['license'],
    description=package.get('description', package_name),
    install_requires=read_req_file("install"),
    python_requires=">=3.6",
    extras_require={
        "dev": read_req_file("dev"),
    },
    classifiers = [
        'Framework :: Dash',
        'Intended Audience :: Developers',
        'Development Status :: 3 - Alpha',
        'License :: OSI Approved :: GNU General Public License v3 (GPLv3)',
        'Programming Language :: Python :: 3 :: Only'
    ],
    options={
        'bdist_wheel': {
            'universal': True
        }
    }
)
