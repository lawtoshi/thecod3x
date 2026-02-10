# 1.02 - Federal Statutes

## Overview <a href="#overview" id="overview"></a>

The federal statutory framework governing cryptocurrency and digital assets in the United States consists primarily of statutes enacted long before the technology existed. Congress passed the Securities Act in 1933, the Commodity Exchange Act in 1936, and the Bank Secrecy Act in 1970 — decades before Bitcoin's 2009 launch. Yet these statutes, drafted for traditional financial instruments, have become the principal legal basis for federal crypto regulation.

This section is distinct from the agency-specific sections that follow (Sections 1.10–1.40). Those sections address how individual agencies — the SEC, CFTC, FinCEN, OCC, and others — have _interpreted and applied_ their statutory mandates to digital assets through regulations, guidance, and enforcement actions. This section addresses the statutes themselves: the text Congress enacted, the definitions it chose, the authority it delegated, and the penalties it prescribed.

Understanding the statutory framework is critical for three reasons. First, statutes define and constrain agency authority. An agency can regulate cryptocurrency only to the extent Congress authorized it to do so — a principle reinforced by the Supreme Court's 2024 decision in [_Loper Bright Enterprises v. Raimondo_](https://supreme.justia.com/cases/federal/us/603/369/), 144 S. Ct. 2244 (2024), which overruled _Chevron_ deference and requires courts to exercise independent judgment on questions of statutory authority. Second, statutes are harder to change than regulations. An executive order or agency guidance can be revised overnight; amending a statute requires bicameral passage and presidential signature. Third, the criminal statutes discussed below carry severe penalties — up to 25 years' imprisonment for securities fraud, 20 years for wire fraud and money laundering — making precise understanding of their scope essential for anyone operating in this space.

Congress has only recently begun enacting crypto-specific legislation. The Infrastructure Investment and Jobs Act (2021) imposed broker reporting requirements. In 2025, Congress passed the first standalone crypto bill — a Congressional Review Act resolution nullifying the IRS's DeFi broker rule — and the first comprehensive crypto regulatory framework, the GENIUS Act, establishing a national stablecoin regime. As of February 2026, comprehensive market structure legislation remains pending. The statutory landscape is therefore a hybrid: general-purpose statutes of considerable age, a handful of targeted crypto amendments, and proposed bills that would restructure federal jurisdiction over digital assets.

This section is organized by regulatory domain: securities, commodities, banking and anti-money laundering, tax, criminal law, and consumer protection, followed by sections on enacted crypto-specific legislation, proposed legislation, and statutory interpretation doctrines. Cross-references to relevant agency sections are provided throughout. _See_ Section 1.01 (Constitution) for the constitutional framework within which these statutes operate.

## Securities Statutes <a href="#securities-statutes" id="securities-statutes"></a>

### Securities Act of 1933 <a href="#securities-act-of-1933" id="securities-act-of-1933"></a>

#### Overview and Purpose <a href="#securities-act-overview" id="securities-act-overview"></a>

The Securities Act of 1933, [15 U.S.C. § 77a](https://www.law.cornell.edu/uscode/text/15/77a) et seq., was enacted to require disclosure to investors in connection with the public offering of securities and to prohibit fraud in the sale of securities. Often called the "truth in securities" law, it has two basic objectives: (1) require that investors receive financial and other significant information concerning securities being offered for public sale; and (2) prohibit deceit, misrepresentations, and other fraud in the sale of securities.

#### Definition of "Security" <a href="#definition-of-security" id="definition-of-security"></a>

Section 2(a)(1) of the Securities Act, [15 U.S.C. § 77b(a)(1)](https://www.law.cornell.edu/uscode/text/15/77b), defines "security" to include:

> any note, stock, treasury stock, security future, security-based swap, bond, debenture, evidence of indebtedness, certificate of interest or participation in any profit-sharing agreement, collateral-trust certificate, preorganization certificate or subscription, transferable share, **investment contract**, instrument commonly known as a "security," or certificate of interest or participation in, temporary or interim certificate for, receipt for, guarantee of, or warrant or right to subscribe to or purchase, any of the foregoing.

The term **"investment contract"** is not further defined in the statute. Its meaning has been supplied by judicial interpretation, most critically by the Supreme Court in [_SEC v. W.J. Howey Co._](https://supreme.justia.com/cases/federal/us/328/293/), 328 U.S. 293 (1946), which held that an investment contract exists when there is: (1) an investment of money, (2) in a common enterprise, (3) with a reasonable expectation of profits, (4) derived from the efforts of others. The Court emphasized that the test should focus on "economic reality," not form.

The "investment contract" prong is the primary statutory basis upon which the SEC has asserted jurisdiction over crypto tokens, initial coin offerings (ICOs), and digital asset transactions. Whether a given crypto token constitutes an investment contract under _Howey_ is the central legal question in virtually every SEC crypto enforcement action. For detailed analysis of the SEC's application of the _Howey_ test to digital assets, including the SEC's April 2019 [Framework for "Investment Contract" Analysis of Digital Assets](https://www.sec.gov/about/divisions-offices/division-corporation-finance/framework-investment-contract-analysis-digital-assets), _see_ Section 1.10 (SEC).

Major cases interpreting "investment contract" in the crypto context include:

- [_SEC v. Telegram Group Inc._](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2019cv09439/524448/227/), No. 1:19-cv-09439 (S.D.N.Y. 2020) — $1.7 billion Gram token offering held to be an unregistered securities offering; court treated the entire SAFT scheme as a single integrated offering.
- [_SEC v. LBRY, Inc._](https://www.courtlistener.com/docket/60441292/sec-v-lbry-inc/), No. 21-cv-260 (D.N.H. 2022) — LBC tokens held to be securities; "utility token" defense rejected; the court held that tokens with consumptive uses can still be securities.
- [_SEC v. Ripple Labs, Inc._](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2020cv10832/551082/973/), No. 1:20-cv-10832 (S.D.N.Y. 2023) — Institutional sales of XRP constituted investment contracts, but programmatic sales on exchanges did not; the token itself is not "in and of itself" a security. Final settlement reached May 2025; appeals withdrawn August 2025.
- [_SEC v. Terraform Labs Pte. Ltd._](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2023cv01346/594150/149/), No. 1:23-cv-01346 (S.D.N.Y. 2023) — Judge Rakoff rejected the _Ripple_ distinction, holding _Howey_ "makes no such distinction between purchasers"; $4.47 billion consent judgment.
- [_SEC v. Binance Holdings Ltd._](https://law.justia.com/cases/federal/district-courts/district-of-columbia/dcdce/1:2023cv01599/256060/248/), No. 1:23-cv-01599 (D.D.C. 2024) — Stablecoins fully backed and redeemable 1:1 are not investment contracts; dismissed with prejudice May 2025.

#### Registration Requirements <a href="#registration-requirements" id="registration-requirements"></a>

Section 5 of the Securities Act, [15 U.S.C. § 77e](https://www.law.cornell.edu/uscode/text/15/77e), prohibits the offer or sale of any security unless a registration statement has been filed with and declared effective by the SEC. The SEC has consistently taken the position that token sales qualifying as investment contracts under _Howey_ must comply with Section 5 registration requirements. _See_ Section 1.10 (SEC).

#### Exemptions from Registration <a href="#exemptions-from-registration" id="exemptions-from-registration"></a>

Several exemptions from registration have been used by crypto projects:

- **Regulation D** (Rules 506(b) and 506(c), [17 C.F.R. § 230.506](https://www.law.cornell.edu/cfr/text/17/section-230.506)): Permits sale to accredited investors without SEC registration. Widely used by crypto projects for private pre-sales and SAFT (Simple Agreement for Future Tokens) offerings. Telegram's $1.7 billion Gram offering was conducted under Reg D before the SEC obtained an injunction.
- **Regulation A+** ([17 C.F.R. § 230.251](https://www.law.cornell.edu/cfr/text/17/section-230.251) et seq.): Permits offerings of up to $75 million in a 12-month period (Tier 2). Requires SEC qualification of Form 1-A. Tokens qualified under Reg A+ are not restricted securities. Blockstack PBC became the first token issuer to receive Reg A+ qualification (2019.07.10).
- **Regulation Crowdfunding** ([17 C.F.R. § 227.100](https://www.law.cornell.edu/cfr/text/17/section-227.100) et seq.): Maximum $5 million in a 12-month period. Transactions must occur through an SEC-registered intermediary.
- **Regulation S** ([17 C.F.R. § 230.901](https://www.law.cornell.edu/cfr/text/17/section-230.901) et seq.): Exempts offshore offerings not targeting U.S. investors. The borderless nature of blockchain technology makes Reg S compliance particularly challenging.

#### Penalties <a href="#securities-act-penalties" id="securities-act-penalties"></a>

Section 24 of the Securities Act, [15 U.S.C. § 77x](https://www.law.cornell.edu/uscode/text/15/77x), provides criminal penalties of up to five years' imprisonment and fines of up to $10,000 for willful violations. The DOJ's April 2025 memorandum, "Ending Regulation by Prosecution," directed prosecutors not to charge Securities Act violations in cases where the charge would require litigating whether a digital asset is a security, provided an adequate alternative criminal charge is available.

### Securities Exchange Act of 1934 <a href="#securities-exchange-act-of-1934" id="securities-exchange-act-of-1934"></a>

#### Overview and Purpose <a href="#exchange-act-overview" id="exchange-act-overview"></a>

The Securities Exchange Act of 1934, [15 U.S.C. § 78a](https://www.law.cornell.edu/uscode/text/15/78a) et seq., governs the secondary trading of securities, creates the SEC, and regulates securities exchanges, broker-dealers, transfer agents, and clearing agencies.

#### Definition of "Exchange" <a href="#definition-of-exchange" id="definition-of-exchange"></a>

Section 3(a)(1), [15 U.S.C. § 78c(a)(1)](https://www.law.cornell.edu/uscode/text/15/78c), defines "exchange" as any organization constituting, maintaining, or providing a marketplace for bringing together purchasers and sellers of securities. The SEC has argued that crypto trading platforms listing tokens deemed securities operate as unregistered exchanges. The question of whether autonomous smart contracts constitute an "organization, association, or group of persons" remains legally unresolved, though the Second Circuit held in [_Risley v. Universal Navigation Inc._](https://www.defieducationfund.org/risley-v-uniswap-ruling-a-massive-win-for-defi/), No. 23-1340-cv (2d Cir. 2025.02.26), that it "defies logic" to hold a smart contract drafter liable under the Exchange Act for third-party misuse of a decentralized protocol.

#### Broker-Dealer Registration <a href="#broker-dealer-registration" id="broker-dealer-registration"></a>

Section 15, [15 U.S.C. § 78o](https://www.law.cornell.edu/uscode/text/15/78o), requires broker-dealers to register with the SEC. The statute defines "broker" as any person engaged in the business of effecting transactions in securities for others, and "dealer" as any person engaged in the business of buying and selling securities for their own account. Crypto platforms executing customer orders in tokens deemed securities may trigger these registration requirements. _See_ Section 1.10 (SEC) for the December 2025 updated guidance on broker-dealer crypto activities.

#### Anti-Fraud Provisions <a href="#anti-fraud-provisions" id="anti-fraud-provisions"></a>

Section 10(b), [15 U.S.C. § 78j(b)](https://www.law.cornell.edu/uscode/text/15/78j), and Rule 10b-5, [17 C.F.R. § 240.10b-5](https://www.law.cornell.edu/cfr/text/17/section-240.10b-5), prohibit fraud and manipulation in connection with the purchase or sale of any security. These provisions require that the traded instrument be a "security" — a threshold question that remains contested for most crypto tokens. The SEC's first crypto insider trading action, [_SEC v. Wahi_](https://www.sec.gov/newsroom/press-releases/2022-127), No. 2:22-cv-01009 (W.D. Wash. 2022), alleged nine crypto tokens were securities. The parallel DOJ case charged wire fraud rather than securities fraud to avoid litigating the securities classification question.

### Investment Company Act of 1940 <a href="#investment-company-act-of-1940" id="investment-company-act-of-1940"></a>

The Investment Company Act of 1940, [15 U.S.C. § 80a-1](https://www.law.cornell.edu/uscode/text/15/80a-1) et seq., regulates companies that engage primarily in investing, reinvesting, and trading in securities. A crypto entity may be an "investment company" under Section 3(a)(1), [15 U.S.C. § 80a-3(a)(1)](https://www.law.cornell.edu/uscode/text/15/80a-3), if it is engaged primarily in the business of investing in securities or holds investment securities exceeding 40% of total assets.

DeFi protocols that pool user assets and invest them in yield-generating strategies may meet this definition. The SEC charged BarnBridge DAO (December 2023) with operating unregistered investment pools, resulting in $1.7 million in settlements and a shutdown order. Key exemptions — Section 3(c)(1) (up to 100 beneficial owners) and Section 3(c)(7) (qualified purchasers only) — are available to crypto funds but may be difficult for DAOs with broadly distributed governance tokens.

Spot Bitcoin and Ether ETFs approved in 2024 are structured as commodity-based trusts, _not_ registered investment companies under the 1940 Act, because Bitcoin and Ether are treated as commodities. The D.C. Circuit's ruling in [_Grayscale Investments, LLC v. SEC_](https://law.justia.com/cases/federal/appellate-courts/cadc/22-1142/22-1142-2023-08-29.html), No. 22-1142 (D.C. Cir. 2023.08.29), which found the SEC acted "arbitrarily and capriciously" in denying Grayscale's spot Bitcoin ETF while approving futures-based ETFs, paved the way for the January 2024 approvals.

### Investment Advisers Act of 1940 <a href="#investment-advisers-act-of-1940" id="investment-advisers-act-of-1940"></a>

The Investment Advisers Act of 1940, [15 U.S.C. § 80b-1](https://www.law.cornell.edu/uscode/text/15/80b-1) et seq., requires registration of persons who, for compensation, advise others about securities. Any person or firm providing advice about investing in crypto assets that are securities, or managing portfolios containing such assets, may be required to register. SEC registration is generally required for advisers with $100 million or more in regulatory assets under management.

The Custody Rule, [17 C.F.R. § 275.206(4)-2](https://www.law.cornell.edu/cfr/text/17/section-275.206(4)-2), requires registered advisers to maintain client assets with a "qualified custodian." In September 2025, the SEC issued no-action relief permitting state-chartered trust companies to serve as qualified custodians for crypto assets. In December 2025, the SEC released a [discussion draft for modernizing the Custody Rule](https://www.sec.gov/files/custody-rule-modernization-model-framework-121925.pdf), proposing a risk-aligned approach that could allow advisers to manage client crypto assets outside of qualified custodians. _See_ Section 1.10 (SEC).

### Sarbanes-Oxley Act of 2002 <a href="#sarbanes-oxley-act-of-2002" id="sarbanes-oxley-act-of-2002"></a>

The Sarbanes-Oxley Act (SOX), [15 U.S.C. § 7201](https://www.law.cornell.edu/uscode/text/15/7201) et seq., applies to all SEC-reporting companies, including publicly traded crypto companies (e.g., Coinbase Global, Marathon Digital, Riot Platforms). Key provisions include:

- **Section 302** ([15 U.S.C. § 7241](https://www.law.cornell.edu/uscode/text/15/7241)): CEO and CFO must certify accuracy of financial reports.
- **Section 404** ([15 U.S.C. § 7262](https://www.law.cornell.edu/uscode/text/15/7262)): Management must assess internal controls over financial reporting; external auditor must attest.
- **Section 906** ([18 U.S.C. § 1350](https://www.law.cornell.edu/uscode/text/18/1350)): Criminal penalties for knowing or willful false certifications.

Public crypto companies face unique SOX compliance challenges, including wallet security and private key management as internal controls, revenue recognition for exchange fees and staking rewards, and crypto asset valuation under the FASB ASU 2023-08 fair value standard (effective December 2024). The SEC's January 2025 rescission of Staff Accounting Bulletin No. 121 (through SAB 122) removed the requirement that entities recognize dollar-for-dollar liabilities for custodied crypto, a significant barrier to institutional custody. _See_ Section 1.10 (SEC).

## Commodities Statutes <a href="#commodities-statutes" id="commodities-statutes"></a>

### Commodity Exchange Act <a href="#commodity-exchange-act" id="commodity-exchange-act"></a>

#### Overview and Purpose <a href="#cea-overview" id="cea-overview"></a>

The Commodity Exchange Act (CEA), [7 U.S.C. § 1](https://www.law.cornell.edu/uscode/text/7/1) et seq., was originally enacted in 1936 to regulate commodity futures trading. Major amendments in 1974 created the CFTC; the Commodity Futures Modernization Act of 2000 updated the framework for over-the-counter derivatives; and the Dodd-Frank Act (2010) expanded CFTC authority to include swaps.

#### Definition of "Commodity" <a href="#definition-of-commodity" id="definition-of-commodity"></a>

Section 1a(9) of the CEA, [7 U.S.C. § 1a(9)](https://www.law.cornell.edu/uscode/text/7/1a), defines "commodity" to include a list of enumerated agricultural products as well as "all other goods and articles . . . and all services, rights, and interests . . . in which contracts for future delivery are presently or in the future dealt in." This broad catch-all language is the basis for the CFTC's assertion that digital assets are commodities.

**Bitcoin** was first declared a commodity in the CFTC's September 2015 enforcement action, _In re Coinflip, Inc._ (CFTC Docket No. 15-29). This determination was judicially affirmed in [_CFTC v. McDonnell_](https://law.justia.com/cases/federal/district-courts/new-york/nyedce/1:2018cv00361/413752/29/), No. 1:18-cv-00361 (E.D.N.Y. 2018), where the court held that "virtual currencies can be regulated by CFTC as commodities."

**Ether** has been treated as a commodity in multiple enforcement actions and was explicitly ruled a commodity in [_CFTC v. Ikkurty_](https://www.cftc.gov/PressRoom/PressReleases/8938-24), No. 3:22-cv-00572 (D. Or. 2024). The SEC's approval of Ether futures and spot ETFs in 2024 was widely interpreted as an implicit acknowledgment of Ether's commodity status. As of February 2026, no court has held that either Bitcoin or Ether is not a commodity.

#### CFTC Jurisdiction over Derivatives <a href="#cftc-jurisdiction-derivatives" id="cftc-jurisdiction-derivatives"></a>

The CFTC has exclusive jurisdiction over commodity futures, options on futures, and swaps under [7 U.S.C. § 2](https://www.law.cornell.edu/uscode/text/7/2). This includes Bitcoin futures and options (listed on CME since December 2017), Ether futures (CME since February 2021), and any swaps involving digital assets qualifying as commodities.

#### Retail Commodity Transactions <a href="#retail-commodity-transactions" id="retail-commodity-transactions"></a>

Section 2(c)(2)(D), [7 U.S.C. § 2(c)(2)(D)](https://www.law.cornell.edu/uscode/text/7/2), provides that leveraged, margined, or financed commodity transactions with retail customers must be regulated as futures unless an exception applies. The "actual delivery" exception requires that the customer secures possession and control of the digital asset within 28 days. _See_ CFTC, Final Interpretive Guidance, [_Retail Commodity Transactions Involving Certain Digital Assets_](https://www.federalregister.gov/documents/2020/06/24/2020-11827/retail-commodity-transactions-involving-certain-digital-assets), 85 Fed. Reg. 37734 (2020.06.24).

#### Anti-Fraud and Anti-Manipulation Authority <a href="#cea-anti-fraud" id="cea-anti-fraud"></a>

Section 6(c)(1) of the CEA, [7 U.S.C. § 9(1)](https://www.law.cornell.edu/uscode/text/7/9), as amended by the Dodd-Frank Act, prohibits any person from using any manipulative or deceptive device in connection with any contract of sale of any commodity in interstate commerce. This provision does not require that a futures contract exist — it applies to spot market fraud involving commodities, making it the CFTC's primary enforcement tool against crypto fraud. _See_ Section 1.11 (CFTC).

Sections 6(c)(2)-(3), [7 U.S.C. § 9(2)-(3)](https://www.law.cornell.edu/uscode/text/7/9), prohibit manipulation and attempted manipulation of commodity prices. Criminal violations carry penalties of up to 25 years' imprisonment and fines of up to $1 million (or $25 million for entities) under [7 U.S.C. § 13(a)(2)](https://www.law.cornell.edu/uscode/text/7/13).

Major CEA enforcement actions in crypto include _CFTC v. Binance Holdings Ltd._ (N.D. Ill. 2023), resulting in a $2.7 billion settlement, and _CFTC v. Ooki DAO_ (N.D. Cal. 2023), which established that a DAO can be sued as an unincorporated association under the CEA. In FY 2024, the CFTC announced record monetary relief of over $17.1 billion, with 49% of all fraud enforcement actions involving digital asset markets. _See_ Section 1.11 (CFTC).

#### Current Interpretive Disputes <a href="#cea-disputes" id="cea-disputes"></a>

As of February 2026, the CFTC has anti-fraud and anti-manipulation authority over commodity spot markets, but does not have plenary regulatory authority over those markets absent new legislation. Multiple pending bills — the CLARITY Act, the Digital Commodity Intermediaries Act, and the RFIA draft — would expand CFTC jurisdiction to include spot market trading in digital commodities. _See_ [Proposed Legislation](#proposed-legislation).

## Banking, Money Transmission, and AML Statutes <a href="#banking-aml-statutes" id="banking-aml-statutes"></a>

### Bank Secrecy Act <a href="#bank-secrecy-act" id="bank-secrecy-act"></a>

#### Overview and Purpose <a href="#bsa-overview" id="bsa-overview"></a>

The Bank Secrecy Act (BSA), [31 U.S.C. § 5311](https://www.law.cornell.edu/uscode/text/31/5311) et seq., enacted in 1970 and administered by the Financial Crimes Enforcement Network (FinCEN), requires financial institutions to maintain records and file reports useful in criminal, tax, and regulatory proceedings. Major amendments include the Money Laundering Control Act (1986), USA PATRIOT Act (2001), and Anti-Money Laundering Act of 2020.

#### Money Services Business Requirements <a href="#msb-requirements" id="msb-requirements"></a>

The BSA defines "financial institution" at [31 U.S.C. § 5312(a)(2)](https://www.law.cornell.edu/uscode/text/31/5312) to include a person who transmits "currency, funds, or value that substitutes for currency" (the last clause added by the Anti-Money Laundering Act of 2020, expressly encompassing cryptocurrency businesses). FinCEN regulations define "money transmitter" at [31 C.F.R. § 1010.100(ff)(5)](https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-A/section-1010.100) to include a person that accepts and transmits currency, funds, or "value that substitutes for currency."

FinCEN's March 2013 guidance (FIN-2013-G001) established the foundational framework: _users_ of virtual currency are not MSBs; _exchangers_ and _administrators_ of virtual currency are money transmitters subject to BSA registration, AML program, and reporting requirements. FinCEN's May 2019 guidance (FIN-2019-G001) updated this framework for new business models, confirming that peer-to-peer exchangers, CVC wallet providers with independent control, and CVC kiosk operators are all MSBs. _See_ Section 1.21 (FinCEN).

#### Reporting Requirements <a href="#bsa-reporting" id="bsa-reporting"></a>

- **Currency Transaction Reports (CTRs):** [31 U.S.C. § 5313](https://www.law.cornell.edu/uscode/text/31/5313) requires CTR filing for cash transactions exceeding $10,000. Applies to cash-in and cash-out transactions at crypto exchanges and kiosks involving physical currency. Structuring transactions to avoid this threshold is a crime under [31 U.S.C. § 5324](https://www.law.cornell.edu/uscode/text/31/5324).

- **Suspicious Activity Reports (SARs):** [31 U.S.C. § 5318(g)](https://www.law.cornell.edu/uscode/text/31/5318) requires financial institutions to file SARs for transactions that may involve money laundering, terrorist financing, or other suspicious activity. The threshold is $2,000 for MSBs. Willful failure to file is punishable by fines up to $250,000 and up to five years' imprisonment.

- **Travel Rule:** [31 C.F.R. § 1010.410(f)](https://www.ecfr.gov/current/title-31/subtitle-B/chapter-X/part-1010/subpart-D/section-1010.410) requires financial institutions to collect and transmit originator and beneficiary information for funds transfers of $3,000 or more. FinCEN confirmed in its 2019 guidance that the Travel Rule applies to convertible virtual currency transfers. FinCEN has proposed reducing the threshold for cross-border CVC transactions to $250, though this proposal remains under consideration.

#### Major BSA Enforcement <a href="#bsa-enforcement" id="bsa-enforcement"></a>

FinCEN has imposed significant penalties for BSA violations by crypto businesses, including Binance ($3.4 billion, 2023), BitMEX ($100 million, 2021), Helix ($60 million, 2020), and Bittrex ($30 million, 2022). _See_ Section 1.21 (FinCEN).

### Anti-Money Laundering Act of 2020 <a href="#amla-2020" id="amla-2020"></a>

The Anti-Money Laundering Act (AMLA), enacted as Division F of the National Defense Authorization Act for Fiscal Year 2021 (Pub. L. 116-283), represents the most substantial changes to U.S. AML law since the USA PATRIOT Act. Key crypto-relevant provisions include:

- **Section 6102:** Expanded the BSA definition of "financial institution" at [31 U.S.C. § 5312(a)(2)(R)](https://www.law.cornell.edu/uscode/text/31/5312) to expressly include persons who transmit "value that substitutes for currency" — ensuring that cryptocurrency exchanges, wallet providers, and similar businesses are unambiguously subject to BSA requirements.
- **Section 6209:** Created a BSA whistleblower program modeled on the SEC's program, offering monetary rewards of 10-30% of sanctions exceeding $1 million.
- **Corporate Transparency Act (CTA)** (Sections 6401-6403): Required beneficial ownership reporting to FinCEN. In March 2025, FinCEN issued an interim final rule removing the requirement for U.S. companies and U.S. persons to report, narrowing the CTA's application to foreign entities registered to do business in the United States.

### USA PATRIOT Act <a href="#usa-patriot-act" id="usa-patriot-act"></a>

Title III of the USA PATRIOT Act (Pub. L. 107-56, 2001) strengthened AML measures following the September 11 attacks by substantially amending the BSA. Key provisions applicable to crypto:

- **Section 326:** Requires Customer Identification Programs (CIPs) to verify the identity of persons opening accounts — the statutory foundation for Know Your Customer (KYC) requirements at centralized crypto exchanges.
- **Section 311:** Authorizes the Treasury Secretary to impose special measures against jurisdictions, institutions, or transaction types of "primary money laundering concern." FinCEN used the related authority under Section 9714 of the Combating Russian Money Laundering Act to designate Bitzlato (January 2023) and PM2BTC (October 2024) as primary money laundering concerns — the first such crypto designations.
- **Section 312:** Enhanced due diligence (EDD) requirements for correspondent accounts with foreign financial institutions, applicable to banks with foreign crypto business relationships.

### International Emergency Economic Powers Act <a href="#ieepa" id="ieepa"></a>

IEEPA, [50 U.S.C. §§ 1701-1706](https://www.law.cornell.edu/uscode/text/50/1701), enacted in 1977, authorizes the President to regulate transactions involving "property" of designated foreign persons upon declaring a national emergency. IEEPA is the legal basis for most modern U.S. sanctions programs administered by the Office of Foreign Assets Control (OFAC). _See_ Section 1.24 (OFAC).

Since 2018, OFAC has designated cryptocurrency wallet addresses on its Specially Designated Nationals and Blocked Persons (SDN) List. As of February 2025, the SDN List contained approximately 1,245 unique crypto wallet addresses.

The most significant legal challenge to OFAC's use of IEEPA in the crypto context arose from the August 2022 designation of Tornado Cash, a decentralized mixer protocol. In [_Van Loon v. Department of the Treasury_](https://law.justia.com/cases/federal/appellate-courts/ca5/23-50669/23-50669-2024-11-26.html), No. 23-50669 (5th Cir. 2024.11.26), the Fifth Circuit reversed the district court, holding that OFAC exceeded its statutory authority because immutable smart contracts are not "property" under IEEPA. The court applied textualist analysis, finding that "property" requires the capacity for ownership and exclusion — attributes that immutable, self-executing code on a public blockchain does not possess. The court cited [_Loper Bright_](https://supreme.justia.com/cases/federal/us/603/369/) in declining to defer to OFAC's broader interpretation. Following this ruling, OFAC delisted Tornado Cash on March 21, 2025.

The holding is limited to immutable smart contracts. The court explicitly noted its reasoning "does not extend to any mutable smart contracts — contracts still under the control of humans or organizations." _See_ Section 1.01 (Constitution) for the related First Amendment issues; Section 1.24 (OFAC) for comprehensive coverage of sanctions enforcement.

### Trading with the Enemy Act <a href="#twea" id="twea"></a>

The Trading with the Enemy Act (TWEA), [50 U.S.C. §§ 4301-4341](https://www.law.cornell.edu/uscode/text/50/4301), originally enacted in 1917, was the predecessor to IEEPA for economic sanctions. TWEA's peacetime authority was restricted in 1977 when IEEPA was enacted. Today, TWEA remains the legal basis only for the Cuba sanctions program. Its relevance to crypto is primarily historical and structural — IEEPA, not TWEA, provides the authority for all crypto-related sanctions enforcement.

### Federal Banking Statutes <a href="#federal-banking-statutes" id="federal-banking-statutes"></a>

#### National Bank Act <a href="#national-bank-act" id="national-bank-act"></a>

The National Bank Act, [12 U.S.C. § 1](https://www.law.cornell.edu/uscode/text/12/1) et seq., establishes the system of nationally chartered banks and defines their permissible activities. The OCC has issued a series of interpretive letters under this authority establishing that national banks may engage in crypto custody (IL 1170, 2020), hold stablecoin reserves (IL 1172, 2020), participate in blockchain networks as nodes (IL 1174, 2021), buy and sell digital assets at customer direction (IL 1184, 2025), hold crypto for network fees (IL 1186, 2025), and engage in riskless principal crypto transactions (IL 1188, 2025). In March 2025, the OCC rescinded IL 1179 (which had imposed a supervisory non-objection requirement), removing the most significant regulatory barrier to bank crypto activities. _See_ Section 1.22 (OCC).

#### Federal Reserve Act <a href="#federal-reserve-act" id="federal-reserve-act"></a>

The Federal Reserve Act, [12 U.S.C. § 221](https://www.law.cornell.edu/uscode/text/12/221) et seq., establishes the Federal Reserve System. The key crypto-related dispute has been over master account access: in [_Custodia Bank, Inc. v. Federal Reserve Board_](https://law.justia.com/cases/federal/appellate-courts/ca10/24-8024/24-8024-2025-10-31.html), No. 24-8024 (10th Cir. 2025), the Tenth Circuit held 2-1 that the Fed retains discretion to deny master account access even to state-chartered depository institutions. In April 2025, the Fed withdrew its 2022-2023 supervisory guidance restricting bank crypto activities. _See_ Section 1.30 (Federal Reserve).

#### Federal Deposit Insurance Act <a href="#fdia" id="fdia"></a>

The Federal Deposit Insurance Act, [12 U.S.C. § 1811](https://www.law.cornell.edu/uscode/text/12/1811) et seq., establishes the FDIC and deposit insurance. FDIC insurance does not cover cryptocurrency or digital assets themselves. The FDIC has taken enforcement action against companies (Voyager Digital, FTX US) that misrepresented FDIC coverage for crypto deposits. In December 2025, the FDIC published a proposed rule establishing approval requirements for payment stablecoin issuance by subsidiaries of insured depository institutions, implementing the GENIUS Act framework. _See_ Section 1.13 (FDIC).

## Tax Statutes <a href="#tax-statutes" id="tax-statutes"></a>

### Internal Revenue Code <a href="#internal-revenue-code" id="internal-revenue-code"></a>

#### Crypto as Property <a href="#crypto-as-property" id="crypto-as-property"></a>

Section 61 of the Internal Revenue Code, [26 U.S.C. § 61](https://www.law.cornell.edu/uscode/text/26/61), defines gross income as "all income from whatever source derived." The IRS treats virtual currency as **property** — not currency — for federal tax purposes, as established in IRS [Notice 2014-21](https://www.irs.gov/pub/irs-drop/n-14-21.pdf). Every disposition of cryptocurrency — whether by sale for fiat, exchange for another cryptocurrency, or use in a purchase — is a taxable event requiring determination of gain or loss under [26 U.S.C. § 1001](https://www.law.cornell.edu/uscode/text/26/1001).

#### Capital Gains and Losses <a href="#capital-gains" id="capital-gains"></a>

Gain or loss on the sale of cryptocurrency is determined under [26 U.S.C. §§ 1001](https://www.law.cornell.edu/uscode/text/26/1001), [1221-1223](https://www.law.cornell.edu/uscode/text/26/1221). The character of the gain (ordinary vs. capital) depends on whether the cryptocurrency is a capital asset in the taxpayer's hands. For most individual investors, crypto is a capital asset, and gains are taxed at favorable long-term capital gains rates if held for more than one year. Basis is determined under [26 U.S.C. § 1012](https://www.law.cornell.edu/uscode/text/26/1012) using specific identification, FIFO, or other acceptable methods.

#### Mining and Staking Income <a href="#mining-staking-income" id="mining-staking-income"></a>

Mined or staked cryptocurrency must be included in gross income at fair market value when the taxpayer gains dominion and control. IRS [Revenue Ruling 2023-14](https://www.irs.gov/pub/irs-drop/rr-23-14.pdf) confirmed that staking rewards are includable in income when the taxpayer gains dominion and control, not when they are subsequently sold.

#### Elimination of Like-Kind Exchange <a href="#like-kind-exchange" id="like-kind-exchange"></a>

The Tax Cuts and Jobs Act of 2017 (Pub. L. 115-97, 2017.12.22) amended [26 U.S.C. § 1031](https://www.law.cornell.edu/uscode/text/26/1031) to limit like-kind exchange treatment exclusively to **real property**, effective for exchanges after December 31, 2017. This definitively eliminated any argument that crypto-to-crypto trades qualify for tax-deferred treatment. The IRS further concluded in Legal Memo 202124008 (June 2021) that even pre-TCJA, exchanges of Bitcoin for Ether did not qualify as like-kind due to materially different characteristics.

#### Form 1040 Digital Asset Question <a href="#form-1040-question" id="form-1040-question"></a>

Since the 2019 tax year, the IRS has included a question about digital assets on the first page of Form 1040, requiring all individual taxpayers to disclose whether they received, sold, exchanged, or otherwise disposed of any digital asset during the year. Answering this question falsely may constitute a violation of [26 U.S.C. § 7206](https://www.law.cornell.edu/uscode/text/26/7206) (filing false returns).

#### Broker Reporting Requirements <a href="#broker-reporting" id="broker-reporting"></a>

The Infrastructure Investment and Jobs Act (Pub. L. 117-58, 2021.11.15) amended [26 U.S.C. § 6045](https://www.law.cornell.edu/uscode/text/26/6045) to require "brokers" to report digital asset transactions on Form 1099-DA, including gross proceeds and (starting 2026) cost basis. The broad definition of "broker" — any person "responsible for regularly providing any service effectuating transfers of digital assets" — generated significant controversy. The IRS final regulations (TD 9999, July 2024) applied the definition to custodial brokers only, excluding non-custodial and decentralized participants.

A separate December 2024 rule (TD 10021) extending reporting to DeFi brokers was permanently nullified by Congress through the Congressional Review Act. _See_ [Enacted Crypto-Specific Legislation](#enacted-crypto-specific-legislation).

#### Cash Transaction Reporting <a href="#cash-transaction-reporting" id="cash-transaction-reporting"></a>

Section 80604 of the Infrastructure Act amended [26 U.S.C. § 6050I](https://www.law.cornell.edu/uscode/text/26/6050I) to add "digital assets" to the definition of "cash" for purposes of the $10,000 trade-or-business reporting requirement (Form 8300). Despite the January 1, 2024 statutory effective date, the IRS has provided transitional relief (Announcement 2024-04): until implementing regulations are issued, persons are not required to include digital assets when determining whether the $10,000 threshold has been reached.

## Criminal Statutes <a href="#criminal-statutes" id="criminal-statutes"></a>

### Wire Fraud <a href="#wire-fraud" id="wire-fraud"></a>

Wire fraud, [18 U.S.C. § 1343](https://www.law.cornell.edu/uscode/text/18/1343), criminalizes any scheme to defraud using interstate wire communications. Because virtually all crypto transactions are transmitted over the internet, the interstate wire element is almost always satisfied. Wire fraud is the DOJ's **primary charging vehicle** for crypto fraud, with penalties of up to 20 years per count (30 years if affecting a financial institution).

Major prosecutions include _United States v. Bankman-Fried_ (S.D.N.Y.) — the FTX founder was convicted on multiple wire fraud counts and sentenced to 25 years, with $11 billion in forfeiture — and numerous ICO scam, rug pull, and exchange fraud cases. The Second Circuit's July 2025 decision in [_United States v. Chastain_](https://law.justia.com/cases/federal/appellate-courts/ca2/23-895/23-895-2025-07-01.html), which vacated a wire fraud conviction arising from NFT insider trading, significantly limited the government's ability to use wire fraud as a substitute for securities fraud in crypto insider trading cases.

The April 2025 Blanche Memo's directive to focus on "individuals who victimize digital asset investors" ensures continued aggressive use of wire fraud charges even as regulatory-theory prosecutions decline.

### Money Laundering <a href="#money-laundering" id="money-laundering"></a>

Section 1956 of Title 18, [18 U.S.C. § 1956](https://www.law.cornell.edu/uscode/text/18/1956), criminalizes conducting a financial transaction involving proceeds of "specified unlawful activity" (SUA) with knowledge that the property represents proceeds of unlawful activity and with intent to promote the SUA, conceal the nature of the proceeds, or avoid reporting requirements. The related statute, [18 U.S.C. § 1957](https://www.law.cornell.edu/uscode/text/18/1957), prohibits monetary transactions exceeding $10,000 in criminally derived property. Penalties are up to 20 years for Section 1956 and 10 years for Section 1957.

Federal courts have confirmed that cryptocurrency transactions qualify as "financial transactions" under Section 1956. Major crypto money laundering prosecutions include:

- _United States v. Lichtenstein_ (D.D.C. 2024) — Bitfinex hack; 119,754 Bitcoin stolen; 60 months' imprisonment; $10 billion+ in laundering.
- _United States v. Sterlingov_ (D.D.C. 2024) — Bitcoin Fog mixer; 12.5 years; $395.5 million forfeiture.
- _United States v. Harmon_ (D.D.C. 2024) — Helix mixer; 36 months; $311 million forfeiture.
- _United States v. Storm_ (S.D.N.Y. 2025) — Tornado Cash co-founder; convicted of conspiracy to operate an unlicensed MTB; jury deadlocked on money laundering and sanctions charges.

### Unlicensed Money Transmitting Business <a href="#unlicensed-mtb" id="unlicensed-mtb"></a>

Section 1960 of Title 18, [18 U.S.C. § 1960](https://www.law.cornell.edu/uscode/text/18/1960), criminalizes knowingly operating a money transmitting business that: (A) lacks a required state license, (B) fails to register with FinCEN, or (C) transmits funds known to be derived from criminal activity or intended to support unlawful activity. Penalties are up to five years.

On April 7, 2025, Deputy Attorney General Todd Blanche issued a memorandum, "Ending Regulation by Prosecution," which fundamentally altered the DOJ's approach. The memo directs prosecutors **not to pursue** charges under Section 1960(b)(1)(A) or (B) for digital asset businesses unless there is "clear evidence that a defendant knew of the specific legal requirement and willfully violated it." The DOJ also disbanded the National Cryptocurrency Enforcement Team (NCET). Section 1960(b)(1)(C) — involving funds known to be derived from criminal offenses — remains fully viable and unaffected.

This represents DOJ policy, not statutory change. A future administration could reverse the Blanche Memo's restrictions. A pre-enforcement challenge to DOJ's interpretation is pending in _Lewellen v. Bondi_, No. 4:25-cv-00030-O (N.D. Tex.), where a DeFi developer argues that publishing non-custodial smart contract code does not constitute "money transmission."

### Computer Fraud and Abuse Act <a href="#cfaa" id="cfaa"></a>

The Computer Fraud and Abuse Act (CFAA), [18 U.S.C. § 1030](https://www.law.cornell.edu/uscode/text/18/1030), prohibits unauthorized access to protected computers. The CFAA is the primary criminal statute for prosecuting cryptocurrency exchange hacks, including the Bitfinex hack (2016) and North Korean state-sponsored hacks attributed to the Lazarus Group.

In [_Van Buren v. United States_](https://supreme.justia.com/cases/federal/us/593/374/), 593 U.S. 374 (2021), the Supreme Court narrowed the CFAA's "exceeds authorized access" provision, holding that a person with authorized access does not violate the CFAA by using information for an unauthorized purpose. This "gates-up-or-down" inquiry narrows potential CFAA liability for DeFi users who interact with smart contracts through public interfaces, even if they exploit vulnerabilities. Whether interacting with a smart contract in a way the code permits — but the developers did not intend — constitutes "unauthorized access" remains an open question.

### Securities and Commodities Fraud <a href="#securities-commodities-fraud" id="securities-commodities-fraud"></a>

Section 1348 of Title 18, [18 U.S.C. § 1348](https://www.law.cornell.edu/uscode/text/18/1348), enacted as part of SOX, criminalizes schemes to defraud in connection with securities or commodities. Penalties are up to 25 years. Alex Mashinsky (Celsius) pleaded guilty to one count each of securities fraud and commodities fraud (December 2024), receiving a 12-year sentence. The Blanche Memo directs prosecutors to use alternative charges (wire fraud, money laundering) rather than litigating the security/commodity classification, potentially limiting future Section 1348 usage.

### RICO <a href="#rico" id="rico"></a>

The Racketeer Influenced and Corrupt Organizations Act (RICO), [18 U.S.C. §§ 1961-1968](https://www.law.cornell.edu/uscode/text/18/part-I/chapter-96), prohibits conducting the affairs of an "enterprise" through a "pattern of racketeering activity" — at least two predicate offenses within ten years. Wire fraud, money laundering, computer fraud, and drug trafficking are all RICO predicates. Criminal RICO carries up to 20 years per count; civil RICO provides treble damages.

In the largest RICO cryptocurrency prosecution to date (D.D.C., February 2025), twelve defendants were charged in connection with a social engineering scheme that stole over $263 million in cryptocurrency. _See_ IRS-CI, Press Release, [Additional 12 Defendants Charged in RICO Conspiracy](https://www.irs.gov/compliance/criminal-investigation/additional-12-defendants-charged-in-rico-conspiracy-for-over-263-million-cryptocurrency-thefts-money-laundering-home-break-ins) (2025.02). The civil RICO theory of DAO liability as a general partnership, advanced in _Sarcuni v. bZx DAO_, No. 3:22-cv-00618 (S.D. Cal.), has not been tested in a criminal context but carries implications for participant liability.

### Civil Asset Forfeiture <a href="#civil-asset-forfeiture" id="civil-asset-forfeiture"></a>

The government can seize cryptocurrency through civil forfeiture under [18 U.S.C. § 981](https://www.law.cornell.edu/uscode/text/18/981) (property involved in money laundering or derived from specified unlawful activity) and criminal forfeiture under [18 U.S.C. § 982](https://www.law.cornell.edu/uscode/text/18/982) (following conviction). Drug-related forfeiture is governed by [21 U.S.C. § 853](https://www.law.cornell.edu/uscode/text/21/853).

Civil forfeiture requires only a preponderance of the evidence and does not require a criminal conviction. Major crypto forfeitures include $11 billion (FTX/Bankman-Fried), $395.5 million (Bitcoin Fog), and $225 million in USDT (June 2025 civil forfeiture complaint).

On March 6, 2025, President Trump issued an executive order establishing the **Strategic Bitcoin Reserve**, capitalized with Bitcoin held by the Treasury that has been finally forfeited through criminal or civil proceedings. Forfeited Bitcoin is to be maintained as reserve assets and not sold. A separate United States Digital Asset Stockpile was established for non-Bitcoin digital assets obtained through forfeiture.

## Consumer Protection and Other Statutes <a href="#consumer-protection-statutes" id="consumer-protection-statutes"></a>

### Federal Trade Commission Act <a href="#ftc-act" id="ftc-act"></a>

Section 5 of the FTC Act, [15 U.S.C. § 45](https://www.law.cornell.edu/uscode/text/15/45), declares unlawful "unfair or deceptive acts or practices in or affecting commerce." This authority allows the FTC to pursue crypto-related consumer protection actions without classifying digital assets as securities or commodities. The FTC's most significant crypto actions targeted Voyager Digital (false FDIC insurance claims; $1.65 billion judgment) and Celsius Network (deceptive marketing). FTC crypto enforcement has diminished under the current administration's pro-innovation posture. _See_ Section 1.15 (FTC).

### E-SIGN Act <a href="#e-sign-act" id="e-sign-act"></a>

The Electronic Signatures in Global and National Commerce Act (E-SIGN), [15 U.S.C. §§ 7001-7031](https://www.law.cornell.edu/uscode/text/15/7001), provides that a signature, contract, or record may not be denied legal effect solely because it is in electronic form. Digital signatures — including private key authorizations — generally satisfy E-SIGN's requirements when they reflect intent to consent, and smart contracts are "electronic records" under the Act. However, E-SIGN was drafted before blockchain technology and does not address smart contract-specific issues such as self-executing terms, immutability, or code-based ambiguity. Several states (Arizona, Nevada, Tennessee) have amended their Uniform Electronic Transactions Act adoptions to explicitly include blockchain-secured signatures and smart contracts.

### Dodd-Frank Wall Street Reform Act <a href="#dodd-frank" id="dodd-frank"></a>

The Dodd-Frank Act (Pub. L. 111-203, 2010) is relevant to crypto in several respects:

- **Swap regulation:** Expanded CFTC authority to include the over-the-counter swaps market, applicable to crypto derivatives.
- **Whistleblower provisions:** SEC and CFTC whistleblower programs have generated significant crypto-related tips.
- **FSOC:** The Financial Stability Oversight Council listed digital assets as a "financial stability vulnerability" in 2023-2024, but dropped the designation in 2025, reclassifying crypto as a "significant market development to monitor."
- **Volcker Rule:** Section 619 restricts bank proprietary trading, constraining banks' ability to hold crypto as principal. Banking regulators withdrew crypto-skeptical guidance in April 2025, opening the door for greater bank participation. _See_ Sections 1.13 (FDIC), 1.22 (OCC), 1.30 (Federal Reserve).

### Electronic Fund Transfer Act <a href="#efta" id="efta"></a>

The EFTA, [15 U.S.C. §§ 1693-1693r](https://www.law.cornell.edu/uscode/text/15/chapter-41/subchapter-VI), and Regulation E ([12 C.F.R. Part 1005](https://www.law.cornell.edu/cfr/text/12/part-1005)) provide consumer protections for electronic fund transfers, including error resolution, limits on liability for unauthorized transfers, and disclosure requirements. In January 2025, the CFPB proposed extending Regulation E protections to stablecoins and other digital assets used as money. The CFPB withdrew the proposed rule in May 2025. As a result, the EFTA does not currently apply to cryptocurrency transactions, leaving crypto consumers without federal error resolution or unauthorized transfer protections.

### Gramm-Leach-Bliley Act <a href="#glba" id="glba"></a>

Title V of the GLBA, [15 U.S.C. §§ 6801-6809](https://www.law.cornell.edu/uscode/text/15/6801), requires "financial institutions" to provide privacy notices, implement information safeguards, and establish information security programs. Crypto exchanges registered as MSBs almost certainly fall within GLBA coverage. The FTC's Safeguards Rule ([16 C.F.R. Part 314](https://www.law.cornell.edu/cfr/text/16/part-314)) imposes administrative, technical, and physical safeguard requirements applicable to crypto businesses handling customer data.

## Enacted Crypto-Specific Legislation <a href="#enacted-crypto-specific-legislation" id="enacted-crypto-specific-legislation"></a>

As of February 2026, Congress has enacted three crypto-related measures.

### Infrastructure Investment and Jobs Act (2021) <a href="#infrastructure-act" id="infrastructure-act"></a>

The Infrastructure Investment and Jobs Act (Pub. L. 117-58, 2021.11.15) contained two crypto-relevant provisions:

**Section 80603** amended [26 U.S.C. § 6045](https://www.law.cornell.edu/uscode/text/26/6045) to broaden the definition of "broker" to include any person "responsible for regularly providing any service effectuating transfers of digital assets on behalf of another person," and defined "digital asset" as "any digital representation of value which is recorded on a cryptographically secured distributed ledger or any similar technology." Brokers must report transactions on Form 1099-DA. The IRS final regulations (TD 9999, July 2024) limited the definition to custodial brokers. Gross proceeds reporting began for 2025 transactions; cost basis reporting begins for 2026 transactions.

The breadth of the "broker" definition was intensely controversial. An amendment by Senators Wyden, Toomey, and Lummis to exclude miners, validators, and software developers was blocked from a vote due to an unrelated procedural objection.

**Section 80604** amended [26 U.S.C. § 6050I](https://www.law.cornell.edu/uscode/text/26/6050I) to include digital assets in the definition of "cash" for the $10,000 trade-or-business reporting requirement. Implementation remains subject to transitional relief pending IRS regulations.

_See_ [congress.gov](https://www.congress.gov/bill/117th-congress/house-bill/3684).

### H.J. Res. 25 — DeFi Broker Rule CRA (2025) <a href="#defi-broker-cra" id="defi-broker-cra"></a>

On April 10, 2025, President Trump signed H.J. Res. 25 (Pub. L. 119-5), a Congressional Review Act disapproval resolution that permanently nullified the IRS's December 2024 rule (TD 10021) extending broker reporting requirements to DeFi platforms. This was the **first standalone crypto bill** signed into law. The CRA resolution prohibits the IRS from issuing the same or a substantially similar rule without new legislation.

The House passed the resolution 292-132 and the Senate 70-28, reflecting strong bipartisan support. _See_ [congress.gov](https://www.congress.gov/bill/119th-congress/house-joint-resolution/25).

### GENIUS Act (2025) <a href="#genius-act" id="genius-act"></a>

The Guiding and Establishing National Innovation for U.S. Stablecoins (GENIUS) Act (S. 1582, Pub. L. 119-27, 2025.07.18) established the first comprehensive federal stablecoin regulatory framework. Key provisions:

**Permitted Issuers:** Three categories: (1) subsidiaries of FDIC-insured depository institutions, (2) federally qualified nonbank issuers (OCC-chartered), and (3) state-chartered issuers (capped at $10 billion in outstanding stablecoins before requiring federal oversight).

**Reserve Requirements:** 1:1 reserve backing in permitted assets: U.S. coins and Federal Reserve notes, demand deposits at insured institutions, Treasury securities with remaining maturities of 93 days or less, repurchase agreements backed by such Treasuries, money market funds, and central bank reserve deposits.

**Securities/Commodity Carve-Out:** Payment stablecoins are explicitly neither securities nor commodities and are not subject to SEC or CFTC oversight.

**BSA Compliance:** Issuers must maintain AML/CFT compliance programs, including risk assessments, sanctions screening, and customer identification.

**Consumer Protection:** Stablecoin holders receive super-priority claims over all other creditors in insolvency. Reserve assets are not property of the bankruptcy estate. Mandatory redemption rights at par value.

**Effective Date:** Earlier of 18 months after enactment (~January 2027) or 120 days after regulators issue final implementing regulations. Rulemaking deadline: July 18, 2026.

The legislative path was notable: after an initial cloture vote failed 48-49 (May 2025), the bill was revised and passed the Senate 68-30 (June 2025) and the House 308-122 (July 2025). _See_ [congress.gov](https://www.congress.gov/bill/119th-congress/senate-bill/1582).

## Proposed Legislation <a href="#proposed-legislation" id="proposed-legislation"></a>

### Market Structure Bills <a href="#market-structure-bills" id="market-structure-bills"></a>

Comprehensive market structure legislation — defining which digital assets are securities, which are commodities, and which agency has jurisdiction — is the most consequential pending crypto legislation as of February 2026.

#### CLARITY Act (H.R. 3633, 119th Congress) <a href="#clarity-act" id="clarity-act"></a>

Introduced May 29, 2025 by Rep. French Hill (R-AR). **Passed House July 17, 2025 (294-134); pending in Senate.** The CLARITY Act divides digital assets into three categories: (1) digital commodities (CFTC jurisdiction), (2) investment contract assets (SEC jurisdiction for primary market transactions, but the underlying asset is not itself a security), and (3) permitted payment stablecoins (regulated under the GENIUS Act). Key features include exclusive CFTC jurisdiction over digital commodity spot markets, a "mature blockchain" standard replacing FIT21's "decentralized system" concept, a $75 million exemption allowing issuers on mature blockchains to sell digital commodities without Securities Act registration, and explicit DeFi exclusion provisions. _See_ [congress.gov](https://www.congress.gov/bill/119th-congress/house-bill/3633).

#### Digital Commodity Intermediaries Act (Senate Agriculture Committee) <a href="#dcia" id="dcia"></a>

Released as a bipartisan discussion draft in November 2025 by Chairman John Boozman (R-AR) and Senator Cory Booker (D-NJ), updated January 21, 2026. **Advanced by committee vote 12-11 (party-line) on January 29, 2026** — the first time a crypto market structure bill cleared a Senate committee. Focuses on CFTC authority over digital commodity intermediaries, requiring registration as digital commodity exchanges, brokers, or dealers.

#### Responsible Financial Innovation Act of 2025 (Senate Banking Committee) <a href="#rfia-draft" id="rfia-draft"></a>

Discussion draft released September 2025 by Chairman Tim Scott (R-SC) and Senators Lummis, Hagerty, and Moreno. A January 12, 2026 updated draft with 137 proposed amendments was released, but the January 15, 2026 markup was **postponed** after industry stakeholders publicly withdrew support. As of February 2026, no new date has been announced.

#### FIT21 (H.R. 4763, 118th Congress — Expired) <a href="#fit21" id="fit21"></a>

The Financial Innovation and Technology for the 21st Century Act passed the House 279-136 (May 2024) but died in the Senate. FIT21 was the conceptual predecessor to the CLARITY Act, proposing a SEC/CFTC jurisdictional split with a "decentralized system" certification process. Its framework was substantially incorporated into the CLARITY Act. _See_ [congress.gov](https://www.congress.gov/bill/118th-congress/house-bill/4763).

### CBDC Legislation <a href="#cbdc-legislation" id="cbdc-legislation"></a>

#### Anti-CBDC Surveillance State Act (H.R. 1919/S. 1124, 119th Congress) <a href="#anti-cbdc-act" id="anti-cbdc-act"></a>

Sponsored by Rep. Tom Emmer (R-MN) and Sen. Ted Cruz (R-TX). **Passed House July 17, 2025; pending in Senate.** Prohibits the Federal Reserve from issuing a CBDC directly to individuals or through intermediaries. Primarily Republican support. Reinforces Executive Order 14178 (January 2025), which prohibited federal agencies from establishing or promoting CBDCs. _See_ [congress.gov](https://www.congress.gov/bill/119th-congress/house-bill/1919).

### Tax Reform Proposals <a href="#tax-reform-proposals" id="tax-reform-proposals"></a>

- **Virtual Currency Tax Fairness Act** (first introduced 117th Congress; most recent: S. 4808, 118th Congress): Proposes a $200 de minimis exemption from capital gains for everyday crypto transactions. Not reintroduced in 119th Congress as standalone bill. _See_ [congress.gov](https://www.congress.gov/bill/118th-congress/senate-bill/4808).

- **PARITY Act** (discussion draft, December 2025): Proposed by Reps. Max Miller (R-OH) and Steven Horsford (D-NV). Includes de minimis stablecoin exemption under $200, a five-year tax deferral option for staking and mining rewards, and application of wash sale rules to digital assets.

### AML and Sanctions Modernization <a href="#aml-bills" id="aml-bills"></a>

- **Digital Asset Anti-Money Laundering Act** (S. 2669, 118th Congress — expired): Sponsored by Sen. Elizabeth Warren (D-MA) and Sen. Roger Marshall (R-KS). Would have extended BSA requirements to validators, wallet providers, and miners. Not confirmed to be reintroduced in the 119th Congress. _See_ [congress.gov](https://www.congress.gov/bill/118th-congress/senate-bill/2669).

- **Crypto-Asset National Security Enhancement Act** (S. 2355, 118th Congress — expired): Sponsored by Sen. Jack Reed (D-RI) and Sen. Mike Rounds (R-SD). Would have applied bank-style AML obligations to DeFi services. _See_ [congress.gov](https://www.congress.gov/bill/118th-congress/senate-bill/2355).

### Strategic Bitcoin Reserve Legislation <a href="#bitcoin-reserve-legislation" id="bitcoin-reserve-legislation"></a>

Multiple bills seek to codify the March 2025 executive order establishing the Strategic Bitcoin Reserve:

- **BITCOIN Act** (S. 954, 119th Congress): Sponsored by Sen. Cynthia Lummis (R-WY). Would direct the Treasury to purchase 1 million Bitcoin over five years with a 20-year mandatory holding period. _See_ [congress.gov](https://www.congress.gov/bill/119th-congress/senate-bill/954).
- House companions: H.R. 2032 (Begich), H.R. 2112 (Donalds), H.R. 3798. All at committee stage; no committee action as of February 2026.

### Congressional Landscape Assessment <a href="#congressional-landscape" id="congressional-landscape"></a>

As of February 2026, the legislative outlook is shaped by several dynamics:

**Market structure is the key unfinished business.** The CLARITY Act passed the House with strong bipartisan support (294-134), but the Senate must reconcile competing drafts from its Agriculture Committee (which advanced the Digital Commodity Intermediaries Act on a party-line vote) and Banking Committee (whose markup was postponed). The White House is actively mediating between banking and crypto industry stakeholders.

**Bipartisan support exists but is fragile.** The GENIUS Act demonstrated that crypto legislation can attract substantial bipartisan support (68-30 Senate, 308-122 House). However, concerns about Trump family crypto ventures (including the $TRUMP meme coin and World Liberty Financial) have complicated negotiations, as reflected in the initial failed GENIUS Act cloture vote and the introduction of the End Crypto Corruption Act (S. 1668, 119th Congress) by Senate Democrats.

**Key dates for 2026:** July 18, 2026 (GENIUS Act rulemaking deadline); January 2027 (GENIUS Act effective date); TBD (Senate Banking Committee market structure markup); ongoing (IRS Form 1099-DA cost basis reporting implementation for 2026 transactions).

## Statutory Interpretation in the Crypto Context <a href="#statutory-interpretation" id="statutory-interpretation"></a>

### The Challenge: Old Statutes, New Technology <a href="#old-statutes-new-tech" id="old-statutes-new-tech"></a>

The central challenge of crypto law is applying statutes drafted for a pre-digital world to fundamentally novel technology. The Securities Act of 1933 was written for stock certificates; the Commodity Exchange Act of 1936 for wheat futures; the Bank Secrecy Act of 1970 for cash transactions at bank teller windows. Whether these statutes encompass cryptocurrency depends on how courts interpret their text and purpose — questions that implicate some of the deepest doctrinal divisions in modern statutory interpretation.

### Textualism vs. Purposivism <a href="#textualism-vs-purposivism" id="textualism-vs-purposivism"></a>

Textualism — the dominant methodology at the Supreme Court and in most federal circuits — focuses on the ordinary meaning of statutory text at the time of enactment. Purposivism looks beyond text to identify and effectuate Congress's intended purpose.

The leading textualist crypto case is [_Van Loon v. Department of the Treasury_](https://law.justia.com/cases/federal/appellate-courts/ca5/23-50669/23-50669-2024-11-26.html), No. 23-50669 (5th Cir. 2024), where the Fifth Circuit held that immutable smart contracts are not "property" under IEEPA because they lack the ordinary-meaning attributes of property — the capacity for ownership, control, and exclusion. The court refused to defer to OFAC's broader reading.

Purposivism is more evident in the _Howey_ line of cases. The Supreme Court in _Howey_ adopted a deliberately flexible definition of "investment contract" focused on "economic reality" — a purposivist methodology that the SEC and many courts have applied to bring novel financial instruments within the securities laws. Judge Rakoff's _Terraform Labs_ ruling, rejecting the _Ripple_ distinction between institutional and programmatic sales, reflects the purposivist view that the investor-protection purpose of the securities laws should not turn on the accident of _how_ a token was purchased.

The tension is sharpest for DeFi. A strict textualist might question whether a non-custodial smart contract that autonomously executes transactions "accepts" and "transmits" funds within the plain meaning of the BSA's money transmitter definition. A purposivist would argue that if the economic function is money transmission, the label should follow.

### The Major Questions Doctrine <a href="#major-questions-doctrine" id="major-questions-doctrine"></a>

The major questions doctrine (MQD), articulated in [_West Virginia v. EPA_](https://supreme.justia.com/cases/federal/us/597/697/), 597 U.S. 697 (2022), and extended in [_Biden v. Nebraska_](https://supreme.justia.com/cases/federal/us/600/477/), 600 U.S. 477 (2023), holds that in "extraordinary cases" where agencies claim broad authority to regulate matters of "vast economic and political significance," courts should look for clear congressional authorization. The crypto industry has argued the SEC's assertion of jurisdiction over a $2+ trillion market through 1930s statutes implicates the MQD.

However, no court has applied the MQD to block an SEC crypto enforcement action. In _SEC v. Coinbase_ (S.D.N.Y. 2024), Judge Failla directly rejected the argument, finding the crypto industry "falls far short of being a portion of the American economy bearing vast economic and political significance" as that phrase is understood under _West Virginia v. EPA_. Congress's enactment of the GENIUS Act and advancement of the CLARITY Act both cuts in favor of and against MQD arguments: it demonstrates Congress views crypto as a major question requiring legislative action, while also filling the legislative vacuum.

### Post-Chevron Landscape <a href="#post-chevron" id="post-chevron"></a>

The Supreme Court's overruling of _Chevron_ deference in [_Loper Bright Enterprises v. Raimondo_](https://supreme.justia.com/cases/federal/us/603/369/), 144 S. Ct. 2244 (2024), means courts must exercise independent judgment on whether agencies have acted within their statutory authority. Agency crypto interpretations — the SEC's expansive reading of "investment contract," the CFTC's commodity classification, FinCEN's treatment of DeFi protocols as money transmitters — no longer receive automatic deference.

Post-_Loper Bright_, agency interpretations carry only _Skidmore_ persuasive authority, based on the "thoroughness evident in [the agency's] consideration, the validity of its reasoning, [and] its consistency with earlier and later pronouncements." [_Skidmore v. Swift & Co._](https://supreme.justia.com/cases/federal/us/323/134/), 323 U.S. 134 (1944). The SEC's enforcement-first approach — without formal notice-and-comment rulemaking — carries less persuasive weight under _Skidmore_ than formal rules would. The Third Circuit underscored this in [_Coinbase, Inc. v. SEC_](https://law.justia.com/cases/federal/appellate-courts/ca3/23-3202/23-3202-2025-01-13.html), No. 23-3202 (3d Cir. 2025.01.13), finding the SEC's one-paragraph denial of Coinbase's rulemaking petition "conclusionary" and potentially "vacuous," and remanding for a more comprehensive explanation.

### Rule of Lenity in Criminal Crypto Cases <a href="#rule-of-lenity" id="rule-of-lenity"></a>

The rule of lenity requires ambiguous criminal statutes to be construed in favor of the defendant. _See_ [_United States v. Santos_](https://supreme.justia.com/cases/federal/us/553/507/), 553 U.S. 507, 514 (2008). In the crypto context, the Blanche Memo effectively codified lenity principles for Section 1960 prosecutions, requiring the government to prove that a defendant knew of and willfully violated specific licensing or registration requirements. This represents a dramatic narrowing from prior practice, where some courts construed Section 1960 as a general-intent crime.

The _Storm_ trial verdict — conviction on the simpler money transmission charge, deadlock on money laundering and sanctions — may reflect lenity principles at work. Jurors may have found the more serious statutes ambiguous as applied to deploying and maintaining smart contract code.

### Void for Vagueness <a href="#void-for-vagueness" id="void-for-vagueness"></a>

No federal court has struck down a statute as void for vagueness as applied to cryptocurrency. But the argument has force: the _Ripple_/_Terraform_ intra-district split demonstrates that two judges in the same courthouse reached opposite conclusions on whether the _Howey_ framework produces a "security" in the same type of transaction. If judges disagree, how can a regulated entity of ordinary intelligence know _ex ante_ whether its tokens are securities? Courts have been reluctant to accept vagueness challenges, finding that the SEC's DAO Report, enforcement actions, and 2019 Framework provided sufficient fair notice. _See_ _SEC v. LBRY_ (D.N.H. 2022); _SEC v. Coinbase_ (S.D.N.Y. 2024).

### Extraterritoriality <a href="#extraterritoriality" id="extraterritoriality"></a>

In [_Morrison v. National Australia Bank Ltd._](https://supreme.justia.com/cases/federal/us/561/247/), 561 U.S. 247 (2010), the Supreme Court held that Section 10(b) of the Exchange Act applies only to domestic securities transactions. This "domestic transactions" test is particularly difficult to apply to borderless crypto markets. The Second Circuit provided some clarity in _Williams v. Binance_, 96 F.4th 129 (2d Cir. 2024), holding that U.S.-based servers used to match orders and the sending of orders from within the United States both suffice to establish domestic transactions. For RICO, the Court held in [_RJR Nabisco, Inc. v. European Community_](https://supreme.justia.com/cases/federal/us/579/15-138/), 579 U.S. 325 (2016), that RICO predicates committed abroad may support criminal charges if the underlying statutes have extraterritorial application, enabling DOJ to reach international crypto fraud networks.

## Index of Sources <a href="#index-of-sources" id="index-of-sources"></a>

_Listed in reverse chronological order._

### 2026

* IRS-CI, Press Release, [Additional 12 Defendants Charged in RICO Conspiracy for Over $263 Million Cryptocurrency Thefts, Money Laundering, Home Break-Ins](https://www.irs.gov/compliance/criminal-investigation/additional-12-defendants-charged-in-rico-conspiracy-for-over-263-million-cryptocurrency-thefts-money-laundering-home-break-ins) (2025.02)
* Senate Agriculture Committee, Digital Commodity Intermediaries Act, Advanced 12-11 (2026.01.29)
* Senate Banking Committee, Revised RFIA Draft with 137 Proposed Modifications (2026.01.12)

### 2025

* SEC, [Custody Rule Modernization Discussion Draft](https://www.sec.gov/files/custody-rule-modernization-model-framework-121925.pdf) (2025.12.19)
* SEC, [Division of Trading and Markets FAQ on Crypto Asset Activities](https://www.sec.gov/rules-regulations/staff-guidance/trading-markets-frequently-asked-questions/frequently-asked-questions-relating-crypto-asset-activities-distributed-ledger-technology) (2025.12)
* SEC, [Project Crypto Speech — Chairman Atkins](https://www.sec.gov/newsroom/speeches-statements/atkins-111225-secs-approach-digital-assets-inside-project-crypto) (2025.11.12)
* _Custodia Bank, Inc. v. Federal Reserve Board_, No. 24-8024 (10th Cir. 2025.10.31)
* FinCEN, CVC Kiosk Guidance, Notice FIN-2025-NTC1 (2025.08)
* _United States v. Storm_, No. 23-cr-430 (S.D.N.Y. 2025.08.06) (mixed verdict)
* _United States v. Chastain_ (2d Cir. 2025.07) (wire fraud conviction vacated)
* GENIUS Act, Pub. L. 119-27, S. 1582 (2025.07.18)
* CLARITY Act, H.R. 3633, Passed House (2025.07.17)
* Anti-CBDC Surveillance State Act, H.R. 1919, Passed House (2025.07.17)
* SEC, [Enforcement Action Dismissed — SEC v. Binance](https://www.sec.gov/enforcement-litigation/litigation-releases/lr-26316) (2025.05.29)
* _SEC v. Ripple Labs, Inc._, Final Settlement — $50M (2025.05.08)
* _United States v. Mashinsky_, Sentenced 12 years (2025.05)
* Federal Reserve Board, Withdrawal of SR 22-6 and SR 23-7 (2025.04.24)
* H.J. Res. 25 — DeFi Broker Rule CRA, Pub. L. 119-5 (2025.04.10)
* DOJ, Deputy AG Todd Blanche, "Ending Regulation by Prosecution" Memorandum (2025.04.07)
* OFAC, [Tornado Cash Delisting](https://home.treasury.gov/news/press-releases/sb0057) (2025.03.21)
* FinCEN, CTA Interim Final Rule — U.S. Companies Exempted (2025.03.21)
* OCC, Interpretive Letter 1183 — Rescission of IL 1179 (2025.03.07)
* Strategic Bitcoin Reserve Executive Order (2025.03.06)
* SEC, [Enforcement Action Dismissed — SEC v. Coinbase](https://www.sec.gov/newsroom/press-releases/2025-47) (2025.02.27)
* _Risley v. Universal Navigation Inc._ (Uniswap), No. 23-1340-cv (2d Cir. 2025.02.26)
* SEC, [Crypto Task Force Established](https://www.sec.gov/about/crypto-task-force) (2025.01.21)
* [_Coinbase, Inc. v. SEC_](https://law.justia.com/cases/federal/appellate-courts/ca3/23-3202/23-3202-2025-01-13.html), No. 23-3202 (3d Cir. 2025.01.13)
* SEC, [Staff Accounting Bulletin No. 122](https://www.sec.gov/rules-regulations/staff-guidance/staff-accounting-bulletins/staff-accounting-bulletin-122) (2025.01.23)
* Executive Order 14178, Strengthening American Leadership in Digital Financial Technology (2025.01.23)

### 2024

* [_Van Loon v. Dep't of the Treasury_](https://law.justia.com/cases/federal/appellate-courts/ca5/23-50669/23-50669-2024-11-26.html), No. 23-50669 (5th Cir. 2024.11.26)
* _United States v. Sterlingov_ (Bitcoin Fog), Sentenced 12.5 years (2024.11.08)
* _United States v. Ahlgren_, Sentenced 24 months (2024.12.12)
* _United States v. Lichtenstein_, Sentenced 60 months (2024.11)
* IRS, Final Regulations TD 9999 — Digital Asset Broker Reporting (2024.07)
* [_CFTC v. Ikkurty_](https://www.cftc.gov/PressRoom/PressReleases/8938-24) (D. Or. 2024.07.01) (Ether is a commodity)
* [_SEC v. Binance Holdings Ltd._](https://law.justia.com/cases/federal/district-courts/district-of-columbia/dcdce/1:2023cv01599/256060/248/) (D.D.C. 2024.06.28) (stablecoins not securities)
* [_Loper Bright Enterprises v. Raimondo_](https://supreme.justia.com/cases/federal/us/603/369/), 144 S. Ct. 2244 (2024.06.28)
* _SEC v. Terraform Labs_, $4.47B Consent Judgment (2024.06.12)
* _Williams v. Binance_, 96 F.4th 129 (2d Cir. 2024)
* _United States v. Eisenberg_ (Mango Markets), Convicted (2024.04); Vacated (2025.05)
* [_SEC v. Coinbase, Inc._](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2023cv04738/599908/105/) (S.D.N.Y. 2024.03.27) (motion to dismiss ruling)
* FIT21, H.R. 4763, Passed House 279-136 (2024.05.22)
* Spot Bitcoin ETF Approvals (2024.01.10)

### 2023

* [_Grayscale Investments, LLC v. SEC_](https://law.justia.com/cases/federal/appellate-courts/cadc/22-1142/22-1142-2023-08-29.html), No. 22-1142 (D.C. Cir. 2023.08.29)
* [_SEC v. Ripple Labs, Inc._](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2020cv10832/551082/973/) (S.D.N.Y. 2023.07.13) (summary judgment)
* [_SEC v. Terraform Labs Pte. Ltd._](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2023cv01346/594150/149/) (S.D.N.Y. 2023.12.28)
* _Biden v. Nebraska_, 600 U.S. 477 (2023)
* CFTC v. Binance, $2.7B Settlement (2023.11)
* FinCEN, Bitzlato Section 9714 Designation (2023.01.18)
* IRS, Revenue Ruling 2023-14 — Staking Rewards (2023)

### 2022

* [_West Virginia v. EPA_](https://supreme.justia.com/cases/federal/us/597/697/), 597 U.S. 697 (2022)
* [_SEC v. LBRY, Inc._](https://www.courtlistener.com/docket/60441292/sec-v-lbry-inc/), No. 21-cv-260 (D.N.H. 2022.11.07)
* [_SEC v. Wahi_](https://www.sec.gov/newsroom/press-releases/2022-127), No. 2:22-cv-01009 (W.D. Wash. 2022)
* OFAC, [Tornado Cash Designation](https://home.treasury.gov/news/press-releases/jy0916) (2022.08.08)

### 2021

* [_Van Buren v. United States_](https://supreme.justia.com/cases/federal/us/593/374/), 593 U.S. 374 (2021)
* Infrastructure Investment and Jobs Act, Pub. L. 117-58 (2021.11.15)
* OCC, Interpretive Letter 1174 — Distributed Ledger/Node Verification (2021.01.04)
* Anti-Money Laundering Act of 2020, Pub. L. 116-283 (2021.01.01)

### 2020

* [_SEC v. Telegram Group Inc._](https://law.justia.com/cases/federal/district-courts/new-york/nysdce/1:2019cv09439/524448/227/) (S.D.N.Y. 2020)
* CFTC, [Retail Commodity Transactions Involving Certain Digital Assets](https://www.federalregister.gov/documents/2020/06/24/2020-11827/retail-commodity-transactions-involving-certain-digital-assets), 85 Fed. Reg. 37734 (2020.06.24)
* OCC, Interpretive Letter 1170 — Crypto Custody (2020.07.22)
* OCC, Interpretive Letter 1172 — Stablecoin Reserves (2020.09.21)

### 2019

* SEC, [Framework for "Investment Contract" Analysis of Digital Assets](https://www.sec.gov/about/divisions-offices/division-corporation-finance/framework-investment-contract-analysis-digital-assets) (2019.04.03)
* FinCEN, Guidance FIN-2019-G001 — Application of FinCEN's Regulations to Certain Business Models Involving Convertible Virtual Currencies (2019.05.09)

### 2018

* _CFTC v. McDonnell_ (E.D.N.Y. 2018) (virtual currencies are commodities)
* _CFTC v. My Big Coin Pay, Inc._ (D. Mass. 2018)

### 2017

* SEC, [Report of Investigation Pursuant to Section 21(a) — The DAO](https://www.sec.gov/files/litigation/investreport/34-81207.pdf), Release No. 81207 (2017.07.25)
* Tax Cuts and Jobs Act, Pub. L. 115-97 (2017.12.22)

### 2015

* CFTC, _In re Coinflip, Inc._, Docket No. 15-29 (2015.09) (Bitcoin declared commodity)

### 2014

* IRS, [Notice 2014-21](https://www.irs.gov/pub/irs-drop/n-14-21.pdf) — Virtual Currency as Property (2014)

### 2013

* FinCEN, Guidance FIN-2013-G001 — Application of FinCEN's Regulations to Persons Administering, Exchanging, or Using Virtual Currencies (2013.03.18)

### 2010

* [_Morrison v. National Australia Bank Ltd._](https://supreme.justia.com/cases/federal/us/561/247/), 561 U.S. 247 (2010)
* Dodd-Frank Wall Street Reform and Consumer Protection Act, Pub. L. 111-203 (2010.07.21)

### 1946

* [_SEC v. W.J. Howey Co._](https://supreme.justia.com/cases/federal/us/328/293/), 328 U.S. 293 (1946)

## Authors <a href="#authors" id="authors"></a>

[@lawtoshi](https://twitter.com/lawtoshi)
