---
layout: default
---

# Data validation, report generate, and propogation of changes

any data used in a report should be copied, or at least a hash of any records used should be created in order to check for changes.
any generated reports sent to someone should maintain a list of the recipients
if data used in the generation of a report is modified, the report should be rerun, and all recipients should be notified.

data, at somepoint in time, should be locked.  A hash of the data should be generated.
Modifications should still be possible, but changes should be highly scruitinised.
It should be noted which user made the change and why.
Changes should be propogated in such a way that reports should be regenerated and recipients notified.

When importing data from a report, a hash of the imported record should be generated to compare for changes.
The report source should be stored, so that if notification that the report has changed has been received, it can be verified.
