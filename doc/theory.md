

Contents:

Introduction
Acknowledgements
Identity
Nodes
Clearing and default
Reserves
Trustlines
Notification and reputation
Apps and contracts
The zero line(s)


## Introduction

This is an attempt to create a framework sufficiently complex to model (and simulate) markets with distributed information that allow for the creation of money like instruments (specifically 'credit/debt') without assuming a-priori the existence of centralized debt creating organisations like governments or banks (or the existence of global information).

This is also an attempt to imagine a substrate on which various 'games' can be defined. The optimal outward form (UI and rules) of such 'games' is something that would need to be discovered outside of the scope here, but ideally all such games could be defined on top of the basic structure described here. 

I am specifically interested in games which allow:
- the democratization of credit creation process
- for credit in the game to (nevertheless) retain value and be robust against shocks or boom/bust cycles
- for real value to be derived by participants of the game 
- for the experience of interacting with money/credit to be more gentle, and enjoyable (psychologically speaking)
- the celebration and acknowledgement of people that contribute to their community 
- the support of vulnerable people that need extra help

In the following I assume 'a-priori' the existence of 'tokens' or reserves that 'hold' value. These tokens could include bitcoin, pre-authorized credit card transactions, but could also be purely fictive amounts. For the discussion to proceed it is suggested that you think of these tokens as hard currency. However, having got to a certain point it should become clear that it would be possible - in certain types of game and only if desired - to do away with the value holding tokens and replace these with purely fictive (made up inside of the game) tokens for measurement of value.

##  Key elements

We imagine a directed, weighted graph with:

A set of  - N
A set ofreserves - R
A set ofNodes
 acknowledgements - A
A set of identities - I

A node has one or more identities
Acknowlegement are edges between /identities
Reserves are 'at'
## AcknowledgemenNodes
ts
 
An "acknowledgement" is strictly speaking an edge between two identities, though the identities can be thought of as just like labels or names on the .
An acknowledgement has:Nodes

- *ig*: the giver (an identity)
- *ir*: the receiver (an identity)
- *M*:  a message text (text, image or attachment)
- *xT*: the acknowledgement amount (x) denominated in token T 
- *vt*: a vesting time (time)

The last two properties are optional. The message text can be empty if there is an amount specified.

To be considered valid an acknowledgement must be made available via a "post" to some sort of pseudonomous public transport.

For instance, the tweet: "Thanks @joe for the help in the garden last tuesday 2h" would be a valid acknowledgement. (Where the h refers to a fictive 'hours' token).

A bitcoin transaction can also modeled as an acknowledgement however - this time a hard currency acknowledgement with a vesting time of zero, that was immediately exercized. 

It is not necessary for either sender or receiver to have signed up with any third party service before they send an acknowledgement. Nor is it necessary (though it may be easier) for the sender to have signed up with a third party in order for that third party to be able to validate that message. (See section on 'backed' acknowledgements below).

##  Identity 

An 'identity' is any form of meta data that establishes the identity of the sender (a post on a public timeline, a public/private key pair) and/or clearly identifies the intended recipient (for instance an @handle on twitter). 

#### Claiming identities

A node is considered to exist as soon as an acknowledgement pointing to it is created (and observed). A node may, in fact never make any signed statements using the identity pointing to it. Such 'unclaimed'  will have only one identity however.
A recipient node created in this way can be 'claimed' at aNodes
ny time by the identity by signing a special message establishing identity. 

As noted above neither sender or receiver need to have signed up for any third part apps. That said it is expected that most senders will have interacted with third party apps at some point. Receivers, by contrast, may often be first exposed to the overall concept when they receive their first acknowledgement. 

For instance a post "Thanks so much Joe for helping us move, here's a token to pay it forward" with an associated image and a link for more info on how to claim the token.

#### Merging identities 

Once a node has at least one signed identity that node can be merged with other  by making appropriate, signed public messages indicatig that both identities point to the same node. An identity may aNodes
lso repudiate another identity (causing a node split). 

The difference between nodes and identities is important because acknowledgements are from/to identities but reserves belong to nodes. 

#### Identity proxy 

Acknowledgements can also be sent via private message, but in this case some form of (potentially anonymized) public record must then be made available. For instance, a PM to a private facebook chat may be monitored by an app or bot that will then repost an anonymized representation of that acknowledgement with a signature proof indicating that the message was from the original sender (or at least that the sender trusted the app to post on their behalf).

## Nodes

A node has:
- *{i}*: 1 .. n identities 
- *B*: a balance sheet of acknowledgements received and given
- *R*: a reserve of hard currency tokens 
- *R'*: a balance sheet of trust lines (vested acknowledgements)
- *H*: a history of cleared acknowledgements or trust lines

While a node can be pseudonymous it is assumed, in this first iteration, that the balance sheet of acknowledgements, reserves and past history is publically visible, by appropriate querying of the public record. This enables reputation and credit scores to be built up for nodes.

## Clearing and default

If an acknowledgement has a token and a vesting date the sender is basically maing a 'promise to pay' on demand, at any time after the vesting date, the amount of token specified. 

In some cases (as explained below) this debt would be algorithmically cleared by crypto contracts linked to the acknowledgement. That is, at any time after the vesting date, the recipient has the right to transfer the associated token balance from the reserves of the node, provided that such reserves exist and that they can prove their ownership of the recipient identity appropriately (as specified in the contract)

#### Backed or unbacked acknowledgements

As noted above, tokens are optional in an acknowledgement. They can also be either 'hard' currency (like bitcoin) or 'fictive' tokens (like 'hours'). 

In the case of 'hard currency' promises third party actors can verify that a contract exists which is linked to a reserve sufficient to cover the 'promise to pay'. They might stamp or validate the message in such a case.

However, even if a message contains a 'hard currency' token it is not neccesary or required to verify the existence of actual hard currency or a contract linked to it. In such a case the app or the user may refuse to validate or discount the acknowledgement (see notification and reputation below), however the acknowledgement is no less valid. The 'hard currency' is, in this case, used solely as a measurement of value, much in the way that roman coins were used as a measure of value in debt instruments used in Medieval Europe long after the coins had passed out of circulation.

Another form of 'unbacked' token are 'fictive' tokens like "hours". In this case the promise to pay is a promise to do x hours of work in response to a request. Other forms of unbacked token 'a bottle of red wine', 'bags of lemons' or 'rides' etc might also be used (or invented) by people as methods of measurement.

Only acknowledgements with 'hard currency' tokens can be considered to 'backed'.

#### Clearing - Via acknowledgement circles

One of the primary innovation in this system is that there are two ways of 'clearing' an acknowledgment. Either a circle of reciprocity can be found, or the acknowledgement can be 'cleared' by payment of the debt with the specified token (if any). 

Specifically if a loop of still active acknowledgements is found, having roughly equal value, all of the relevant nodes in that loop can be offered the chance to 'write off' acknowledgements they have recieved in return for acknowledgements they have given. 

The idea is that people would cross off what they consider to be 'roughly equal' acknowledgements. They would also have visibility on the entire chain of acknowledgements and nodes involved (with a variable degree of anonymity) and in this way they could choose to veto or agree to acknowledgement chains based on their values as to how their 'money' is used. (For instance boycott any acknowledgement chains passing through arms companies or anonymous parties)

Especially in the case of 'fictive' tokens, to increase liquidity it would not be necessary that the token amounts be of exactly the same value or indeed that there are any tokens at all (in this case there would need to be reliance on the message text to find a chain of roughly equivalent acknowledgements)

The usual way to do such clearance would be automatically via an 'agent' or 'app' that can make judgements on behalf of the user but the user would have the option to choose what app to trust, and/or to review specific clearance requests. 

As a way to fund agents or apps, they could attempt to find loops where all parties would be happy to accept the trades on both sides, but there is an overall downward trend, thus allowing the app to insert itself into the chain and pocket the difference.

Prizes could be awarded for longest chain, most geographically distributed, or largest value of chains closed in this way. 

Clearing via acknowledgement circles would occur prior to those acknowledgements being vested. 

####  Clearance by payment (vesting/exercize) 

The other way that acknowledgements can be cleared is for them to vest. In the case of backed acknowledgements this is automatic and reduces the reserves of the giving node at that time. In the case of unbacked acknowledgements with a vesting time, this is technically considered a default. 

It is worth noting that even though an acknowledgement has vested it is not necessary for it to be exercized right away. 

#### Trust lines 

Vested acknowledgements dont have to be exercized right away. In the case of 'backed' acknowldgements this creates a 'trust line' essentially giving the recipient node a claim on the reserves of the giving node at any time after that. 

It may appear that it would make sense to immediately exercize all vested acknowledgements. In the case of strangers this is unarguably true, however in the case of neighbors or friends it could be argued that even strictly rationally speaking it would be a form of insurance to retain the unexercized trust line - because it creates an incentive to ensure the recipient is not going to need to exercize their trust line and thus reduce the reserves of the giving node and thus leaving it open is a form of insurance against unexpected events. 

#### Incentive to close the loop

It is in the interest of nodes to retain their reserves above their acknowledgements. (This is because of the multiplier effect and risk profile they are more valuable than any equivalently valued, still active, acknowledgements they have received). As a result nodes are incentivized to attempt to 'close the loop' with their outstanding acknowledgements (where they are the giver). For this reason they will want to use apps that can find and notify them, as a priority of requests for assistance from people who are able to help them build a chain back to the recipient of their outstanding acknowledgement/s. 

For example, if the recipient of their existing acknowledgement wants a thing of equivalent(ish) value, the giver is incentivized to provide that, if they can. 

#### Default 

If an acknowledgement has not been cleared by its vesting date then it is considered a default and removed from the list of 'active' acknowledgements. 

Default need not be a major problem for the giving node in question. However it will decrease the reputation (in terms of willingness of other nodes to interact with that node). 

It is also important for resilience of the system for acknowledgements that are not going to be, or cannot be, honored to be removed from consideration as early as possible. For this reason, resilience suggests vesting periods that are not too long (or too short). An acknowledgement with a very long vesting period, that has not been cleared after a long period, may be considered equivalent to a default for reputation calculation purposes.

It is also possible that acknowledgements dont have a vesting cliff but a vesting schedule so that older acknowledgements are discounted over time. Or equivalently, for reputation purposes older acknowledgements without a token or with a fictive token could simply become worth less over time. 

## Reserves

It is not 100% necessary for there to be any reserves in the system for it to function but they provide a way for potential receipients to be more confident about a counterparty where there is little other trust (they enable transactions across the boundary between trusted and untrusted counter parties). 

