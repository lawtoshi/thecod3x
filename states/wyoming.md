---
description: A comprehensive overview of Wyoming's cryptocurrency and digital asset legal framework — the most extensive in the United States.
---

# 2.50 - Wyoming

## Overview <a href="#overview" id="overview"></a>

Wyoming has enacted the most comprehensive cryptocurrency and digital asset legal framework of any U.S. state. Since 2018, the Wyoming Legislature has passed more than twenty blockchain-specific laws addressing banking, entity formation, property rights, securities, money transmission, corporate governance, and stablecoins. No other state approaches this breadth of coverage.

Wyoming's approach is distinctive in both philosophy and execution. Rather than regulating crypto through enforcement or restrictive licensing, the Legislature pursued a strategy of _legal clarity_ — creating purpose-built statutory frameworks that provide definitive answers to questions left open by other jurisdictions. The goal was to attract crypto businesses to Wyoming by removing legal uncertainty, not by offering subsidies or tax breaks. The result is a body of law that treats digital assets as a distinct asset class, provides clear rules for custody and ownership, and creates entity structures designed specifically for decentralized governance.

The framework originated with the [Wyoming Blockchain Task Force ↗](https://wyoleg.gov/Committees/2018/S19), established in 2017, which produced the initial wave of legislation in 2018–2019. In 2020, the Task Force transitioned to a permanent [Select Committee on Blockchain, Financial Technology and Digital Innovation Technology ↗](https://wyoleg.gov/Committees/2025/S19), empowered to sponsor its own legislation. Key legislative sponsors include Sen. Chris Rothfuss (D-Laramie), Rep. Jared Olsen (R-Cheyenne), and former Rep. Tyler Lindholm, with significant input from industry advisor Caitlin Long.

Wyoming's framework has national significance. Its Special Purpose Depository Institution (SPDI) charter was the first state bank charter designed for digital asset custody. Its DAO LLC law was the first U.S. statute to grant legal personality to decentralized autonomous organizations. Its Frontier Stable Token (FRNT) was the first state-issued stablecoin in the nation. And its digital asset property classification predated — and differs from — the Uniform Law Commission's UCC Article 12 approach now being adopted by other states.

For practitioners, Wyoming offers a comprehensive toolkit: a state bank charter for digital asset custody, entity structures for decentralized organizations, property law clarity for digital assets, a securities exemption for utility tokens, exemptions from money transmission licensing, authority to issue corporate stock on blockchain, and a state-backed stablecoin. Each framework is addressed in detail below.

## Special Purpose Depository Institutions (SPDIs) <a href="#spdis" id="spdis"></a>

### Enabling Legislation

Wyoming created the SPDI framework through [House Bill 74 (HB0074) ↗](https://www.wyoleg.gov/Legislation/2019/hb0074) during the 2019 legislative session, codified at [Wyo. Stat. §§ 13-12-101 through 13-12-114 ↗](https://law.justia.com/codes/wyoming/title-13/chapter-12/). The Wyoming Division of Banking began accepting applications on October 1, 2019. The SPDI Act was amended in 2020 and again in 2021 (effective July 1, 2021).

### What SPDIs Are

An SPDI is a Wyoming-chartered depository institution purpose-built for digital asset activities. SPDIs differ from traditional banks in several critical respects:

- **No lending.** SPDIs are prohibited from making loans with customer deposits (§ 13-12-103). This is the defining structural distinction: SPDIs are custodians, not lenders.
- **Full-reserve requirement.** SPDIs must maintain 100% of fiat deposits in unencumbered liquid assets at all times (§ 13-12-105), eliminating the fractional-reserve risk inherent in traditional banking.
- **Contingency account.** An additional 2% of deposits must be held in a separate contingency account (§ 13-12-106).
- **No FDIC insurance required.** Because SPDIs do not lend, they fall outside the traditional FDIC deposit insurance framework. Deposits at SPDIs are _uninsured_, but fully backed by reserves.

### Capital Requirements

Section 13-12-110 requires a minimum of **$5 million** in authorized capital, fully subscribed and paid in before commencing business, plus a surplus fund of not less than three years of estimated operating expenses. The Wyoming Division of Banking has stated in guidance that the appropriate minimum for chartering is the greater of **1.25–1.75% of proposed assets under management or $10 million**. A paid-up surplus fund of at least 20% of authorized capital stock is also required.

### Banks Chartered

**Kraken Financial (now Kraken Bank).** On September 16, 2020, Kraken received the first SPDI charter — the first crypto company in the U.S. to obtain a bank charter, and the first de novo bank chartered in Wyoming since 2006. Kraken has since developed qualified custody services for institutional clients (launched March 2024) and debuted "Krak," a global money app for crypto and fiat transfers, in June 2025. Kraken continues to develop debit card and yield-bearing deposit products under its charter.

**Custodia Bank (formerly Avanti Bank & Trust).** Founded by Caitlin Long in 2020 under the name "Avanti Bank & Trust," the institution received its SPDI charter in October 2020 by unanimous vote of the State Banking Board. It was later renamed Custodia Bank. Custodia's operations have been significantly constrained by the Federal Reserve's refusal to grant a master account or Fed membership — _see_ the [Enforcement and Litigation](#enforcement-and-litigation) section below. In March 2025, Custodia partnered with Vantage Bank (an FDIC-insured institution) to issue "Avit," described as the first bank-issued stablecoin on a permissionless blockchain (Ethereum, ERC-20), with Vantage handling Fedwire and ACH access while Custodia handled blockchain tokenization.

### FDIC Membership and Federal Reserve Access

The full-reserve, no-lending model that defines SPDIs is also their principal obstacle to integration with the federal payment system. Without FDIC membership, SPDIs face discretionary evaluation for Federal Reserve master accounts under criteria that the Fed has applied unfavorably to crypto-focused institutions. This structural tension — between a state charter designed for innovation and federal infrastructure built for traditional banking — is the central challenge facing SPDIs. The Tenth Circuit's 2025 decision in _Custodia Bank v. Federal Reserve Board of Governors_ confirmed that Federal Reserve Banks have discretion to deny master account applications. _See_ Section 1.30 (the Fed); _see also_ [Enforcement and Litigation](#enforcement-and-litigation) below.

### Practical Considerations

Applicants should expect the chartering process to take 12–18 months, with substantial capital requirements exceeding $10 million in practice. The [Wyoming Division of Banking ↗](https://wyomingbankingdivision.wyo.gov/banks-and-trust-companies/special-purpose-depository-institutions) publishes application procedures, rules, and guidance documents on its SPDI page. Prospective applicants should address the federal access question — specifically, how the institution will access payment rails without a Federal Reserve master account — early in the planning process.

## Decentralized Autonomous Organizations (DAOs) <a href="#daos" id="daos"></a>

### DAO LLC Supplement (2021) <a href="#dao-llc" id="dao-llc"></a>

Wyoming became the first U.S. state to legally recognize DAOs through [Senate File 38 (SF0038) ↗](https://www.wyoleg.gov/Legislation/2021/SF0038), passed in 2021 and codified at Wyo. Stat. §§ 17-31-101 through 17-31-115 (the "Wyoming Decentralized Autonomous Organization Supplement"). The law took effect on July 1, 2021. It was amended in 2022 by [SF0068 ↗](https://www.wyoleg.gov/Legislation/2022/SF0068) (effective March 9, 2022) to clarify management structures and smart contract capabilities.

**Formation requirements.** A DAO must be organized as a Wyoming LLC with the DAO Supplement applied. The registered name must include "DAO," "LAO," or "DAO LLC." Articles of organization must specify whether the DAO is _member-managed_ or _algorithmically managed_. Filing is available online or by mail through the [Wyoming Secretary of State ↗](https://sos.wyo.gov/Forms/WyoBiz/DAO_Supplement.pdf) for a $100 fee.

**On-chain governance.** The statute recognizes smart contracts as a valid basis for DAO governance. The underlying smart contracts may define the operating agreement — including management structure, voting rights, and membership rules. The statute permits the operating agreement to define, reduce, or eliminate fiduciary duties and to restrict transfer of ownership interests, withdrawal or resignation, return of capital, and dissolution.

**Liability shield.** DAO members receive the same limited liability protection as traditional LLC members. A member is not personally liable for the debts, obligations, or other liabilities of the DAO solely by reason of being a member.

**Notable formations.** American CryptoFed DAO became the first legally recognized DAO in the United States on July 1, 2021, aiming to create a monetary system with zero inflation. It subsequently encountered severe regulatory difficulties: the SEC denied its Form 10 registration (November 10, 2021) and issued a stop order on its Form S-1 for two tokens (November 18, 2022). _See_ Section 1.10 (SEC) for SEC enforcement posture on DAO token registrations.

### Decentralized Unincorporated Nonprofit Associations (DUNAs) (2024) <a href="#dunas" id="dunas"></a>

On March 7, 2024, Governor Mark Gordon signed [Senate File 50 (SF0050) ↗](https://www.wyoleg.gov/Legislation/2024/SF0050) into law, creating the Wyoming Decentralized Unincorporated Nonprofit Association Act (DUNA), codified at Wyo. Stat. §§ 17-32-101 through 17-32-129 and effective July 1, 2024. The DUNA was sponsored by the Select Committee on Blockchain and has been endorsed by [a16z crypto ↗](https://a16zcrypto.com/posts/article/duna-for-daos/) as "an oasis for DAOs."

DUNAs differ from DAO LLCs in important respects:

- **Nonprofit structure.** DUNAs are unincorporated nonprofit associations, suited for protocol governance rather than for-profit ventures.
- **Minimum membership.** A DUNA requires at least 100 members, reflecting its design for large decentralized communities.
- **Governance flexibility.** Governance follows "governing principles" which may include agreements, consensus algorithms, smart contracts, and community-adopted amendments.
- **Entity status.** A DUNA has legal entity status separate from its members. Members are not personally liable for the organization's contractual breaches or torts.

DUNAs provide a legal wrapper for decentralized protocols that do not fit the LLC model — particularly open-source protocols with large, fluid membership and no profit distribution.

## Digital Asset Property Rights <a href="#digital-asset-property" id="digital-asset-property"></a>

### Statutory Framework

Wyoming was the first state to establish a comprehensive property classification for digital assets, enacted in 2019 and codified at [Wyo. Stat. § 34-29-101 et seq. ↗](https://law.justia.com/codes/wyoming/title-34/chapter-29/) (Title 34, Chapter 29). The statute was amended in 2021 (effective July 1, 2021).

Section 34-29-102 classifies digital assets as **property** and establishes three categories:

1. **Digital consumer assets** — digital assets used or bought primarily for consumptive, personal, family, or household purposes. Treated as general intangibles under the UCC.
2. **Digital securities** — digital assets that qualify as securities under Article 8 of the UCC.
3. **Virtual currency** — digital assets used as a medium of exchange, unit of account, or store of value. Treated as money under the UCC.

This three-category framework provides clear property classification that resolves ambiguity left open by jurisdictions that have not addressed digital asset ownership. _See_ Section 1.02 (Federal Statutes) for the federal statutory landscape, which does not yet include a definitive property classification for digital assets at the federal level.

### Custody Provisions

Section 34-29-104 authorizes Wyoming banks to serve as **qualified custodians** of digital assets, as recognized by the SEC under 17 C.F.R. § 275.206(4)-2 and by the CFTC. Requirements include:

- Customer digital assets must be maintained in separate accounts or in omnibus accounts under the bank's name as agent or trustee.
- Banks must maintain possession or control over digital assets in custody.
- Customers elect a custodial relationship type: **bailment** (nonfungible or fungible, strictly segregated) or other specified arrangements.
- Banks must implement information technology best practices.

The SEC initially issued a staff statement expressing concern about Wyoming's qualified custody framework but subsequently **withdrew** that statement, validating Wyoming's approach.

### Perfection of Security Interests

Wyoming adopted its own non-uniform UCC amendments for digital assets in 2019, predating the Uniform Law Commission's 2022 UCC Article 12 (Controllable Electronic Records). Wyoming has **not adopted** the uniform Article 12. Its approach differs in key respects: it creates rules for "digital assets" rather than "controllable electronic records," provides a two-year take-free rule for transferees who give value without actual notice of adverse claims, and permits filing of a financing statement regardless of debtor location. While more expansive than Article 12 in some respects, Wyoming's non-uniform approach creates potential uniformity issues as other states adopt Article 12.

### Bankruptcy Protection (2024)

[Senate File 96 (SF0096) ↗](https://www.wyoleg.gov/Legislation/2024/SF0096), enacted March 15, 2024 and effective July 1, 2024, provides that cryptocurrency or fiat in a "covered account" at a Wyoming trust company or SPDI is **not deemed an asset or liability of the financial institution** in receivership, conservatorship, or federal bankruptcy. This first-of-its-kind statute also protects assets in staking, staking-as-a-service, sub-custody, and third-party platform trading arrangements, provided a written agreement specifies non-commingling. This directly addresses one of the most significant risks identified in the aftermath of the FTX collapse. _See_ Section 1.13 (FDIC) for the federal framework governing failed financial institutions.

## Securities Law: Utility Token Exemption <a href="#utility-token" id="utility-token"></a>

[House Bill 70 (HB0070) ↗](https://www.wyoleg.gov/Legislation/2018/HB0070), enacted during the 2018 budget session and effective July 1, 2019, created an exemption from Wyoming state securities laws for "open blockchain tokens," codified at [Wyo. Stat. § 17-4-206 ↗](https://law.justia.com/codes/wyoming/2018/title-17/chapter-4/article-2/section-17-4-206/).

An **open blockchain token** is defined as a digital unit that is (1) created in response to verification of transactions or by deploying computer code to a blockchain network; (2) recorded in a chronological, consensus-based, decentralized, mathematically verified digital ledger; and (3) capable of being traded or transferred between persons without an intermediary or custodian.

To qualify for the exemption, three conditions must be met:

1. The token must **not be marketed as an investment opportunity**.
2. The token must be **currently exchangeable or redeemable for goods or services** — meaning an operational product must exist; speculative future utility is insufficient.
3. The issuer must **not actively support the development of a secondary market** for the token.

The statute also exempts _facilitators_ — persons who facilitate the exchange of qualifying tokens — from broker-dealer classification and from the Wyoming Money Transmitter Act, provided they file a notice of intent with the Secretary of State and have a reasonable good-faith belief that the token qualifies.

**Critical limitation.** The Wyoming exemption applies _only_ to Wyoming state securities law. It **does not and cannot exempt** any person from federal securities laws administered by the SEC or from other states' securities laws. _See_ Section 1.10 (SEC) for the federal investment-contract analysis under _SEC v. W.J. Howey Co._, 328 U.S. 293 (1946), and subsequent crypto case law. A token that qualifies for the Wyoming exemption may nonetheless constitute a security under federal law.

## Money Transmission Exemptions <a href="#money-transmission" id="money-transmission"></a>

[House Bill 19 (HB0019) ↗](https://www.wyoleg.gov/Legislation/2018/HB0019), enacted during the 2018 budget session, exempts virtual currency transactions from the Wyoming Money Transmitter Act, codified at [Wyo. Stat. § 40-22-104 ↗](https://law.justia.com/codes/wyoming/title-40/chapter-22/section-40-22-104/).

The exemption covers: "Buying, selling, issuing, or taking custody of payment instruments in the form of virtual currency or receiving virtual currency for transmission to a location within or outside the United States by any means."

This is one of the broadest state-level money transmission exemptions for virtual currency in the country. Businesses that would require money transmitter licenses in other states — including exchanges, custodians, and payment processors dealing in virtual currency — are exempt from licensing in Wyoming.

Wyoming also enacted the [FinTech Sandbox (HB57) ↗](https://www.wyoleg.gov/Legislation/2019/HB0057) in 2019, which provides additional regulatory flexibility for fintech companies testing innovative products within a controlled framework.

Practitioners should note that this state exemption does not relieve businesses from federal money transmission requirements under the Bank Secrecy Act or FinCEN registration obligations. _See_ Section 1.21 (FinCEN) for federal money services business requirements.

## Corporate Governance: Stock on Blockchain <a href="#stock-on-blockchain" id="stock-on-blockchain"></a>

[House Bill 185 (HB0185) ↗](https://www.wyoleg.gov/Legislation/2019/HB0185), jointly filed by Rep. Jared Olsen and Sen. Chris Rothfuss and codified at [Wyo. Stat. § 17-16-625 ↗](https://law.justia.com/codes/wyoming/title-17/chapter-16/article-6/section-17-16-625/), authorizes Wyoming corporations to issue shares represented by **certificate tokens** on a blockchain.

Under the statute, a corporation's articles of incorporation or bylaws may provide that all or a portion of shares may be represented by certificate tokens. Transaction records must be entered into a blockchain or other secure, auditable database and must be linked to or associated with the certificate token. Records must be capable of electronic transmission to the issuing corporation, the person to whom the token was issued, and any transferee.

This statute enables **tokenized equity** for Wyoming corporations, potentially allowing shares to be issued, transferred, and tracked on-chain. While practical adoption remains limited, the provision provides a legal foundation for companies seeking to integrate blockchain-based cap table management and shareholder record-keeping. Note that tokenized shares that constitute securities remain subject to federal securities registration requirements. _See_ Section 1.10 (SEC).

## Wyoming Stable Token (FRNT) <a href="#frnt" id="frnt"></a>

### Legislative Authorization

The [Wyoming Stable Token Act (SF0127) ↗](https://www.wyoleg.gov/Legislation/2023/SF0127), enacted in 2023, authorized Wyoming to issue its own state-backed stablecoin and established the **Wyoming Stable Token Commission**. [Senate File 52 (SF0052) ↗](https://www.wyoleg.gov/Legislation/2024/SF0052), enacted in 2024, amended the Act to codify permitted investment types backing the token and granted the Commission authority over procurement. The Legislature allocated **$5.8 million** in the 2024 budget for the project.

### Launch and Deployment

Originally designated "WYST," the stablecoin was rebranded to **FRNT (Frontier Stable Token)** for its public debut. Wyoming became the **first public entity in the United States** to issue a blockchain-based stable token when FRNT completed mainnet deployment on **August 18, 2025**, with the official public launch announced August 19, 2025. The formal public debut with professionally managed reserves was announced on **January 6, 2026**, in collaboration with Franklin Templeton.

FRNT launched on **seven blockchains**: Arbitrum, Avalanche, Base, Ethereum, Optimism, Polygon, and Solana, with additional deployment announced for Hedera.

### Reserve Structure

- All reserves are held in trust by the State of Wyoming.
- Invested exclusively in **U.S. dollars and short-duration U.S. Treasuries**.
- Managed by **Franklin Advisers, Inc.** (Franklin Templeton's fixed income division).
- Custodied by **Fiduciary Trust Company International** (a Franklin Templeton affiliate).
- Wyoming mandates a **102% reserve ratio** — $1.02 in assets for every $1.00 of FRNT issued.
- Monthly attestations are provided by **The Network Firm**.

### Technology and Infrastructure

Technology partners include LayerZero (token issuance and cross-chain infrastructure), Fireblocks (blockchain infrastructure and key management), and Inca Digital (open-source intelligence and compliance monitoring). The Commission's total budget allocation of $6.0 million is intended to be repaid to the State's General Fund; less than $2.0 million has been deployed in the project's first 39 months, and the agency is designed to be self-sustaining.

FRNT represents a novel approach to stablecoins — issued by a state government rather than a private company, backed by a statutory 102% reserve mandate, and managed by an established institutional asset manager. _See_ Section 1.02 (Federal Statutes) for the federal stablecoin framework under the GENIUS Act (2025), which establishes a national regulatory regime for payment stablecoins that may affect FRNT's regulatory posture.

## Banking and Custody Framework <a href="#banking-custody" id="banking-custody"></a>

Beyond the SPDI charter, Wyoming provides a broader framework for digital asset custody by state-chartered banks and trust companies. Under Wyo. Stat. § 34-29-104, Wyoming banks may serve as qualified custodians of digital assets — a designation recognized by both the SEC (under the Investment Advisers Act custody rule) and the CFTC. _See_ Section 1.22 (OCC) for the parallel federal framework under which nationally chartered banks may engage in digital asset custody.

Wyoming banks providing digital asset custody must:

- Maintain customer assets in separate or omnibus accounts, segregated from the institution's own assets.
- Allow customers to elect the custodial relationship type (bailment of nonfungible assets, bailment of fungible assets with strict segregation, or other statutory arrangements).
- Implement information technology best practices for private key management and security.
- Submit to examination and supervision by the Wyoming Division of Banking.

The SEC's withdrawal of its earlier staff statement expressing concern about Wyoming's custody approach was a significant validation, confirming the SEC would not recommend enforcement against Wyoming-chartered trust companies operating as qualified custodians.

## Regulatory Oversight <a href="#regulatory-oversight" id="regulatory-oversight"></a>

Wyoming's crypto framework is administered by multiple state agencies:

**Wyoming Division of Banking.** Primary regulator for SPDIs, trust companies, and banks engaged in digital asset custody. Conducts examinations, processes charter applications, and publishes [SPDI guidance ↗](https://wyomingbankingdivision.wyo.gov/banks-and-trust-companies/special-purpose-depository-institutions). _See_ Section 1.30 (the Fed) and Section 1.13 (FDIC) for the federal regulators with whom the Division interacts on safety-and-soundness matters.

**Wyoming Secretary of State.** Handles DAO LLC and DUNA formation filings, corporate registrations for tokenized stock, and facilitator notice filings under the utility token exemption. [DAO formation materials ↗](https://sos.wyo.gov/Forms/WyoBiz/DAO_Supplement.pdf) are available online.

**Wyoming Securities Division.** Administers the utility token exemption under § 17-4-206 and has jurisdiction over state securities law matters affecting digital assets.

**Wyoming Stable Token Commission.** Oversees the issuance and management of FRNT. Chaired by the Governor. Publishes information at [stabletoken.wyo.gov ↗](https://stabletoken.wyo.gov/).

**Select Committee on Blockchain, Financial Technology and Digital Innovation Technology.** Legislative committee empowered to sponsor blockchain-related legislation. As of September 2025, the committee was considering legislation to rename itself the "Select Committee on Blockchain and Emerging Technologies."

## Enforcement and Litigation <a href="#enforcement-and-litigation" id="enforcement-and-litigation"></a>

### Custodia Bank v. Federal Reserve Board of Governors

The most significant litigation arising from Wyoming's crypto framework is Custodia Bank's challenge to the Federal Reserve's denial of a master account and Fed membership.

**Background.** In October 2020, Custodia applied for a Federal Reserve master account with the Federal Reserve Bank of Kansas City (FRBKC). In January 2023, FRBKC denied the master account, and the Federal Reserve Board separately denied Custodia's application for Fed membership, citing "significant safety and soundness risks." Custodia filed suit in June 2022.

**District Court.** [_Custodia Bank Inc. v. Federal Reserve Board of Governors_ ↗](https://www.courtlistener.com/docket/63568061/custodia-bank-inc-v-federal-reserve-board-of-governors/), No. 1:22-CV-00125-SWS (D. Wyo.). Judge Scott W. Skavdahl granted summary judgment for the defendants on March 29, 2024, holding that the Federal Reserve Act and Monetary Control Act do not require the Fed to grant every eligible institution a master account. The court also found Custodia failed to prove the Board of Governors had undue influence on FRBKC's denial.

**Tenth Circuit.** [_Custodia Bank v. Federal Reserve Board of Governors_ ↗](https://law.justia.com/cases/federal/appellate-courts/ca10/24-8024/24-8024-2025-10-31.html), No. 24-8024 (10th Cir. Oct. 31, 2025). The Tenth Circuit **affirmed** in a 2-1 decision, holding that the plain language of the Federal Reserve Act grants Federal Reserve Banks _discretion_ to approve or deny master account applications. Neither the statute nor subsequent amendments mandate automatic access for all qualifying institutions.

**Current status.** As of February 2026, Custodia has stated it is "actively considering" seeking rehearing. No petition for certiorari to the U.S. Supreme Court has been reported. Custodia continues operating under its Wyoming SPDI charter but without direct Federal Reserve payment system access, routing around this barrier through its partnership with Vantage Bank for the Avit stablecoin. _See_ Section 1.30 (the Fed) for broader analysis of Federal Reserve treatment of crypto-focused institutions.

### American CryptoFed DAO

The first DAO formed under Wyoming law encountered significant federal regulatory obstacles. The SEC denied American CryptoFed's Form 10 registration on November 10, 2021, and issued a stop order on its Form S-1 for two tokens (Locke and Ducat) on November 18, 2022. Administrative hearings were held in December 2022 and January 2023. American CryptoFed subsequently withdrew its token registration requests. The case illustrates a core limitation of Wyoming's frameworks: state-level legal recognition does not override federal regulatory requirements. _See_ Section 1.10 (SEC).

### Wyoming State Enforcement

Wyoming has not pursued significant state-level enforcement actions against crypto entities as of February 2026. The state's approach has been facilitative rather than adversarial, consistent with the Legislature's stated policy of attracting crypto businesses through legal clarity.

## Legislative History and Development <a href="#legislative-history" id="legislative-history"></a>

### Wyoming Blockchain Task Force (2017–2020)

The [Wyoming Blockchain Task Force ↗](https://wyoleg.gov/Committees/2018/S19) was established in 2017 and operated for three years, driving the enactment of the initial wave of blockchain-related legislation. Key members included Senators Ogden Driskill, Tara Nethercott, and Chris Rothfuss; Representatives Tyler Lindholm, Jared Olsen, and Mike Yin; and industry advisor Caitlin Long, a Wall Street veteran who subsequently founded Custodia Bank. The Task Force could recommend legislation but was not empowered to sponsor bills directly.

### Select Committee on Blockchain (2020–Present)

The Task Force transitioned to a permanent Select Committee through House Enrolled Act 73 (HB27), led by Sen. Chris Rothfuss and Rep. Jared Olsen. Unlike the Task Force, the Select Committee can sponsor its own legislation, enabling faster iteration on the statutory framework.

### Major Legislative Timeline

| Year | Bill | Description |
|------|------|-------------|
| 2018 | [HB0019 ↗](https://www.wyoleg.gov/Legislation/2018/HB0019) | Virtual currency exemption from Money Transmitter Act |
| 2018 | [HB0070 ↗](https://www.wyoleg.gov/Legislation/2018/HB0070) | Open blockchain token (utility token) exemption |
| 2018 | HB0101 | Authority to store corporate records on blockchain |
| 2018 | HB0126 | Framework to encourage crypto company incorporation |
| 2019 | HB0057 | FinTech Sandbox |
| 2019 | [HB0074 ↗](https://www.wyoleg.gov/Legislation/2019/hb0074) | **SPDI Act** — Special Purpose Depository Institutions |
| 2019 | [HB0185 ↗](https://www.wyoleg.gov/Legislation/2019/HB0185) | Corporate stock certificate tokens on blockchain |
| 2019 | Multiple | Digital asset property classification (Title 34, Ch. 29) |
| 2021 | [SF0038 ↗](https://www.wyoleg.gov/Legislation/2021/SF0038) | **DAO LLC Supplement** — first U.S. DAO legal recognition |
| 2022 | [SF0068 ↗](https://www.wyoleg.gov/Legislation/2022/SF0068) | Amendments to DAO Supplement |
| 2023 | [SF0127 ↗](https://www.wyoleg.gov/Legislation/2023/SF0127) | **Wyoming Stable Token Act** — authorized state stablecoin |
| 2024 | [SF0050 ↗](https://www.wyoleg.gov/Legislation/2024/SF0050) | **DUNA Act** — decentralized unincorporated nonprofit associations |
| 2024 | [SF0052 ↗](https://www.wyoleg.gov/Legislation/2024/SF0052) | Amendments to Stable Token Act |
| 2024 | [SF0096 ↗](https://www.wyoleg.gov/Legislation/2024/SF0096) | **Crypto Bankruptcy Protection Act** — first-of-its-kind |
| 2025 | [HB0201 ↗](https://www.wyoleg.gov/Legislation/2025/HB0201) | Bitcoin reserve bill — **failed** (House committee vote 1–7) |

### Bitcoin Reserve Bill (HB0201)

In 2025, Rep. Jacob Wasserburger introduced HB0201, which would have authorized the state treasurer to invest up to 3% of qualifying state funds (general fund, permanent mineral trust fund, permanent land fund) in Bitcoin, either through direct purchase or regulated Bitcoin exchange-traded products. The bill failed in the House Minerals Committee on February 10, 2025, by a vote of 1–7–1.

## Practical Considerations <a href="#practical-considerations" id="practical-considerations"></a>

### Chartering an SPDI

To charter an SPDI, an applicant must: (1) organize as a Wyoming corporation; (2) raise at least $5 million in authorized capital (practically, $10 million or more per Division of Banking guidance); (3) establish a surplus fund covering three years of estimated operating expenses; (4) submit an application to the Wyoming Division of Banking with the prescribed fee; (5) undergo investigation by the Banking Commissioner; and (6) receive approval from the State Banking Board following a public hearing. Applicants should develop a clear strategy for accessing payment infrastructure without a Federal Reserve master account.

### Forming a DAO LLC or DUNA

**DAO LLC.** File articles of organization with the Wyoming Secretary of State designating the entity as a DAO, including "DAO," "LAO," or "DAO LLC" in the name. Specify whether management is member-managed or algorithmically managed. Deploy governing smart contracts. Filing fee: $100.

**DUNA.** File with the Secretary of State designating the entity as a DUNA. Establish governing principles (which may include smart contracts). Ensure at least 100 members. The DUNA form is suited for decentralized protocols with large, fluid membership and no profit distribution.

### Claiming the Utility Token Exemption

To qualify under § 17-4-206: (1) the token must not be marketed as an investment; (2) the token must be currently exchangeable for goods or services; (3) the developer must not actively support a secondary trading market. Facilitators must file a notice of intent with the Secretary of State. Remember: this exemption does not apply to federal securities law.

### Establishing a Crypto Business in Wyoming

Wyoming's combination of the money transmission exemption (§ 40-22-104), no state income tax, and favorable corporate law makes it an attractive domicile for crypto businesses. Key considerations include: (1) determining which Wyoming frameworks apply to the business model; (2) addressing federal regulatory obligations (FinCEN registration, SEC/CFTC requirements) that Wyoming exemptions do not displace; (3) engaging Wyoming counsel familiar with the blockchain-specific statutes; and (4) filing appropriate registrations with the Secretary of State, Division of Banking, or Securities Division as applicable.

## Index of Sources <a href="#index-of-sources" id="index-of-sources"></a>

### Legislation (Reverse Chronological)

* Bitcoin reserve bill (failed), [HB0201 ↗](https://www.wyoleg.gov/Legislation/2025/HB0201) (2025)
* Crypto Bankruptcy Protection Act, [SF0096 ↗](https://www.wyoleg.gov/Legislation/2024/SF0096) (2024)
* Stable Token Act amendments, [SF0052 ↗](https://www.wyoleg.gov/Legislation/2024/SF0052) (2024)
* DUNA Act, [SF0050 ↗](https://www.wyoleg.gov/Legislation/2024/SF0050) (2024)
* Wyoming Stable Token Act, [SF0127 ↗](https://www.wyoleg.gov/Legislation/2023/SF0127) (2023)
* DAO Supplement amendments, [SF0068 ↗](https://www.wyoleg.gov/Legislation/2022/SF0068) (2022)
* DAO LLC Supplement, [SF0038 ↗](https://www.wyoleg.gov/Legislation/2021/SF0038) (2021)
* SPDI Act, [HB0074 ↗](https://www.wyoleg.gov/Legislation/2019/hb0074) (2019)
* Corporate stock certificate tokens, [HB0185 ↗](https://www.wyoleg.gov/Legislation/2019/HB0185) (2019)
* FinTech Sandbox, [HB0057 ↗](https://www.wyoleg.gov/Legislation/2019/HB0057) (2019)
* Open blockchain token exemption, [HB0070 ↗](https://www.wyoleg.gov/Legislation/2018/HB0070) (2018)
* Virtual currency money transmitter exemption, [HB0019 ↗](https://www.wyoleg.gov/Legislation/2018/HB0019) (2018)

### Statutes

* Wyo. Stat. §§ 13-12-101–114 (SPDIs), [Justia ↗](https://law.justia.com/codes/wyoming/title-13/chapter-12/)
* Wyo. Stat. §§ 17-31-101–115 (DAO LLCs), [Secretary of State ↗](https://sos.wyo.gov/Forms/WyoBiz/DAO_Supplement.pdf)
* Wyo. Stat. §§ 17-32-101–129 (DUNAs)
* Wyo. Stat. § 17-4-206 (utility token exemption), [Justia ↗](https://law.justia.com/codes/wyoming/2018/title-17/chapter-4/article-2/section-17-4-206/)
* Wyo. Stat. § 17-16-625 (certificate tokens), [Justia ↗](https://law.justia.com/codes/wyoming/title-17/chapter-16/article-6/section-17-16-625/)
* Wyo. Stat. § 34-29-101 et seq. (digital asset property), [Justia ↗](https://law.justia.com/codes/wyoming/title-34/chapter-29/)
* Wyo. Stat. § 40-22-104 (money transmitter exemptions), [Justia ↗](https://law.justia.com/codes/wyoming/title-40/chapter-22/section-40-22-104/)

### Case Law

* _Custodia Bank v. Federal Reserve Board of Governors_, No. 24-8024 (10th Cir. Oct. 31, 2025), [Justia ↗](https://law.justia.com/cases/federal/appellate-courts/ca10/24-8024/24-8024-2025-10-31.html)
* _Custodia Bank Inc. v. Federal Reserve Board of Governors_, No. 1:22-CV-00125-SWS (D. Wyo. 2024), [CourtListener ↗](https://www.courtlistener.com/docket/63568061/custodia-bank-inc-v-federal-reserve-board-of-governors/)

### Regulatory and Agency Sources

* Wyoming Division of Banking, [SPDI Page ↗](https://wyomingbankingdivision.wyo.gov/banks-and-trust-companies/special-purpose-depository-institutions)
* Wyoming Stable Token Commission, [stabletoken.wyo.gov ↗](https://stabletoken.wyo.gov/)
* Wyoming Secretary of State, [DAO Supplement ↗](https://sos.wyo.gov/Forms/WyoBiz/DAO_Supplement.pdf)
* a16z crypto, [DUNA for DAOs ↗](https://a16zcrypto.com/posts/article/duna-for-daos/) (2024)

### Legislative Committees

* Select Committee on Blockchain, Financial Technology and Digital Innovation Technology, [2025 Session ↗](https://wyoleg.gov/Committees/2025/S19)
* Wyoming Blockchain Task Force, [2018 Session ↗](https://wyoleg.gov/Committees/2018/S19)

## Author <a href="#author" id="author"></a>

[@lawtoshi](https://x.com/lawtoshi)
