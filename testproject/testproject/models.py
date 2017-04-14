from django.db import models


class Leave(models.Model):
    start_on = models.DateTimeField('Start on')
    end_on = models.DateTimeField('End on')
    leave_days = models.DecimalField('Leave days', max_digits=5, decimal_places=1)

    actual_start_on = models.DateTimeField('Actual start on')
    actual_end_on = models.DateTimeField('Actual end on')
    actual_leave_days = models.DecimalField(
        'Actual leave days', max_digits=5, decimal_places=1)

    reason = models.TextField('Reason')

    class Meta:
        verbose_name = 'Leave'
        ordering = ["-start_on"]
        permissions = (
        )

    def __str__(self):
        return '%s days' % (self.leave_days, )
