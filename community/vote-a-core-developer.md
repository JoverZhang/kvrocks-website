---
id: vote-a-core-developer
title: Vote a new committer or PMC member
---

````mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
````

Apache Kvrocks™ PMC member should be responsible for assessing the contributions of candidates.

Like many Apache projects, Kvrocks welcome all contributions, including code contributions, documentation improvement, blog entries, guides for new users, public speeches, and enhancement of the project in various ways.

## Nominate new committer

New committer nomination could only be officially started by existing PMC members. If a new committer feels that he/she is qualified, he/she should contact any existing PMC member and discuss.
If this is agreed among some members of the PMC, the process will kick off.

## Initiate discussion in the community private mailing group

Any Kvrocks PMC member can initiate a voting discussion.

After PMC finds any valuable contributions from community contributors and obtains the consent of the candidate, they can initiate a discussion on Kvrocks' private mailing list.

In the discussion email, the proposer should clearly state the candidate's contributions and give the address for reviewing the corresponding contributions, so that everyone can discuss and analyze it. The discussion email is sent to `private@kvrocks.apache.org`. The discussion will last at least 72 hours. PMC members will fully express their views on the proposed email.

The following is a sample discussion email:

```text
[DISCUSS] [Nominee] for Kvrocks [Committer|PMC member]

I nominate [Nominee] as an Kvrocks [Committer|PMC member]

Judging from the contributions in recent months, [Nominee] has submitted many
implementations[1][2] to the project and improved the management module for
the project.

During the optimization and improvement period of the project, it is hoped that
more people will participate in the actual project optimization and improvement,
to let the project more perfect and easier to use.

So I nominated [Nominee] as a [Committer|PMC member] of the Kvrocks project.

[1] https://github.com/apache/kvrocks/issues/created_by/[Nominee GitHub Username]
[2] https://github.com/apache/kvrocks/commits?author=[Nominee GitHub Username]
```

## Initiate vote in the community private mailing group

If the discussion email does not receive the disagreement information within the specified time, the poll initiator needs to initiate a Committer or PMC election vote on Kvrocks' private mailing list.

The voting email is sent to `private@kvrocks.apache.org` for at least 72 hours, and at least 3 votes +1 passed; if less than 3 votes or 1 veto (-1 vote), the vote will fail; if a veto is initiated, the voter needs to EXPLAIN the reason for the veto clearly so that everyone can understand and know. A veto without explanation does not count.

The following is a sample poll email:

```text
[VOTE] [Nominee] as a Kvrocks [Committer|PMC member]

Judging from contributions in recent months, [Nominee] has submitted many
implementations[1][2] to the project and improved the management module for
the project.

During the optimization and improvement period of the project, it is hoped that
more people will participate in the actual project optimization and improvement,
to let the project more perfect and easier to use.

I think making him/her a [Committer|PMC member] will be a recognition of his/her
outstanding work for Kvrocks. So, I am happy to call VOTE to accept [Nominee] as a
Kvrocks [Committer|PMC member]

Voting will continue for at least 72 hours or until the required number of votes is reached.

Please vote accordingly:

 [ ] +1 approve
 [ ] +0 no opinion
 [ ] -1 disapprove with the reason

Here are some links to his/her contributions to Kvrocks:

[1] Issues: https://github.com/apache/kvrocks/issues/created_by/[Nominee GitHub Username]
[2] PRs   : https://github.com/apache/kvrocks/pulls/created_by/[Nominee GitHub Username]
```

## Feedback on voting results

After the voting email is over, the initiator of the vote needs to remind the voting end in the second [VOTE] email; at the same time, the initiator of the vote needs to initiate a vote summary email, and the summary email is sent to `private@kvrocks.apache.org`.

The following is a sample vote summary email:

```text
[RESULTS][VOTE] [Nominee] as a Kvrocks[Committer|PMC member]

Hi everyone,

The vote for "[Nominee] as a Kvrocks [Committer/PMC member]" has PASSED and closed now.

The result is as follows:

3 PMC members +1 Votes
- aaa
- bbb
- ccc

Vote thread: https://lists.apache.org/thread/aaaaaxxxx

Then I'm going to invite [Nominee] to join us.

Thanks for everyone's support!
```

Note: If it is not passed, the result is "The vote for "[Nominee] as a Kvrocks [Committer|PMC member]" has FAILED and closed now."

## Initiate invitation email

After the result summary email is sent, the poll initiator must send an invitation email to the candidates.

The invitation email is sent to the invitee with a CC to `private@kvrocks.apache.org`; the invited candidate must reply to accept or decline the invitation through the specified email address.

The following is an example of an email inviting candidates:

<Tabs>
  <TabItem value="committer" label="Committer" default>

```text
Subject: Invitation to become Kvrocks committer: [Invitee name]

Hi [Invitee name],

The Kvrocks Project Management Committee (PMC)

Hereby, we offer you committer privileges to the project.
These privileges are offered on the understanding that you'll use them
reasonably and with common sense. We like to work on trust
rather than unnecessary constraints.

Being a committer enables you to more easily make
changes without needing to go through the patch
submission process.

Being a committer does not require you to
participate any more than you already do. It does
tend to make one even more committed.  You will
probably find that you spend more time here.

Of course, you can decline and instead remain as a
contributor, participating as you do now.

This personal invitation is a chance for you to accept or decline in private.
Please let us know in reply to this message whether you accept or decline.

If you accept, you will need an Apache account (ID) with privileges.
Please follow these instructions.

A. If you already have an ICLA on file:

    1. If you already have an Apache account, let us know your ID, and we
will grant you privileges on the project repositories.

    2. If you have previously sent an ICLA, let us know the email address
and public name used on the ICLA and your preferred Apache ID, and
we will request your account.

    3. If the email address on the previously submitted ICLA is no longer
valid, let us know the email address and public name used on the new ICLA,
and your preferred Apache ID. Continue to step B below and file your new ICLA.

Look to see if your preferred ID is already taken at
https://people.apache.org/committer-index.html

B. If there is not already an ICLA on file, you need to submit an ICLA:

    1. Details of the ICLA and the forms are found
    through this link: https://www.apache.org/licenses/#clas

    2. Instructions for its completion and return to
    the Secretary of the ASF are found at
    https://www.apache.org/licenses/contributor-agreements.html#submitting

    Do not copy the project or any other individual on your message
    to Secretary, as the form contains Personally Identifiable Information
    that should be kept private.

    3. When you complete the ICLA form, be sure to include in the form
    the Apache Kvrocks project and choose a
    unique Apache ID. Look to see if your preferred
    ID is already taken at
    https://people.apache.org/committer-index.html
    This will allow the Secretary to notify the PMC
    when your ICLA has been recorded.

When recording of your ICLA is noted, you will
receive a follow-up message with the next steps for
establishing you as a committer.
```

  </TabItem>
  <TabItem value="pmc-member" label="PMC Member">

```text
Subject: Invitation to become Kvrocks PMC member: [Invitee name]

Hi [Invitee name],

The Kvrocks Project Management Committee (PMC)

Hereby, we offer you membership in the PMC, and committer privileges
to the project if you do not have already.

These privileges are offered on the understanding that you'll use them
reasonably and with common sense. We like to work on trust
rather than unnecessary constraints.

Being a PMC member enables you to guide
the direction of the project.

Being a committer enables you to more easily make
changes without needing to go through the patch
submission process.

Being a PMC member does not require you to
participate any more than you already do. It does
tend to make one even more committed.  You will
probably find that you spend more time here.

Of course, you can decline and instead remain as a
contributor, participating as you do now.

This personal invitation is a chance for you to accept or decline in private.
Please let us know in reply to this message whether you accept or decline.

If you accept, you will need an Apache account (ID) with privileges.
Please follow these instructions.

A. If you already have an ICLA on file:

    1. If you already have an Apache account, let us know your ID, and we
will grant you privileges on the project repositories.

    2. If you have previously sent an ICLA, let us know the email address
and public name used on the ICLA and your preferred Apache ID, and
we will request your account.

    3. If the email address on the previously submitted ICLA is no longer
valid, let us know the email address and public name used on the new ICLA,
and your preferred Apache ID. Continue to step B below and file your new ICLA.

Look to see if your preferred ID is already taken at
https://people.apache.org/committer-index.html

B. If there is not already an ICLA on file, you need to submit an ICLA:

    1. Details of the ICLA and the forms are found
    through this link: https://www.apache.org/licenses/#clas

    2. Instructions for its completion and return to
    the Secretary of the ASF are found at
    https://www.apache.org/licenses/contributor-agreements.html#submitting

    Do not copy the project or any other individual on your message
    to Secretary, as the form contains Personally Identifiable Information
    that should be kept private.

    3. When you complete the ICLA form, be sure to include in the form
    the Apache Kvrocks project and choose a
    unique Apache ID. Look to see if your preferred
    ID is already taken at
    https://people.apache.org/committer-index.html
    This will allow the Secretary to notify the PMC
    when your ICLA has been recorded.

When recording of your ICLA is noted, you will
receive a follow-up message with the next steps for
establishing you as a committer.
```

  </TabItem>
</Tabs>

## Processing after accepting the invitation

### Newly add a committer

Create an Apache account and add the candidate account to the project. After the candidate accepts the invitation, if the candidate does not have an apache email account, the voting initiator needs to assist the candidate to create an Apache account according to the guidelines.

When signing the ICLA, the candidate needs to write the project name of "Apache Kvrocks" in the "notify project:" column, so that the candidate account will be added to the list of corresponding project personnel by Apache.

The voting initiator needs to add project team members, open a permission account for the Apache project, and confirm that the candidate's Apache account has been added to the project address: http://people.apache.org/phonebook.html?podling=kvrocks.

### Newly add a PMC member

Once the candidate accepts the invitation, we can use the [Whimsy Roster](https://whimsy.apache.org/roster/committee/kvrocks) tool to do everything. It automatically sends out the NOTICE email to the board and private email list. After that, please remember to remind the candidate to subscribe to the private email list.

## ANNOUNCE to the community

After the above steps are completed, the vote initiator must send a notification email to the `dev@kvrocks.apache.org` mail group. The following is a sample notification email:

```text
[ANNOUNCE] New [Committer|PMC member]: [Nominee]

Hi everyone,

The Project Management Committee(PMC) for Apache Kvrocks has invited [Nominee] to become a [Committer|PMC member] and we are pleased to announce that he/she has accepted.

[Nominee] is being active in the Kvrocks community, and we are glad to see his/her more interactions with the community in the future.

Welcome [Nominee], and please enjoy your journey.:)

Thanks!
```

At this point, the entire process is completed, and the candidate officially becomes a Committer or PMC member of the project.
