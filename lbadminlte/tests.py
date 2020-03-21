from django.test import TestCase
from django.urls import reverse


class LBAdminLTETests(TestCase):
    def test_base_template(self):
        resp = self.client.get(reverse('base'))
        self.assertEqual(resp.status_code, 200)

    def test_base_ext_template(self):
        resp = self.client.get(reverse('base_ext'))
        self.assertEqual(resp.status_code, 200)

    def test_form_template(self):
        resp = self.client.get(reverse('form'))
        self.assertEqual(resp.status_code, 200)
