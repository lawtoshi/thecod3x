---
description: By Jason Schwartz, Published Jul 13, 2022
---

# U.S. Tax Considerations for Art NFT Investors

<figure><img src="../.gitbook/assets/B-3-A-Rhunter-1.png" alt=""><figcaption><p>Credit: <a href="https://twitter.com/B3Rhunter">B(3,A)Rhunter</a></p></figcaption></figure>

People sure have gotten cultured since blockchains introduced us to digital ownership. Every day, it seems countless new wallets with _\_vault.eth_ suffixes start accumulating PFPs, ArtBlocks Curateds, or other NFTs of digital images (collectively referred to as “art NFTs”). U.S. taxpayers sit behind many of those wallets, either as direct owners or through a DAO or investment fund. Before heeding punk6529’s invocation to 'seize the memes of production', here are some tax things you should know about investing in art NFTs.

## U.S. Investors <a href="#us-investors" id="us-investors"></a>

### A. Gain or Loss <a href="#a-gain-or-loss" id="a-gain-or-loss"></a>

#### i. General <a href="#i-general" id="i-general"></a>

Gain or loss from the sale of an art NFT held for investment is long-term capital gain or loss if you held the NFT for more than one year and, otherwise, is short-term capital gain or loss. Individuals are entitled to preferential long-term capital gains rates but can deduct net capital losses against only 3,000 USD of ordinary income each year, carrying the remainder forward indefinitely. Individuals are denied losses on sales of property held for personal use instead of investment. Don’t ever tell the IRS you’re only in it for the art.

#### ii. Collectibles or Not? <a href="#ii-collectibles-or-not" id="ii-collectibles-or-not"></a>

The long-term capital gains rate preference depends on whether the NFT is a 'collectible' for U.S. tax purposes. Collectibles gains are taxed at a maximum long-term capital gains rate of 28%, while other long-term capital gains are taxed at a maximum rate of 20%. Most long-term holders would prefer to avoid collectibles gain. There are two arguments for avoiding collectibles gain on your art NFT. The first is that collectibles must be tangible while art NFTs are intangible. The tax code defines a collectible to mean, in relevant part, 'any work of art...or any other tangible personal property specified by Treasury'. The definition seems to presuppose tangibility, which would mean that virtually all art NFTs are out. It’s unknown whether the IRS would agree with this argument.

The second argument is that your art NFT isn’t a 'work of art'. The tax code doesn’t define work of art, so a court would likely look to the term’s commonly understood meaning. With due respect to mfers, some judges probably could be convinced that a JPEG of a stick figure isn’t a work of art. It would be harder to disclaim photography or Fidenzas as works of art.

Some art NFTs might represent membership interests in a club or investment partnership. The tax law doesn’t deal well with hybrid classifications and usually forces the taxpayer to treat an asset in accordance with its primary purpose. An art NFT whose primary purpose is to function as a rewards club membership, like PROOF Collective or Moonbirds, is probably taxed as a regular capital asset. However, one whose primary purpose is to allow members to share or collectively govern a common treasury like Nouns could require further consideration (see II.A.ii., below).

The treatment of ERC-20 tokens that reference NFTs is unclear. The tax code treats gain on the sale of an interest in a partnership as collectibles gain to the extent attributable to collectibles. However, it’s unclear whether ERC-20 tokens that represent fractionalized or indirect interests in NFTs (like NFTX tokens) are interests in partnerships for U.S. tax purposes.

#### iii. Cost Basis and Amount Realized <a href="#iii-cost-basis-and-amount-realized" id="iii-cost-basis-and-amount-realized"></a>

When you buy an NFT with ETH, you are treated as if you sold that ETH (including gas incurred on the purchase) for U.S. dollars and then used those dollars to buy the NFT. If you have multiple lots of ETH and documented the date and time you acquired each lot, you are permitted to specifically identify which lot you used to buy the NFT; otherwise, you are deemed to adopt a first in, first out method. You recognize taxable gain or loss on the deemed ETH sale and take a cost basis in the NFT equal to its U.S. dollar value at the time of purchase.

You can’t add gas incurred outside of the purchase, like gas spent to transfer the NFT to your vault, to your NFT’s basis. And, as discussed below, you normally can’t deduct gas either. When you sell your NFT, you calculate your gain or loss by deducting your cost basis in the NFT from the U.S. dollar value of the ETH or other tokens received on the sale. You take a fair market value basis in the tokens received. It could be difficult to determine fair market value in an NFT-for-NFT exchange, and taxpayers often report an intraday OpenSea floor price.

#### iv. Netting Gains and Losses <a href="#iv-netting-gains-and-losses" id="iv-netting-gains-and-losses"></a>

Here are the steps to calculate your net capital gains each year:

* Offset the same types of gains and losses against each other — that is, your 'regular' long- term capital gains (i.e., 20% maximum individual rate) against your regular long-term capital losses, your long-term collectibles gains (i.e., 28% maximum individual rate) against your long-term collectibles losses, and your short-term gains (i.e., ordinary rate) against your short-term losses.
* Offset your net 20% gains or losses against your net 28% gains or losses.
* Offset your short-term gains or losses against the result from the second bullet above.
* Carry-forwards of net losses retain their short-term or long-term character.

#### v. Wash Sales <a href="#v-wash-sales" id="v-wash-sales"></a>

Because individuals can offset capital gains with capital losses, but can offset ordinary income with only 3,000 USD of net capital losses each year, it could make sense to try to recognize capital losses in years that you have capital gains to offset. One way to do that is to swap out of a losing investment for a short period before swapping back in. The tax code’s 'wash sale' rules limit taxpayers’ ability to take a loss on a sale of 'stock or securities' if they acquire substantially identical stock or securities within 30 days of the sale. ETH, BTC, and most art NFTs are not stock or securities under those rules. However, LP tokens, aTokens, cTokens, and other tokens that represent shares in, or governance over, a treasury could be stock or securities.

Even if the wash sale rules don’t apply, the IRS could try to disregard a token sale and repurchase within 30 days on the theory that the transactions lacked 'economic substance', unless the taxpayer stayed out of the position for a meaningful period of time. What’s meaningful is anyone’s guess, but it’s probably a lot less than 30 days in the current volatile environment.

Finally, swapping from one token to another that is not materially different from it, like ETH to wETH, shouldn’t be a taxable event, and so shouldn’t trigger a capital loss.

### B. Airdrops <a href="#b-airdrops" id="b-airdrops"></a>

Normally, you’re taxed at ordinary rates on the fair market value of an airdropped token at the time you exercise dominion and control over it. Spam isn’t taxed if you don’t move it or have any intention to ever do so. If you do claim an airdrop, determining its fair market value is likely to be difficult. Again, taxpayers often report an intraday OpenSea floor price.

There are arguments why some airdrops shouldn’t be taxed. First, airdrops that you anticipated when you bought the NFT might have been 'part of the package'. There should be a concrete plan for the airdrop, not a vague suggestion on a roadmap. For example, if you bought in anticipation of an upcoming snapshot of eligible airdrop recipients, you might be able to allocate your basis between the NFT and the airdrop. One precedent for this would be a revenue ruling where the IRS let the purchaser of a pregnant cow allocate cost basis between the cow and calf, based on the premium paid for the cow’s pregnancy. Second, some (but not many) airdrops might be gifts. Gifts must be motivated by detached and disinterested generosity and made out of respect, admiration, charity or like impulses and not out of moral or legal duty or in anticipation of an economic benefit. Airdrops from artists to their most fervent collectors might fall within that definition.

### C. Deductions <a href="#c-deductions" id="c-deductions"></a>

A U.S. taxpayer’s ability to deduct expenses largely depends on whether they are a 'trader' or an 'investor'. It’s extremely difficult to be a trader unless it’s your full-time job and your portfolio undergoes significant turnover. Most art NFT collectors are likely to be investors, not traders. Investors who are individuals can’t deduct their investment expenses, which include gas and any fees paid to an asset manager. They can’t take a worthlessness or abandonment deduction when an NFT goes to zero (but can claim a capital loss if they sell it). And they can’t deduct fat finger trades to an unknown wallet. Traders can.

Both investors and traders can deduct losses from phishing scams if the scam is illegal under local law and the transaction is 'entered into for profit', even if not in connection with a trading business. Again, don’t ever tell the IRS you’re only in it for the art.

## Collective Investments <a href="#collective-investments" id="collective-investments"></a>

Tax law generally treats a joint venture for profit as a business entity, even in the absence of a legal entity. Thus, multisig wallets and LLCs that invest in art NFTs are all business entities by default. I’ll call them art NFT funds. Business entities can be treated as partnerships or corporations for U.S. tax purposes. In general, art NFT funds are partnerships by default unless they have more than 100 owners and their interests are readily tradable, in which case they are corporations. (A safe harbor from corporate treatment exists for readily tradable partnerships with at least 90% 'passive' income, but art NFT gains don’t satisfy the statutory definition of passive.)

### A. Partnerships <a href="#a-partnerships" id="a-partnerships"></a>

#### i. U.S. Investors <a href="#i-us-investors" id="i-us-investors"></a>

U.S. partners in a partnership are taxed annually on their share of the partnership’s net income, gain, and loss, whether or not distributed. The partnership is required to provide this information on a Schedule K-1 to each U.S. partner. It seems likely that many small investment clubs investing through multisig wallets are not delivering K-1s. The failure to provide K-1s can subject the partnership to penalties, and doesn’t absolve U.S. partners of tax liability.

#### ii. Foreign Investors <a href="#ii-foreign-investors" id="ii-foreign-investors"></a>

Having foreign investors complicates matters when one or more decision-makers acts from within the United States. Foreigners generally are subject to U.S. tax on income from a 'U.S. trade or business' (a USTB). A partnership’s USTB taints its foreign investors. The tax is enforced through a withholding requirement at the partnership level so that, if a partnership is in a USTB and does not withhold on its foreign partners, the IRS can assess tax against the partnership.

U.S.-managed art NFT funds with foreign owners would be wise to significantly limit their NFT turnover to be able to take the position that they are investors, not traders. The threshold for trader in this context appears to be lower than the threshold for determining whether U.S. individuals can take business deductions. Art NFT funds with foreign owners also should think twice before investing in NFTs whose primary purpose is to allow members to share or collectively govern a common treasury. Those NFTs might, themselves, represent partnerships, whose USTB (if any) would taint the art NFT fund and, in turn, its foreign owners.

The tax code provides safe harbors whereby trading stocks, securities, or commodities generally is not a USTB. Although the safe harbors do not apply to NFTs, they might apply to ETH and other fungible tokens, enabling an art NFT fund to engage in some treasury management without being in a USTB.

### B. Corporations <a href="#b-corporations" id="b-corporations"></a>

Corporate treatment for an art NFT fund makes sense only if the fund (1) adopts a legal identity in a foreign jurisdiction that does not impose its own corporate income tax, like the Cayman Islands, and (2) avoids engaging in a USTB. Using a domestic corporation, or a foreign corporation that is engaged in a USTB, would be disastrous because it would result in an additional layer of U.S. corporate tax on earnings.

Foreigners tend to like corporate treatment where the above requirements are met because it further insulates them from USTB risk; if (contrary to expectations) the fund is engaged in a USTB, the fund owes tax, not the individual investors.

Corporate treatment is more of a mixed bag for U.S. investors. In general, they would need to make a special 'QEF election' on IRS Form 8621 and attach the form to their tax returns for the first year in which they hold an interest in the fund. Failure to do so could subject them to onerous penalties. The election would subject them pass-through taxation on the corporation’s earnings, similar to their consequences if the fund were a partnership, with three important caveats:

* **The good.** The calculation of those earnings would allow for the deduction of management fees and other investment expenses of the fund.
* **The bad.** If the fund incurs net losses in a year, those losses would not pass through to U.S. investors and would not carry forward. Instead, U.S. investors would recognize more loss (or less gain) when they eventually dispose of their interest in the fund.
* **The ugly.** If the fund is more than 50% owned by 10% U.S. shareholders, any 10% U.S. shareholder would not get the benefit of long-term capital gains rates.

In addition, setting up a foreign entity is more expensive and can impose additional tax filing obligations on U.S. investors.

## Taxes Are Hard; Hire an Advisor <a href="#taxes-are-hard-hire-an-advisor" id="taxes-are-hard-hire-an-advisor"></a>

None of the above is a substitute for careful planning with your own tax advisor, but I hope this article can help educate prospective NFT collectors about issues they should consider with qualified professionals. Taxes are complicated, even when all you’re doing is trading JPEGs.

[_Jason_](https://twitter.com/CryptoTaxGuyETH) _is a tax partner and co-head of the Digital Assets and Blockchain Practice at Fried, Frank, Harris, Shriver & Jacobson LLP._

_This article was originally published on_ [_BanklessDAO's Decentralized Law_](https://banklessdao.substack.com/i/61926380/us-tax-considerations-for-art-nft-investors) _and is reproduced here with the permission of the author._

_**This post is NOT subject to the Cod3x's CC BY 4.0 license. © 2022 Jason Schwartz.**_
