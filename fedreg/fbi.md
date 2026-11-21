# 1.51 - Federal Bureau of Investigation (FBI)

## Overview <a href="#overview" id="overview"></a>

The Federal Bureau of Investigation is the principal federal law enforcement agency responsible for investigating violations of federal criminal law, including those involving cryptocurrency and digital assets. A critical distinction separates the FBI from the Department of Justice: the FBI _investigates_ crimes but does not prosecute them. Prosecution authority rests with the [DOJ](https://www.thecod3x.com/doj/) and its network of United States Attorneys' Offices. _See_ Section 1.50 (Department of Justice) for detailed treatment of prosecution-side actions. This division of labor means that virtually every major cryptocurrency prosecution discussed in the DOJ section began with -- or was substantially supported by -- an FBI investigation.

The FBI's cryptocurrency-related work spans several organizational units. The Cyber Division, established in 2002 during post-9/11 restructuring, serves as the operational backbone for investigating cyber-enabled crimes, including ransomware, nation-state cryptocurrency theft, and exchange hacking. The Criminal Investigative Division (CID) oversees white-collar crime programs encompassing fraud, financial crimes, and money laundering -- the categories into which most cryptocurrency fraud investigations fall. In February 2022, the FBI stood up the Virtual Asset Exploitation Unit (VAXU), a centralized "nerve center" providing blockchain analysis, virtual asset seizure capabilities, and training across the entire Bureau. That same month, the DOJ announced the National Cryptocurrency Enforcement Team (NCET), designed to work hand-in-glove with VAXU on the prosecutorial side.

The Internet Crime Complaint Center (IC3), established in 2000, serves as the national mechanism through which the public reports internet-enabled crime, including cryptocurrency fraud. IC3 data provides the most comprehensive statistical picture of crypto crime in the United States. In its 2024 annual report, IC3 documented 149,686 cryptocurrency-related complaints totaling $9.3 billion in losses -- a 66% increase over 2023 and representing more than half of all IC3-reported losses for the year. IC3, [_2024 Internet Crime Report_](https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf) (2025.04).

The FBI's cryptocurrency enforcement footprint is vast: from the 2013 Silk Road takedown (the Bureau's first major crypto case) through DPRK attribution of the $1.5 billion Bybit hack in February 2025, the FBI has investigated darknet markets, ransomware groups, state-sponsored theft rings, Ponzi schemes, exchange fraud, pig butchering operations, and market manipulation. The Bureau has also pioneered novel investigative techniques, including creating its own cryptocurrency token as an undercover sting operation and proactively notifying thousands of fraud victims before they lost additional funds. The FBI works closely with [IRS](https://www.thecod3x.com/irs/) Criminal Investigation (IRS-CI), the U.S. Secret Service, Homeland Security Investigations, the [SEC](https://www.thecod3x.com/sec/), the [CFTC](https://www.thecod3x.com/cftc/), [FinCEN](https://www.thecod3x.com/fincen/), and [OFAC](https://www.thecod3x.com/ofac/) on cryptocurrency matters, as well as international partners including Europol, the UK National Crime Agency, and law enforcement agencies across the Five Eyes alliance.

## Organizational Structure <a href="#organizational-structure" id="organizational-structure"></a>

### Cyber Division <a href="#cyber-division" id="cyber-division"></a>

The FBI Cyber Division was established in 2002 as part of the Bureau's post-September 11 restructuring. It serves as the lead federal unit for investigating cyber attacks, intrusions, and cyber-enabled crimes, including those involving cryptocurrency. The Division houses specialized expertise in blockchain tracing and coordinates with field offices nationwide on cryptocurrency-related cyber investigations. Its earliest cryptocurrency intelligence product dates to approximately 2012, when the Bureau began monitoring the Silk Road darknet marketplace.

The Cyber Division focuses on nation-state actors, ransomware groups, and sophisticated hacking operations -- the categories that account for many of the largest cryptocurrency thefts. Field offices with particularly significant crypto investigation activity include the New York Field Office (which led the Silk Road, Bitfinex, FTX, and Silk Road 2.0 investigations), the San Francisco Field Office (where Ross Ulbricht was arrested in October 2013), the Los Angeles Field Office (involved in Hive ransomware server seizures), and the Miami Field Office (involved in ALPHV/BlackCat disruption and Operation Level Up). FBI, [_Cyber Division_](https://www.fbi.gov/investigate/cyber).

### Virtual Asset Exploitation Unit (VAXU) <a href="#vaxu" id="vaxu"></a>

The Virtual Asset Exploitation Unit became operational on February 7, 2022, and was publicly announced on February 17, 2022, by Deputy Attorney General Lisa O. Monaco at the Munich Cyber Security Conference. VAXU is co-located at FBI Headquarters and combines experts from the Cyber Division, Criminal Investigative Division, and Counterintelligence Division.

VAXU functions as a centralized resource center, providing blockchain analysis, virtual asset seizure capabilities, equipment, and training to all FBI field offices. It also conducts its own blockchain tracing and digital asset seizure operations. The unit was created to match the growing scale of crypto-related crime and was designed to work alongside the DOJ's National Cryptocurrency Enforcement Team (NCET). _See_ [DOJ](https://www.thecod3x.com/doj/) (discussing NCET's creation and subsequent disbandment in April 2025). As of early 2026, VAXU remains active, though its close operational relationship with the now-disbanded NCET has been disrupted by the Trump administration's policy shifts.

### Internet Crime Complaint Center (IC3) <a href="#ic3" id="ic3"></a>

IC3 was established on May 8, 2000, originally as the Internet Fraud Complaint Center, and serves as the central hub for public reporting of internet-enabled crime, including all categories of cryptocurrency fraud. IC3 publishes annual Internet Crime Reports and, beginning in 2023, a dedicated Cryptocurrency Fraud Report. It operates the Recovery Asset Team (RAT), which works to freeze fraudulently transferred funds, and manages Operation Level Up, the FBI's proactive victim notification program for cryptocurrency investment fraud.

IC3 represents the primary entry point for victims of cryptocurrency fraud and generates the most comprehensive publicly available statistics on crypto crime in the United States. _See_ IC3, [_2024 Internet Crime Report_](https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf) (2025.04); IC3, [_2023 Cryptocurrency Fraud Report_](https://www.ic3.gov/AnnualReport/Reports/2023_IC3CryptocurrencyReport.pdf) (2024.09.09).

### Criminal Investigative Division <a href="#criminal-investigative-division" id="criminal-investigative-division"></a>

The Criminal Investigative Division oversees white-collar crime programs, including fraud, financial crimes, and money laundering. Its Financial Crimes Section houses the VAXU and manages the bulk of cryptocurrency fraud, Ponzi scheme, and exchange-related investigations. While the Cyber Division focuses on nation-state actors and ransomware, CID handles the broader universe of cryptocurrency fraud targeting American consumers and investors, including pig butchering, romance scams, and investment fraud schemes.

## Investigative Capabilities <a href="#investigative-capabilities" id="investigative-capabilities"></a>

### Blockchain Analysis and Tracing <a href="#blockchain-analysis-and-tracing" id="blockchain-analysis-and-tracing"></a>

The FBI employs sophisticated blockchain analysis tools to trace cryptocurrency transactions across public ledgers. Its primary analytics partner is Chainalysis, whose Reactor platform enables investigators to trace transactions across 27+ blockchains and 40 million+ assets, following funds through 325 million+ swaps and 300+ bridges and decentralized exchanges. The Bureau also utilizes tools from TRM Labs and Elliptic for blockchain intelligence and investigation. Chainalysis, [_Crypto Investigations_](https://www.chainalysis.com/solution/crypto-investigations/).

FBI investigators identify transaction patterns, wallet clusters, and links to known entities through blockchain analysis. The Bureau has demonstrated the ability to conduct cross-chain analysis -- tracking funds across multiple blockchains as criminals use "chain-hopping" to obscure trails -- and to trace funds through mixers and tumblers, including Tornado Cash, Bitcoin Fog, and RAILGUN. The Bureau also monitors decentralized exchange swaps and bridge transactions.

Training in these capabilities is provided through VAXU's internal programs and through the Federal Law Enforcement Training Centers (FLETC), which offers both a foundation-level Cryptocurrency for Investigators Training Program (CFITP) and an intermediate-to-advanced Cryptocurrency Analysis and Control Training Program (CACTP). Both programs are available to sworn law enforcement and support personnel from federal, tribal, state, and local agencies. FLETC, [_Cryptocurrency Analysis and Control Training Program_](https://www.fletc.gov/cryptocurrency-analysis-and-control-training-program); FLETC, [_Cryptocurrency for Investigators Training Program_](https://www.fletc.gov/cryptocurrency-investigators-training-program).

### Cryptocurrency Seizure Procedures <a href="#cryptocurrency-seizure-procedures" id="cryptocurrency-seizure-procedures"></a>

Cryptocurrency seizures require judicial authorization, typically in the form of seizure warrants based on probable cause or court-issued restraining orders. Administrative forfeiture is available for amounts under $500,000. The process proceeds through several stages: identifying target wallets through blockchain analysis, obtaining judicial authorization, transferring assets to government-controlled wallets or freezing them in place, initiating forfeiture proceedings, and providing notice to potential claimants. Claimants have deadlines to file claims under the Civil Asset Forfeiture Reform Act (CAFRA). If no valid claims are received, forfeiture is completed; if claims are filed, the case proceeds to a civil or criminal forfeiture hearing.

Criminal forfeiture is imposed as part of a defendant's sentencing, while civil forfeiture proceeds _in rem_ against the property itself and does not require a criminal conviction. In notable cases such as the Colonial Pipeline ransomware recovery and the Bitfinex hack investigation, FBI investigators obtained private keys through court-authorized seizure warrants, enabling direct recovery of cryptocurrency from wallets controlled by criminals.

The scale of FBI cryptocurrency seizures has increased dramatically. The James Zhong Silk Road Bitcoin seizure ($3.36 billion), the Bitfinex hack recovery (initially $3.6 billion, ultimately approximately $10 billion), and the FTX forfeiture ($11 billion) represent the largest categories of digital asset seizure in federal law enforcement history. In the LockBit operation, 200+ cryptocurrency accounts were frozen. These seizures are typically followed by forfeiture proceedings and, where applicable, restitution to identified victims. _See_ Blank Rome, [_Understanding Cryptocurrency Forfeiture: A Guide to Digital Asset Seizure_](https://www.blankrome.com/publications/understanding-cryptocurrency-forfeiture-guide-digital-asset-seizure); Skadden, [_Cryptoasset Seizures and Forfeitures_](https://www.skadden.com/insights/publications/2022/09/cryptoasset-seizures-and-forfeitures) (2022.09).

### Undercover Operations <a href="#undercover-operations" id="undercover-operations"></a>

The FBI has applied traditional undercover investigative techniques to the cryptocurrency space with notable success. The most striking example is Operation Token Mirrors, in which the FBI created its own Ethereum-based cryptocurrency token -- NexFundAI -- as a sting operation to expose market manipulation. The Bureau has also conducted undercover operations within darknet marketplaces and deployed confidential informants in exchange fraud investigations. These operations demonstrate the adaptability of established FBI investigative methods to novel digital asset contexts.

## Cryptocurrency Fraud Statistics <a href="#cryptocurrency-fraud-statistics" id="cryptocurrency-fraud-statistics"></a>

### Annual Cryptocurrency Loss Statistics <a href="#annual-cryptocurrency-loss-statistics" id="annual-cryptocurrency-loss-statistics"></a>

IC3 data documents the rapid escalation of cryptocurrency-related crime in the United States. The following table summarizes IC3-reported losses by year:

| Year | Total IC3 Complaints | Total IC3 Losses | Crypto Complaints | Crypto Losses |
|------|---------------------|-------------------|-------------------|---------------|
| 2019 | 467,361 | $3.5 billion | Not broken out | Not broken out |
| 2020 | 791,790 | $4.2 billion | Not broken out | Not broken out |
| 2021 | 847,376 | $6.9 billion | Not broken out | ~$1.6 billion |
| 2022 | 800,944 | $10.3 billion | Not broken out | ~$2.57 billion |
| 2023 | 880,418 | $12.5 billion | 69,000+ | $5.6 billion |
| 2024 | 859,532 | $16.6 billion | 149,686 | $9.3 billion |

_See_ IC3, [_2024 Internet Crime Report_](https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf) (2025.04); IC3, [_2023 Cryptocurrency Fraud Report_](https://www.ic3.gov/AnnualReport/Reports/2023_IC3CryptocurrencyReport.pdf) (2024.09.09).

Cryptocurrency-related losses represented more than 56% of all IC3-reported losses in 2024, a proportion that has grown rapidly since IC3 began separately tracking crypto complaints in 2023. The 66% year-over-year increase from 2023 to 2024 reflects both the growing adoption of cryptocurrency and the increasing sophistication of fraud schemes targeting crypto users. The trend is compounded by the fact that IC3 data likely represents a fraction of actual losses, as many victims -- particularly those defrauded through pig butchering schemes -- do not report their losses due to shame, confusion, or lack of awareness of reporting mechanisms.

### Cryptocurrency Investment Fraud <a href="#cryptocurrency-investment-fraud" id="cryptocurrency-investment-fraud"></a>

Cryptocurrency investment fraud -- encompassing pig butchering, romance-investment hybrid scams, and fraudulent trading platforms -- is the single largest category of cryptocurrency-related loss reported to IC3. Investment fraud losses rose from $2.57 billion in 2022 to $3.96 billion in 2023 (a 53% increase) to $5.8 billion in 2024 across 41,557 complaints (a 29% increase). Director Wray stated in September 2024 that "scams targeting investors who use cryptocurrency are skyrocketing in severity and complexity." FBI, [_FBI Publishes 2023 Cryptocurrency Fraud Report_](https://www.fbi.gov/news/press-releases/fbi-publishes-2023-cryptocurrency-fraud-report) (2024.09.09).

Individuals over age 60 are disproportionately affected, suffering over 33,000 complaints and $2.8 billion in losses in 2024. The psychological toll is severe: Operation Level Up has referred 80 victims to FBI victim specialists for suicide intervention, underscoring the devastating human cost of these schemes.

### Cryptocurrency ATM/Kiosk Fraud <a href="#cryptocurrency-atm-kiosk-fraud" id="cryptocurrency-atm-kiosk-fraud"></a>

Cryptocurrency ATM and kiosk fraud has emerged as a rapidly growing category. IC3 received 5,500+ complaints involving crypto kiosks in 2023, totaling $189 million in losses. In 2024, complaints nearly doubled to 10,956 (a 99% increase), with losses reaching $246.7 million. Adults over age 60 accounted for more than 85% of reported losses, with an average loss of $83,000 -- four times the overall average. As of 2024, over 30,000 cryptocurrency kiosks operate nationwide, providing an accessible vector for scammers who direct victims to deposit funds at these machines. The typical scheme involves a scammer impersonating a government official, utility company, or tech support agent and directing the victim to a nearby crypto kiosk to make "payments" -- the victim deposits cash into the kiosk, which is converted to cryptocurrency and immediately transferred to the scammer's wallet. The FBI has emphasized that no legitimate government agency or business will ever direct an individual to pay through a cryptocurrency ATM.

## Major Investigations <a href="#major-investigations" id="major-investigations"></a>

### Exchange Investigations <a href="#exchange-investigations" id="exchange-investigations"></a>

The FBI has participated in investigations of major cryptocurrency exchanges, typically working alongside IRS-CI and other agencies. In the Binance investigation, IRS-CI led the criminal inquiry that culminated in the exchange's $4.3 billion settlement on November 21, 2023, and the guilty plea of founder Changpeng Zhao (CZ). The FBI contributed investigative support and seized funds from Binance accounts as part of various operations. In the FTX investigation, the FBI worked as part of the Southern District of New York's Securities and Commodities Fraud Task Force, contributing to the case that resulted in Sam Bankman-Fried's conviction on all seven counts on November 2, 2023, and his sentencing to 25 years in prison on March 28, 2024. For detailed treatment of the prosecutions and legal outcomes in these cases, _see_ [DOJ](https://www.thecod3x.com/doj/).

In a separate exchange-related enforcement action, the FBI and DOJ announced the takedown of Bitzlato, a Russia-linked cryptocurrency exchange, on January 18, 2023. Russian national Anatoly Legkodymov, the exchange's administrator, was arrested. Bitzlato had processed $4.58 billion in crypto transactions since 2018, including over $700 million in illicit transactions tied to Russian cybercrime, with Hydra Market exchanging $700+ million through Bitzlato. [FinCEN](https://www.thecod3x.com/fincen/) designated Bitzlato as a "primary money laundering concern" under the USA PATRIOT Act. The FBI also contributed to the prosecution of Bitcoin Fog operator Roman Sterlingov, a dual Russian-Swedish national convicted for operating the longest-running Bitcoin money laundering service on the darknet (2011-2021), which laundered over 1.2 million BTC ($400 million at time of transactions). Sterlingov was sentenced to 12 years and 6 months in prison. DOJ, [_Bitcoin Fog Operator Sentenced for Money Laundering Conspiracy_](https://www.justice.gov/archives/opa/pr/bitcoin-fog-operator-sentenced-money-laundering-conspiracy).

### Darknet Market Takedowns <a href="#darknet-market-takedowns" id="darknet-market-takedowns"></a>

#### Silk Road <a href="#silk-road" id="silk-road"></a>

The Silk Road investigation represents the FBI's first major cryptocurrency case and a foundational moment in the history of digital asset law enforcement. Silk Road, launched in February 2011 on the Tor network, was the first modern darknet marketplace; all transactions were conducted in Bitcoin. Between February 2011 and July 2013, the platform facilitated approximately 9,519,664 BTC in transactions.

On October 1, 2013, FBI agents arrested Ross William Ulbricht (operating under the pseudonym "Dread Pirate Roberts") at the Glen Park Library in San Francisco. The identification of Ulbricht was significantly aided by IRS Criminal Investigation Special Agent Gary Alford, who connected Ulbricht to the "Dread Pirate Roberts" persona by linking the username "altoid" -- used during Silk Road's early promotion -- to a forum post containing Ulbricht's personal email address. The FBI seized approximately $3.6 million in Bitcoin at the time of the takedown and an additional $28 million in Bitcoin from Ulbricht's wallet on October 25, 2013. Ulbricht was found guilty on all counts on February 5, 2015, and sentenced to life in prison without the possibility of parole on May 29, 2015. FBI, [_Ross Ulbricht, The Creator and Owner of the Silk Road Website, Found Guilty in Manhattan Federal Court on All Counts_](https://www.fbi.gov/contact-us/field-offices/newyork/news/press-releases/ross-ulbricht-the-creator-and-owner-of-the-silk-road-website-found-guilty-in-manhattan-federal-court-on-all-counts) (2015.02.05); FBI, [_Ross Ulbricht Sentenced in Manhattan Federal Court to Life in Prison_](https://www.fbi.gov/contact-us/field-offices/newyork/news/press-releases/ross-ulbricht-aka-dread-pirate-roberts-sentenced-in-manhattan-federal-court-to-life-in-prison) (2015.05.29).

Ulbricht's laptop is preserved as an FBI historical artifact. FBI, [_Ross William Ulbricht's Laptop_](https://www.fbi.gov/history/artifacts/ross-william-ulbrichts-laptop). President Trump granted Ulbricht a full and unconditional pardon on January 21, 2025. _See_ discussion _infra_ at "Ross Ulbricht Pardon."

#### Silk Road 2.0 / Operation Onymous <a href="#silk-road-2-operation-onymous" id="silk-road-2-operation-onymous"></a>

On November 5-6, 2014, the FBI and Europol jointly conducted Operation Onymous, an international law enforcement action targeting darknet markets and hidden services on the Tor network. The primary target was Silk Road 2.0, which had launched in December 2013 as a successor to the original Silk Road. By September 2014, Silk Road 2.0 had approximately 150,000 active users and generated $8 million per month in sales. The FBI arrested Blake Benthall (operating under the pseudonym "Defcon"), the site's operator. The operation shut down approximately 400+ websites and seized $1 million in Bitcoin, along with EUR 180,000 in cash, gold, silver, and drugs. FBI, [_Dozens of Online 'Dark Markets' Seized (Silk Road 2.0)_](https://www.fbi.gov/contact-us/field-offices/newyork/news/press-releases/dozens-of-online-dark-markets-seized-pursuant-to-forfeiture-complaint-filed-in-manhattan-federal-court-in-conjunction-with-the-arrest-of-the-operator-of-silk-road-2.0) (2014.11). The takedown demonstrated that the closure of Silk Road would not end darknet marketplaces and that law enforcement would continue to pursue successors.

#### AlphaBay / Operation Bayonet <a href="#alphabay-operation-bayonet" id="alphabay-operation-bayonet"></a>

On July 5, 2017, Thai authorities arrested Alexandre Cazes, a 25-year-old Canadian citizen residing in Thailand, who operated AlphaBay -- at the time, the largest darknet marketplace in history. The FBI-led international operation, publicly announced on July 20, 2017, dismantled a platform that facilitated daily sales of $600,000-$800,000 across 300,000+ listings, offered by 40,000+ vendors to 200,000+ users. Product listings included approximately 250,000 illegal drug and toxic chemical listings and 100,000+ listings for stolen documents, counterfeit goods, malware, and firearms. Cazes died in custody on July 12 in an apparent suicide.

In a strategically sequenced companion operation, Dutch police had simultaneously infiltrated Hansa Market under Operation Bayonet, operating it undercover for a month to collect intelligence on AlphaBay users migrating to alternative platforms after the takedown. Attorney General Jeff Sessions characterized the operation as "the largest dark net marketplace takedown in history." FBI, [_AlphaBay Takedown_](https://www.fbi.gov/news/stories/alphabay-takedown) (2017.07.20). The coordinated sequencing -- taking down AlphaBay while covertly controlling Hansa Market -- demonstrated a new level of strategic sophistication in darknet enforcement.

#### Hydra Market <a href="#hydra-market" id="hydra-market"></a>

On April 5, 2022, Germany's Bundeskriminalamt (BKA) seized the infrastructure of Hydra, a Russian-based darknet marketplace that had been the world's largest illegal dark web market since approximately 2015. The takedown was the product of a joint investigation by BKA, the FBI, DEA, IRS-CI, and Homeland Security Investigations, underway since August 2021. Hydra had facilitated more than $5 billion in Bitcoin transactions through 17 million customer accounts and 19,000+ seller accounts. Over $25 million in Bitcoin was seized through 88 transactions.

On the same day, the U.S. Treasury Department's [OFAC](https://www.thecod3x.com/ofac/) sanctioned Hydra and the Moscow-based cryptocurrency exchange Garantex. For further discussion of OFAC's Hydra designation, _see_ [OFAC](https://www.thecod3x.com/ofac/).

Additionally, the FBI participated in Operation SpecTor in May 2023, an international operation coordinated by Europol targeting drug trafficking on the Monopoly Market darknet marketplace across nine countries. The operation resulted in 288 vendor arrests, $53 million in assets seized, 850 kg of drugs confiscated, and 117 firearms recovered. In May 2024, the FBI arrested Rui-Siang Lin (alias "Pharaoh"), the alleged operator of Incognito Market, at JFK Airport in New York. Incognito Market had facilitated over $100 million in narcotics sales worldwide. The FBI tracked cryptocurrency payments to identify Lin, demonstrating the Bureau's continuing ability to trace blockchain transactions to unmask darknet market operators.

### Bitfinex Hack Recovery <a href="#bitfinex-hack-recovery" id="bitfinex-hack-recovery"></a>

The Bitfinex investigation stands as one of the FBI's most significant cryptocurrency recovery operations. On August 2, 2016, hackers stole 119,756 BTC (approximately $72 million at the time) from the Bitfinex cryptocurrency exchange. On February 8, 2022, FBI and IRS-CI agents arrested married couple Ilya Lichtenstein, 35, and Heather Morgan, 33, in New York City. The key investigative breakthrough came when FBI and IRS-CI investigators decrypted a file owned by Lichtenstein that contained the addresses and private keys for wallets holding the stolen funds.

At the time of seizure, approximately 95,000 BTC was recovered -- valued at $3.6 billion and representing the DOJ's largest financial seizure in history at that time. The total recovery ultimately reached approximately $10 billion as Bitcoin's price increased. Lichtenstein admitted to being the original Bitfinex hacker. The couple had employed an elaborate array of laundering techniques, including fictitious identities, automated transactions, darknet market deposits, chain-hopping to privacy coins, multiple mixers (Bitcoin Fog, Helix, ChipMixer), U.S. business accounts, and gold coins buried underground. Both pleaded guilty to money laundering conspiracy in August 2023 and were sentenced in November 2024: Lichtenstein to five years and Morgan to 18 months. DOJ, [_Bitfinex Hacker and Wife Plead Guilty to Money Laundering Conspiracy Involving Billions_](https://www.justice.gov/archives/opa/pr/bitfinex-hacker-and-wife-plead-guilty-money-laundering-conspiracy-involving-billions) (2023.08.03). For prosecution details, _see_ [DOJ](https://www.thecod3x.com/doj/).

### Operation Token Mirrors (NexFundAI) <a href="#operation-token-mirrors" id="operation-token-mirrors"></a>

In an unprecedented application of undercover investigative methodology to the cryptocurrency market, the FBI in May 2024 created its own Ethereum-based cryptocurrency token called "NexFundAI," complete with a website, branding, and tokenomics. The purpose was to function as a sting operation to expose wash trading and market manipulation by cryptocurrency market makers.

FBI agents, operating under the NexFundAI guise, approached market-making firms seeking their wash trading and pump-and-dump services. On October 9, 2024, charges were announced against 18 individuals, including employees of firms Gotbit, ZM Quant, CLS Global, and MyTrade MM. Over $25 million in assets was seized. The investigation exposed manipulation across 60+ cryptocurrency tokens, revealing that market makers used trading bots to execute wash trades -- using controlled accounts to trade assets back and forth, creating false impressions of trading volume. Fortune, [_FBI, DOJ Announce Crypto Market Manipulation Fraud Charges_](https://fortune.com/crypto/2024/10/09/fbi-doj-crypto-market-manipulation-fraud-charges/) (2024.10.09).

Operation Token Mirrors marked the first time a law enforcement agency created its own cryptocurrency as an undercover investigative tool and set a new precedent for sting operations targeting digital asset market manipulation. For prosecution details, _see_ [DOJ](https://www.thecod3x.com/doj/).

### Silk Road Bitcoin Theft -- James Zhong <a href="#james-zhong" id="james-zhong"></a>

On November 9, 2021, FBI agents executed a search warrant at the Gainesville, Georgia, home of James Zhong and recovered 50,676 BTC -- valued at $3.36 billion at the time of public announcement on November 4, 2022. This was the second-largest cryptocurrency seizure in U.S. history. Zhong had exploited a vulnerability in Silk Road's payment processing system in 2012, triggering over 140 transactions in rapid succession that tricked the system into releasing approximately 50,000 BTC. The recovery details were notable: 50,491 BTC was found in an underground floor safe, with additional Bitcoin discovered on a single-board computer submerged under blankets in a popcorn tin stored in a bathroom closet. Agents also recovered $661,900 in cash, 25 Casascius physical bitcoins (containing approximately 174 BTC), and gold and silver bars. Zhong pleaded guilty and was sentenced to one year in prison. DOJ, [_U.S. Attorney Announces Historic $3.36 Billion Cryptocurrency Seizure and Conviction_](https://www.justice.gov/usao-sdny/pr/us-attorney-announces-historic-336-billion-cryptocurrency-seizure-and-conviction) (2022.11.04). The case demonstrated that crimes committed years earlier -- even against a criminal enterprise like Silk Road -- could be uncovered through blockchain analysis.

### OneCoin and BitConnect Ponzi Schemes <a href="#onecoin-bitconnect" id="onecoin-bitconnect"></a>

The FBI has investigated two of the largest cryptocurrency Ponzi schemes in history. OneCoin, a fraudulent cryptocurrency scheme operated from 2014 to 2017, defrauded victims worldwide of approximately $4 billion. Founder Ruja Ignatova (the "CryptoQueen") disappeared in June 2017 and was added to the FBI's Ten Most Wanted Fugitives list in June 2022 -- one of very few women to receive that designation. Co-founder Karl Sebastian Greenwood pleaded guilty to wire fraud, conspiracy, and money laundering. As of February 2026, Ignatova remains one of the FBI's most wanted fugitives.

BitConnect, which operated from 2016 until its collapse in January 2018, defrauded investors of approximately $2.4 billion through a fraudulent "Lending Program" that purported to use a proprietary trading bot but in reality operated as a Ponzi scheme. The FBI's Cleveland Field Office led the investigation and actively sought victims. Founder Satish Kumbhani was indicted in February 2022, but his whereabouts remain unknown. DOJ, [_Bitconnect Founder Indicted in Global $2.4 Billion Cryptocurrency Scheme_](https://www.justice.gov/archives/opa/pr/bitconnect-founder-indicted-global-24-billion-cryptocurrency-scheme) (2022.02); FBI, [_Seeking Potential Victims in Bitconnect Investigation_](https://www.fbi.gov/contact-us/field-offices/cleveland/news/press-releases/seeking-potential-victims-in-bitconnect-investigation).

## Ransomware Operations <a href="#ransomware-operations" id="ransomware-operations"></a>

### Colonial Pipeline / DarkSide Recovery (June 2021) <a href="#colonial-pipeline" id="colonial-pipeline"></a>

On May 7, 2021, the DarkSide ransomware group attacked Colonial Pipeline, which operates the largest fuel pipeline on the U.S. East Coast, disrupting fuel supply across the southeastern United States. Colonial Pipeline paid a ransom of 75 Bitcoin ($4.4 million at time of payment). The FBI identified DarkSide as the responsible group and, by tracing Bitcoin transactions on the public blockchain, identified approximately 63.7 BTC that had been transferred to a specific address. The FBI obtained the private key for this wallet, and a seizure warrant was executed on May 28, 2021. The DOJ announced the recovery of 63.7 Bitcoin (valued at $2.3 million at the time of seizure, due to a decline in Bitcoin's price) on June 7, 2021. FBI, [_FBI Statement on Compromise of Colonial Pipeline Networks_](https://www.fbi.gov/news/press-releases/fbi-statement-on-compromise-of-colonial-pipeline-networks) (2021.05.10); DOJ, [_Department of Justice Seizes $2.3 Million in Cryptocurrency Paid to the Ransomware Extortionists Darkside_](https://www.justice.gov/archives/opa/pr/department-justice-seizes-23-million-cryptocurrency-paid-ransomware-extortionists-darkside) (2021.06.07).

The Colonial Pipeline recovery was the first major public demonstration of the FBI's ability to recover ransomware Bitcoin payments and fundamentally reshaped the narrative that cryptocurrency transactions are untraceable. FBI Deputy Director Paul Abbate delivered remarks at the press conference announcing the recovery, emphasizing the FBI's ability to "follow the money" even in the cryptocurrency context. FBI, [_FBI Deputy Director Paul Abbate's Remarks at Press Conference Regarding the Ransomware Attack on Colonial Pipeline_](https://www.fbi.gov/news/press-releases/fbi-deputy-director-paul-abbates-remarks-at-press-conference-regarding-the-ransomware-attack-on-colonial-pipeline) (2021.06.07). The precise mechanism by which the FBI obtained the private key for the seized wallet has not been publicly disclosed, fueling significant industry discussion about law enforcement's capabilities to access cryptocurrency private keys.

### Hive Ransomware Infiltration (January 2023) <a href="#hive-ransomware" id="hive-ransomware"></a>

On January 26, 2023, the DOJ announced that the FBI had penetrated the Hive ransomware group's computer network -- and had been operating covertly inside it since July 2022, a period of approximately seven months. During this infiltration, FBI agents obtained decryption keys and distributed them to over 336 victims worldwide, preventing approximately $130 million in ransom payments. The FBI then seized Hive's front-end and back-end infrastructure, including two servers in Los Angeles.

Hive had targeted over 1,500 victims in 80+ countries, including hospitals, school districts, financial firms, and critical infrastructure operators. The operation was conducted in cooperation with the German Federal Criminal Police (BKA), the Netherlands' National High Tech Crime Unit, and Europol. Deputy Attorney General Monaco characterized the operation with the phrase: "We hacked the hackers." DOJ, [_U.S. Department of Justice Disrupts Hive Ransomware Variant_](https://www.justice.gov/archives/opa/video/us-department-justice-disrupts-hive-ransomware-variant) (2023.01.26).

The Hive operation pioneered a "disruption-first" approach, in which law enforcement prioritized victim protection over immediate arrests. The FBI's willingness to operate covertly inside ransomware infrastructure for months, distributing decryption keys to victims without alerting the threat actors, represented a paradigm shift in ransomware response. The approach reflected a strategic calculation: the intelligence value of maintaining access -- and the victim protection enabled by distributing decryption keys -- outweighed the short-term benefits of an immediate takedown and arrest. This model was subsequently applied to the ALPHV/BlackCat disruption and influenced the design of Operation Cronos against LockBit.

### ALPHV/BlackCat Disruption (December 2023) <a href="#alphv-blackcat" id="alphv-blackcat"></a>

On December 19, 2023, the FBI announced it had gained visibility into the ALPHV/BlackCat ransomware group's computer network, seized multiple websites, and obtained 946 public and private key pairs for affiliate panels and Tor sites. The Bureau developed a decryption tool that helped over 500 affected victims restore their systems, saving approximately $68 million in ransom demands. ALPHV/BlackCat had been the second most prolific ransomware-as-a-service variant globally, targeting 1,000+ victims worldwide. DOJ, [_Justice Department Disrupts Prolific ALPHV/Blackcat Ransomware Variant_](https://www.justice.gov/archives/opa/pr/justice-department-disrupts-prolific-alphvblackcat-ransomware-variant) (2023.12.19).

International partners included Europol and law enforcement from Denmark, Germany, Australia, Spain, Austria, the Netherlands, and the United Kingdom. The FBI and CISA jointly issued Advisory AA23-353A ("#StopRansomware: ALPHV Blackcat"). CISA, [_#StopRansomware: ALPHV Blackcat_](https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-353a) (2023.12.19). Despite the FBI's seizure of BlackCat's infrastructure, the group briefly attempted to "unseize" its darknet site before ultimately conducting an exit scam in March 2024 following the Change Healthcare attack.

### LockBit / Operation Cronos (February 2024) <a href="#lockbit-operation-cronos" id="lockbit-operation-cronos"></a>

On February 19-20, 2024, the FBI and UK National Crime Agency (NCA) led a multinational disruption of LockBit, the world's most prolific ransomware-as-a-service operation. LockBit had targeted over 2,000 victims, received more than $120 million in ransom payments, and made demands totaling hundreds of millions of dollars. The operation -- designated Operation Cronos -- resulted in the seizure of 34 servers across multiple countries (four in the United States), the acquisition of over 1,000 decryption keys, the freezing of 200+ cryptocurrency accounts, and the arrest and charging of two LockBit affiliates. A $10 million reward was offered for information on "LockBitSupp," the alleged ringleader. DOJ, [_U.S. and U.K. Disrupt LockBit Ransomware Variant_](https://www.justice.gov/archives/opa/pr/us-and-uk-disrupt-lockbit-ransomware-variant) (2024.02.20).

Operation Cronos also featured a novel psychological operation component: the NCA replaced content on LockBit's dark web site with an expose of its operations, including decryption keys and details about the gang's capabilities. This represented a new tactic in ransomware disruption -- weaponizing the criminals' own infrastructure for public messaging and deterrence.

## North Korean State-Sponsored Crypto Theft <a href="#north-korean-state-sponsored-crypto-theft" id="north-korean-state-sponsored-crypto-theft"></a>

The attribution and investigation of North Korean (DPRK) state-sponsored cryptocurrency theft is principally an FBI story. While [OFAC](https://www.thecod3x.com/ofac/) imposes sanctions on associated wallet addresses and entities, and CISA issues joint technical advisories, it is the FBI that conducts the underlying investigation and issues public attribution statements identifying the DPRK's Lazarus Group (also known as APT38) and the TraderTraitor campaign as responsible for specific thefts. According to the FBI, stolen virtual currency is used to support North Korea's ballistic missile and Weapons of Mass Destruction programs. A United Nations panel estimated that 58 suspected DPRK cyberattacks on cryptocurrency companies generated approximately $3 billion between 2017 and 2023.

### The Lazarus Group / TraderTraitor <a href="#lazarus-group-tradertraitor" id="lazarus-group-tradertraitor"></a>

The Lazarus Group (APT38) is a North Korean state-sponsored advanced persistent threat group that the FBI has identified as responsible for billions of dollars in cryptocurrency theft. In April 2022, CISA, the FBI, and the U.S. Treasury jointly identified the "TraderTraitor" campaign -- a systematic effort targeting blockchain companies through social engineering, fake job offers, and trojanized cryptocurrency applications. The TraderTraitor actors characteristically target multiple employees of the same company simultaneously with well-crafted social engineering tailored to each individual's background and role. CISA, [_TraderTraitor: North Korean State-Sponsored APT Targeting Blockchain Companies_](https://www.cisa.gov/news-events/news/cisa-fbi-and-treasury-expose-latest-tool-north-koreas-cryptocurrency-theft-scheme-applejeus) (2022.04).

A separate campaign, AppleJeus, involves North Korean malware posing as legitimate cryptocurrency trading platforms. At least seven versions of AppleJeus have been identified since 2018. CISA, [_AppleJeus: Analysis of North Korea's Cryptocurrency Malware_](https://www.cisa.gov/news-events/news/cisa-fbi-and-treasury-expose-latest-tool-north-koreas-cryptocurrency-theft-scheme-applejeus). The FBI has also identified a broader pattern in which DPRK actors masquerade as LinkedIn recruiters to deliver malicious applications, a technique used in both the DMM Bitcoin and Bybit attacks.

The FBI's role in DPRK cryptocurrency theft matters is primarily one of attribution and intelligence dissemination. Unlike domestic fraud cases where the FBI can arrest suspects and seize assets, DPRK actors operate from within North Korea and are beyond the reach of U.S. law enforcement arrest authority. The FBI's contribution is therefore analytical: identifying the responsible actors, tracing stolen funds, notifying affected entities and the broader cryptocurrency industry, and providing technical indicators that enable private sector defenses. [OFAC](https://www.thecod3x.com/ofac/) then uses FBI attribution to support sanctions designations against associated wallet addresses and entities.

On September 3, 2024, IC3 issued a public service announcement warning that "North Korea Aggressively Targeting Crypto Industry with Well-Disguised Social Engineering Attacks." IC3, [_PSA: North Korea Aggressively Targeting Crypto Industry_](https://www.ic3.gov/PSA/2024/PSA240903) (2024.09.03).

The following table summarizes estimated DPRK cryptocurrency theft by year:

| Year | Estimated DPRK Crypto Theft | Notable Incidents |
|------|----------------------------|-------------------|
| 2017-2021 | ~$1.2 billion (cumulative) | Multiple exchange hacks |
| 2022 | ~$1.7 billion | Ronin Bridge ($620M), Harmony ($100M), others |
| 2023 | ~$660 million | Atomic Wallet ($100M), Stake.com ($41M), Alphapo ($60M), CoinsPaid ($37M) |
| 2024 | ~$1.34 billion | DMM Bitcoin ($308M), 47 total incidents |
| 2025 (to Feb.) | ~$1.5 billion+ | Bybit ($1.5B) |

### Ronin Bridge ($620M, March 2022) <a href="#ronin-bridge" id="ronin-bridge"></a>

On March 23, 2022, attackers stole approximately $620 million (173,600 ETH and 25.5 million USDC) from the Ronin Network cross-chain bridge, which supported the Axie Infinity game. The attackers gained access to five of nine private keys held by transaction validators, using the majority to approve two fraudulent withdrawal transactions. On April 14, 2022, the FBI confirmed that the Lazarus Group and APT38, cyber actors associated with the DPRK, were responsible. The stolen funds were laundered through over 12,000 crypto addresses, with over $468 million processed through the Tornado Cash mixer. On the same day as the FBI's attribution, the U.S. Treasury's [OFAC](https://www.thecod3x.com/ofac/) sanctioned the Ethereum wallet address used by the attackers. At the time, the Ronin Bridge hack was the largest cryptocurrency theft in history.

### Harmony Horizon Bridge ($100M, June 2022) <a href="#harmony-horizon-bridge" id="harmony-horizon-bridge"></a>

On June 24, 2022, attackers stole $100 million from the Harmony blockchain's Horizon Bridge. On January 23, 2023, the FBI confirmed that the Lazarus Group (APT38) was responsible, specifically identifying the intrusion as part of the TraderTraitor campaign -- which involved social engineering employees of cryptocurrency companies into downloading malicious applications via fake recruitment efforts. On January 13, 2023, the hackers used the RAILGUN privacy protocol to launder $60 million in stolen Ethereum. FBI, [_FBI Confirms Lazarus Group Cyber Actors Responsible for Harmony's Horizon Bridge Currency Theft_](https://www.fbi.gov/news/press-releases/fbi-confirms-lazarus-group-cyber-actors-responsible-for-harmonys-horizon-bridge-currency-theft) (2023.01.23). The FBI's attribution specifically named the TraderTraitor campaign, linking multiple DPRK crypto theft operations under a single umbrella for the first time.

### Atomic Wallet, Alphapo, CoinsPaid, and Stake.com (2023) <a href="#2023-dprk-hacks" id="2023-dprk-hacks"></a>

In the summer of 2023, the FBI attributed a rapid succession of cryptocurrency thefts to TraderTraitor-affiliated DPRK actors. On June 2, 2023, attackers compromised 5,500 customer wallets on Atomic Wallet, stealing $100 million. On June 22, 2023, attackers stole $60 million from Alphapo and $37 million from CoinsPaid. On August 22, 2023, the FBI confirmed that TraderTraitor was responsible for all three thefts and identified approximately 1,580 BTC held in six wallets. FBI, [_FBI Identifies Cryptocurrency Funds Stolen by DPRK_](https://www.fbi.gov/news/press-releases/fbi-identifies-cryptocurrency-funds-stolen-by-dprk) (2023.08.22). The FBI publicly warned cryptocurrency companies to examine the blockchain data associated with the listed wallet addresses and "be vigilant in guarding against transactions directly with, or derived from, the addresses."

On September 4, 2023, attackers stole $41 million from Stake.com ($15.7 million in ETH, $25.6 million in BSC and Polygon tokens) through a compromised hot wallet private key. On September 7, 2023, just three days later, the FBI attributed the theft to the Lazarus Group. FBI, [_FBI Identifies Lazarus Group Cyber Actors as Responsible for Theft of $41 Million from Stake.com_](https://www.fbi.gov/news/press-releases/fbi-identifies-lazarus-group-cyber-actors-as-responsible-for-theft-of-41-million-from-stakecom) (2023.09.07). The three-day turnaround from theft to public attribution demonstrated the FBI's increasingly rapid tracking capabilities.

### DMM Bitcoin ($308M, May 2024) <a href="#dmm-bitcoin" id="dmm-bitcoin"></a>

In May 2024, attackers stole $308 million (4,502.9 BTC) from DMM Bitcoin, a Japanese cryptocurrency exchange. On December 24, 2024, the FBI, the Department of Defense Cyber Crime Center (DC3), and Japan's National Police Agency (NPA) jointly attributed the theft to TraderTraitor. The attack was initiated in late March 2024, when a DPRK actor masquerading as a LinkedIn recruiter sent a malicious Python script -- disguised as a pre-employment test hosted on GitHub -- to an employee at Ginco, a Japanese cryptocurrency wallet software company. After compromising the employee's session cookies, the actors accessed Ginco's unencrypted communications system and manipulated a legitimate transaction request by a DMM employee to redirect funds. FBI, [_FBI, DC3, and NPA Identification of North Korean Cyber Actors Tracked as TraderTraitor Responsible for Theft of $308 Million from bitcoin.dmm.com_](https://www.fbi.gov/news/press-releases/fbi-dc3-and-npa-identification-of-north-korean-cyber-actors-tracked-as-tradertraitor-responsible-for-theft-of-308-million-from-bitcoindmmcom) (2024.12.24). DMM Bitcoin announced it would shut down operations as a result of the theft, making it the largest single cryptocurrency hack of 2024.

### Bybit ($1.5B, February 2025) <a href="#bybit" id="bybit"></a>

On February 21, 2025, attackers stole approximately $1.5 billion from the Bybit cryptocurrency exchange -- the largest single cryptocurrency theft in history, surpassing all prior incidents. On February 26, 2025, the FBI attributed the theft to North Korea, referring to the activity as "TraderTraitor." The attack began when a developer for Safe{Wallet}, a multisig wallet infrastructure provider, fell for a social engineering attack that compromised his workstation. Malicious code targeting Bybit's Ethereum cold wallet was designed to activate during the next transaction on February 21, manipulating the content during the signing process to redirect funds to an attacker-controlled address. FBI, [_North Korea Responsible for $1.5 Billion Bybit Hack_](https://www.fbi.gov/investigate/cyber/alerts/2025/north-korea-responsible-for-1-5-billion-bybit-hack) (2025.02.26); IC3, [_PSA: North Korea Responsible for $1.5 Billion Bybit Hack_](https://www.ic3.gov/psa/2025/psa250226) (2025.02.26).

TraderTraitor actors rapidly converted some stolen assets to Bitcoin and other virtual assets, dispersing them across thousands of addresses on multiple blockchains. TraderTraitor actors rapidly converted some stolen assets to Bitcoin and other virtual assets, dispersing them across thousands of addresses on multiple blockchains. The FBI issued a public notice listing Ethereum addresses associated with the stolen funds and called on "RPC node operators, exchanges, bridges, blockchain analytics firms, DeFi services, and other virtual asset service providers to block transactions with or derived from addresses associated with TraderTraitor." The Bybit hack demonstrated the escalating sophistication and ambition of DPRK cyber operations, the continued primacy of the FBI's attribution role, and the Bureau's increasingly rapid response cycle from incident to public attribution.

## Pig Butchering and Investment Fraud <a href="#pig-butchering-and-investment-fraud" id="pig-butchering-and-investment-fraud"></a>

### Scale of the Problem <a href="#scale-of-the-problem" id="scale-of-the-problem"></a>

Cryptocurrency investment fraud -- colloquially known as "pig butchering" (from the Chinese term _sha zhu pan_, referring to the practice of fattening a pig before slaughter) -- has become the single most costly category of cryptocurrency crime reported to IC3. These schemes typically involve scammers building trust with victims through social media or dating platforms over weeks or months, then directing them to fraudulent cryptocurrency investment platforms that display fabricated gains to encourage ever-larger deposits. When victims attempt to withdraw funds, they are met with fabricated tax obligations, fees, or outright refusal.

The FBI has assessed that these scams originate from organized crime groups operating scam compounds in Southeast Asia (primarily Cambodia, Myanmar, and Laos), the Middle East, Africa, and South America. Many individuals working in these compounds are themselves victims of human trafficking, forced into conducting fraud under coercive conditions.

Investment fraud losses reported to IC3 escalated from $2.57 billion in 2022 to $3.96 billion in 2023 to $5.8 billion in 2024. The human cost extends beyond financial loss. As of 2025 reporting, 80 victims contacted through Operation Level Up have been referred to FBI victim specialists for suicide intervention -- a statistic that underscores the devastating psychological impact these schemes inflict on their targets. IC3, [_2024 Internet Crime Report_](https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf) (2025.04).

### Operation Level Up <a href="#operation-level-up" id="operation-level-up"></a>

Operation Level Up, launched in January 2024 as a joint initiative of the FBI and the United States Secret Service, represents a paradigm shift from reactive investigation to proactive victim protection. Rather than waiting for victims to report losses, FBI agents use investigative techniques to identify individuals who are in the process of being defrauded through cryptocurrency investment schemes and contact them directly to warn them that they are being scammed.

As of 2025 reporting, Operation Level Up has achieved the following results:

* 8,103 victims of cryptocurrency investment fraud identified and notified
* 77% of those victims were unaware they were being scammed at the time of FBI contact
* An estimated $511.5 million in further losses prevented
* 80 victims referred to FBI victim specialists for suicide intervention

FBI, [_Operation Level Up_](https://www.fbi.gov/how-we-can-help-you/victim-services/national-crimes-and-victim-resources/operation-level-up); FBI, [_Operation Level Up: How the FBI Is Saving Victims from Cryptocurrency Investment Fraud_](https://www.fbi.gov/news/stories/operation-level-up-how-the-fbi-is-saving-victims-from-cryptocurrency-investment-fraud).

The program is operationally innovative in several respects. First, the 77% figure -- indicating that more than three-quarters of victims did not know they were being defrauded -- illustrates the effectiveness of the social engineering employed by these schemes. Second, the proactive model effectively converts the FBI from a post-hoc investigative agency into an active fraud prevention mechanism. Third, the suicide intervention component reflects an institutional recognition that financial crime victimization can produce acute psychological crisis requiring immediate specialized support.

Operation Level Up has continued under the Trump administration, consistent with the retained DOJ enforcement priority of protecting digital asset investors from victimization. In 2025, the DOJ announced a new Scam Center Strike Force combining various DOJ components, federal law enforcement agencies, and regulatory partners to "turbocharge investigations, increase asset seizures, and secure U.S.-based infrastructure" enabling pig butchering and cryptocurrency investment fraud schemes.

## Public Warnings and Advisories <a href="#public-warnings-and-advisories" id="public-warnings-and-advisories"></a>

### Joint Advisories with CISA and NSA <a href="#joint-advisories-cisa-nsa" id="joint-advisories-cisa-nsa"></a>

The FBI regularly co-authors joint cybersecurity advisories with the Cybersecurity and Infrastructure Security Agency (CISA), the National Security Agency (NSA), and international partners. Key advisories relevant to cryptocurrency include:

* **April 2022:** "TraderTraitor: North Korean State-Sponsored APT Targeting Blockchain Companies" (CISA, FBI, Treasury). CISA, [_TraderTraitor Advisory_](https://www.cisa.gov/news-events/news/cisa-fbi-and-treasury-expose-latest-tool-north-koreas-cryptocurrency-theft-scheme-applejeus) (2022.04).
* **February 9, 2023:** "#StopRansomware: Ransomware Attacks on Critical Infrastructure Fund DPRK Malicious Cyber Activities" (NSA, FBI, CISA, HHS, Republic of Korea NIS and DSA). CISA, [_Advisory AA23-040A_](https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-040a) (2023.02.09).
* **December 19, 2023:** "#StopRansomware: ALPHV Blackcat" (CISA, FBI). CISA, [_Advisory AA23-353A_](https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-353a) (2023.12.19).
* **July 25, 2024:** North Korean Cyber Espionage Activity Advisory (FBI, CISA, and international partners). CISA, [_North Korean Cyber Espionage Advisory_](https://www.cisa.gov/news-events/alerts/2024/07/25/fbi-cisa-and-partners-release-advisory-highlighting-north-korean-cyber-espionage-activity) (2024.07.25).

### IC3 Cryptocurrency Reports <a href="#ic3-cryptocurrency-reports" id="ic3-cryptocurrency-reports"></a>

In addition to its annual Internet Crime Report, IC3 issues public service announcements and targeted warnings on cryptocurrency-specific threats. Notable PSAs include:

* IC3, [_The FBI Warns of a Spike in Cryptocurrency Investment Schemes_](https://www.ic3.gov/PSA/2023/PSA230314) (2023.03.14).
* IC3, [_Criminals Pose as Non-Fungible Token (NFT) Developers to Target Internet Users_](https://www.ic3.gov/PSA/2023/psa230804) (2023.08.04).
* IC3, [_FBI Guidance for Cryptocurrency Scam Victims_](https://www.ic3.gov/PSA/2023/psa230824) (2023.08.24) (warning about fraudulent recovery services targeting scam victims).
* IC3, [_Alert on Cryptocurrency Money Services Businesses_](https://www.ic3.gov/PSA/2024/PSA240425) (2024.04.25) (warning against unregistered MSBs).
* FBI, [_Fictitious Law Firms Targeting Cryptocurrency Scam Victims_](https://www.fbi.gov/investigate/cyber/alerts/2025/fictitious-law-firms-targeting-cryptocurrency-scam-victims) (2025).

In September 2024, the FBI published its first standalone Cryptocurrency Fraud Report, covering 2023 data. FBI, [_FBI Publishes 2023 Cryptocurrency Fraud Report_](https://www.fbi.gov/news/press-releases/fbi-publishes-2023-cryptocurrency-fraud-report) (2024.09.09). The publication of a dedicated cryptocurrency report, separate from the general annual IC3 report, signals the institutional significance that crypto crime has attained within the Bureau's reporting framework.

## Partnerships and International Cooperation <a href="#partnerships-and-international-cooperation" id="partnerships-and-international-cooperation"></a>

### Europol / Joint Cybercrime Action Taskforce (J-CAT) <a href="#europol-j-cat" id="europol-j-cat"></a>

The Joint Cybercrime Action Taskforce (J-CAT) was established in September 2014 at Europol headquarters in The Hague, Netherlands. It comprises 18 cyber liaison officers from 16 countries (Austria, France, Germany, Italy, Netherlands, Romania, Poland, Spain, Sweden, Australia, Canada, Colombia, Norway, Switzerland, the United Kingdom, and the United States) plus Europol's European Cybercrime Centre (EC3). The FBI is the U.S. representative in J-CAT.

J-CAT has facilitated real-time intelligence sharing and coordinated operations in virtually every major FBI cryptocurrency enforcement action with international dimensions, including: Operation Onymous / Silk Road 2.0 (2014), AlphaBay / Operation Bayonet (2017), Hive ransomware disruption (2023), ALPHV/BlackCat disruption (2023), Operation Cronos / LockBit (2024), and ChipMixer takedown. Europol, [_Joint Cybercrime Action Taskforce_](https://www.europol.europa.eu/operations-services-and-innovation/services-support/joint-cybercrime-action-taskforce).

### Five Eyes Cooperation <a href="#five-eyes-cooperation" id="five-eyes-cooperation"></a>

The FBI maintains close cooperation with its Five Eyes alliance partners -- the intelligence and law enforcement agencies of the United States, United Kingdom, Canada, Australia, and New Zealand. FBI Director Wray convened a Five Eyes Summit focused on protecting innovation and preventing economic espionage, which addressed cyber threats including cryptocurrency-related national security concerns. FBI, [_FBI Director Convenes Five Eyes Summit on Protecting Innovation, Preventing Economic Espionage_](https://www.fbi.gov/news/stories/fbi-director-convenes-five-eyes-summit-on-protecting-innovation-preventing-economic-espionage); FBI, [_FBI Hosts Five Eyes Summit to Launch Drive to Secure Innovation_](https://www.fbi.gov/news/press-releases/fbi-hosts-five-eyes-summit-to-launch-drive-to-secure-innovation-in-response-to-intelligence-threats). Five Eyes cooperation has been particularly significant in DPRK attribution and ransomware operations, where threat intelligence from multiple national agencies is pooled to enable attribution and disruption. The UK National Crime Agency served as a co-lead on Operation Cronos (LockBit), and Australian law enforcement has partnered on multiple ALPHV/BlackCat-related actions.

### Interagency Cooperation (IRS-CI, Secret Service, HSI) <a href="#interagency-cooperation" id="interagency-cooperation"></a>

Cryptocurrency investigations typically involve multi-agency cooperation. Key federal partners include:

* **IRS Criminal Investigation (IRS-CI):** Often leads financial investigations into cryptocurrency exchanges and conducts blockchain tracing through its dedicated Cyber & Forensic Services unit. IRS-CI led the criminal investigation in the Binance case and made the critical identification that connected Ross Ulbricht to the Silk Road. _See_ [IRS](https://www.thecod3x.com/irs/).
* **U.S. Secret Service (USSS):** Investigates cyber-enabled financial crimes and cryptocurrency fraud. The Secret Service partners with the FBI on Operation Level Up.
* **Homeland Security Investigations (HSI):** Partners on darknet investigations and exchange fraud cases, contributing to operations including Bitfinex, Hydra Market, and Incognito Market.
* **Drug Enforcement Administration (DEA):** Investigates crypto-facilitated drug trafficking on darknet markets, partnering on Hydra Market and Bitzlato.
* **Department of Defense Cyber Crime Center (DC3):** Partnered with the FBI on the DMM Bitcoin/TraderTraitor attribution in December 2024.

In 2023, U.S. law enforcement agencies collectively seized or forfeited over $3 billion in digital assets across all agencies.

The Joint Chiefs of Global Tax Enforcement (J5) -- comprising revenue authorities of Australia, Canada, the Netherlands, the United Kingdom, and the United States (IRS-CI) -- has also made cryptocurrency a major enforcement priority. The J5 has issued advisory notes to financial institutions about five risk indicators tied to crypto assets, and its cyber investigations have led to seizures of $333+ million in assets and $25+ million in cryptocurrency. The J5 holds regular multi-day "Cyber Challenges" where member agencies collaborate on live cryptocurrency tracing exercises. IRS-CI, [_J5 Report_](https://www.irs.gov/pub/irs-ci/j5-report-7-25-2024.pdf) (2024.07.25).

## Victim Assistance <a href="#victim-assistance" id="victim-assistance"></a>

### IC3 Recovery Asset Team (RAT) <a href="#ic3-recovery-asset-team" id="ic3-recovery-asset-team"></a>

The Recovery Asset Team was established in February 2018 to streamline communications with financial institutions when individuals become victims of money transfer fraud. When IC3 receives a complaint involving fraudulent domestic wire transfers, RAT forwards transaction details to the recipient bank to request freezing of the account through the Financial Fraud Kill Chain (FFKC) process. In 2024, RAT froze over $561.6 million in fraudulently obtained funds, achieving a 66% success rate. In 2023, the team froze over $530 million. FBI, [_IC3 Recovery Asset Team_](https://www.fbi.gov/contact-us/field-offices/lasvegas/news/press-releases/fbi-las-vegas-federal-fact-friday-recovery-asset-team).

RAT primarily handles traditional wire transfers and bank accounts. Cryptocurrency seizures typically require separate procedures involving court orders and blockchain tracing, as discussed above. This distinction is significant because the speed advantages of RAT's Financial Fraud Kill Chain process -- which enables rapid bank account freezes -- are generally not available for cryptocurrency transactions, which are settled on-chain within minutes and often moved through mixers or cross-chain bridges before law enforcement can intervene. The FBI has increasingly emphasized that speed of reporting is critical: victims who report within 24-48 hours of a fraudulent cryptocurrency transfer have the best chance of any recovery.

### Cryptocurrency Seizure and Return <a href="#cryptocurrency-seizure-and-return" id="cryptocurrency-seizure-and-return"></a>

The FBI has facilitated the recovery of substantial sums for cryptocurrency crime victims:

* **Bitfinex case:** Approximately $10 billion in stolen funds ultimately recovered and available for restitution to Bitfinex hack victims.
* **Hive ransomware:** 336 victim interventions with decryption keys, preventing $130 million in ransom payments.
* **ALPHV/BlackCat:** 500+ victims provided decryption tools, saving $68 million.
* **LockBit (Operation Cronos):** 1,000+ decryption keys distributed to victims.
* **Operation Level Up:** $511.5 million saved for pig butchering victims through proactive notification.

### Public Education <a href="#public-education" id="public-education"></a>

The FBI maintains dedicated public education resources on cryptocurrency fraud through both FBI.gov and IC3.gov. FBI, [_Cryptocurrency Investment Fraud_](https://www.fbi.gov/how-we-can-help-you/victim-services/national-crimes-and-victim-resources/cryptocurrency-investment-fraud); IC3, [_Cryptocurrency Information_](https://www.ic3.gov/CrimeInfo/Cryptocurrency). Victims can file complaints at [ic3.gov](https://www.ic3.gov) or contact their local FBI field office. The FBI's Portland office has produced educational content explaining cryptocurrency basics for the public. FBI, [_Portland Cyber: Cryptocurrency_](https://www.fbi.gov/video-repository/portland-cyber-cryptocurrency-102121.mp4/view) (2021.10.21).

In 2025, the FBI issued warnings about a secondary victimization pattern: fictitious law firms targeting individuals who have already been defrauded through cryptocurrency scams, offering fraudulent "recovery" services that extract additional funds from victims. This pattern of re-victimization compounds the financial and psychological harm of the initial fraud and demonstrates the need for ongoing public awareness campaigns.

## Leadership <a href="#leadership" id="leadership"></a>

### Director Christopher Wray (2017-2025) <a href="#director-wray" id="director-wray"></a>

Christopher Wray served as the 8th FBI Director from August 2, 2017, until his resignation on January 20, 2025. Under Wray's tenure, the FBI dramatically expanded its cryptocurrency investigative capabilities, creating VAXU, launching Operation Level Up, and conducting some of the largest digital asset seizures in history. Wray regularly addressed cryptocurrency enforcement in public remarks, including at the Munich Cyber Security Conference (2023 and 2024), the Mandiant/mWISE 2023 Cybersecurity Conference, and the 2024 Aspen Cyber Summit.

At the 2023 Munich Conference, Wray announced the arrest of Russian national Anatoly Legkodymov, who administered the Bitzlato cryptocurrency exchange, stating: "Cryptocurrency exchanges like Bitzlato are a vital part of the infrastructure cybercriminals use to launder the funds extorted from their victims." FBI, [_Director Wray's Remarks at the 2023 Homeland Security Symposium and Expo_](https://www.fbi.gov/news/speeches-and-testimony/director-wrays-remarks-at-the-2023-homeland-security-symposium-and-expo-021623) (2023.02.16). At the 2024 Munich Security Conference, Wray highlighted the FBI's focus on disrupting criminal organizations' "money, the cryptocurrency wallets they use to stash their ill-gotten gains, hire associates, and lease infrastructure." FBI, [_Director Wray's Remarks at the Munich Security Conference_](https://www.fbi.gov/news/speeches-and-testimony/director-wray-s-remarks-at-the-munich-security-conference) (2024.02).

In December 2023, Wray testified before the Senate Judiciary Committee on cyber threats, including cryptocurrency-facilitated ransomware and North Korean state-sponsored crypto theft. Wray, [_Testimony Before the Senate Judiciary Committee_](https://www.judiciary.senate.gov/imo/media/doc/2023-12-05_-_testimony_-_wray.pdf) (2023.12.05). At the 2024 Aspen Cyber Summit, Wray further detailed FBI efforts to disrupt criminal crypto infrastructure. FBI, [_Director Wray's Remarks at the 2024 Aspen Cyber Summit_](https://www.fbi.gov/news/speeches-and-testimony/director-wray-s-remarks-at-the-2024-aspen-cyber-summit) (2024).

Wray announced his resignation on December 11, 2024, ahead of President Trump's stated intention to replace him with Kash Patel. Under Wray's leadership, the FBI evolved from an agency that conducted its first cryptocurrency investigation in 2013 (Silk Road) into one possessing dedicated cryptocurrency units, advanced blockchain analysis capabilities, and an established track record of billion-dollar digital asset seizures.

### Director Kash Patel (2025-present) <a href="#director-patel" id="director-patel"></a>

Kash Patel was confirmed as the 9th FBI Director by a 51-49 Senate vote on February 20, 2025, with Republican Senators Susan Collins and Lisa Murkowski voting against. He was sworn in on February 21, 2025, by Attorney General Pamela Bondi. FBI, [_New FBI Director Takes Oath of Office_](https://www.fbi.gov/news/stories/new-fbi-director-takes-oath-of-office) (2025.02.21).

Patel is the first FBI director with disclosed cryptocurrency investments. Financial disclosures reveal holdings of $50,001-$100,000 in the Grayscale Bitcoin Trust ETF (GBTC), up to $15,000 in the Grayscale Bitcoin Mini Trust ETF, and $50,001-$100,000 in Core Scientific (CORZ), a Bitcoin mining company, for total crypto-related holdings estimated at approximately $115,000. Patel previously served as a director at Trump Media and Technology Group (TMTG), which launched TruthFi, a fintech platform offering Bitcoin and crypto-linked products. Patel stated he would terminate his TMTG position upon assuming the FBI director role. The Street, [_Trump's New FBI Director Kash Patel Is a Bitcoiner_](https://www.thestreet.com/crypto/policy/trumps-new-fbi-director-kash-patel-is-a-bitcoiner).

As of February 2026, no specific changes to FBI cryptocurrency enforcement posture under Director Patel have been publicly announced.

## FBI Under the Trump Administration <a href="#fbi-under-the-trump-administration" id="fbi-under-the-trump-administration"></a>

### NCET Disbandment Impact <a href="#ncet-disbandment-impact" id="ncet-disbandment-impact"></a>

On April 7, 2025, Deputy Attorney General Todd Blanche issued a memorandum ordering that the DOJ's National Cryptocurrency Enforcement Team (NCET) "will be disbanded effective immediately." The memo further directed the DOJ's Market Integrity and Major Frauds Unit to cease cryptocurrency enforcement and instead focus on immigration and procurement fraud. The stated policy rationale was that "the Justice Department will no longer pursue litigation or enforcement actions that have the effect of superimposing regulatory frameworks on digital assets while President Trump's actual regulators do this work outside the punitive criminal justice framework." CNBC, [_DOJ Ends Crypto Enforcement Team, Shifts Focus to Terrorism and Fraud_](https://www.cnbc.com/2025/04/08/doj-ends-crypto-enforcement-team-shifts-focus-to-terrorism-and-fraud.html) (2025.04.08); Fortune, [_DOJ NCET Disbands_](https://fortune.com/crypto/2025/04/08/doj-ncet-disbands-memo-todd-blanche-trump/) (2025.04.08).

Under the new policy framework, the DOJ retains authority to prosecute those who victimize digital asset investors and those who use digital assets in furtherance of terrorism, narcotics trafficking, human trafficking, organized crime, hacking, and cartel/gang financing. The practical impact on the FBI's VAXU is notable: while VAXU remains operational, its close working relationship with NCET -- the prosecutorial counterpart for which it was specifically designed -- has been severed. This creates a potential coordination gap in cases that previously would have been jointly managed by VAXU and NCET attorneys. For full discussion of the DOJ policy shift, _see_ [DOJ](https://www.thecod3x.com/doj/). _See also_ [Executive Actions](https://www.thecod3x.com/exec/) (discussing the Trump administration's broader cryptocurrency policy framework).

### Continued Operations <a href="#continued-operations" id="continued-operations"></a>

Despite the policy shifts described above, the FBI has continued significant cryptocurrency enforcement activities under the Trump administration, particularly in areas expressly retained under the Blanche memorandum:

* **Bybit Hack Attribution (February 26, 2025):** Five days after Director Patel's swearing-in, the FBI attributed the $1.5 billion Bybit hack to North Korea's TraderTraitor campaign, demonstrating uninterrupted focus on nation-state cryptocurrency theft.
* **Operation Level Up:** The FBI's proactive outreach to cryptocurrency fraud victims has continued, consistent with the retained priority of protecting digital asset investors from victimization.
* **Fictitious Law Firm Warning (2025):** The FBI issued new warnings about fake law firms targeting cryptocurrency scam victims with secondary "recovery" scams, reflecting ongoing consumer protection efforts.

The Trump administration's approach to FBI cryptocurrency enforcement reflects a dual-track framework: reduced enforcement against cryptocurrency industry actors (exchanges, market makers, DeFi platforms) -- effectuated through NCET disbandment and presidential pardons -- paired with continued and in some cases intensified enforcement against foreign adversaries (North Korea, Iran, Russia), ransomware groups, and fraud schemes targeting American consumers. This framework creates a potential enforcement gap in areas such as exchange compliance, money transmission registration, and market manipulation that previously fell within NCET and DOJ prosecutorial authority.

The dual-track has practical implications for the FBI's investigative posture. Investigations of exchange compliance failures, unregistered money transmission, and market manipulation -- areas where the NCET previously provided prosecutorial coordination -- now lack a dedicated DOJ counterpart. Meanwhile, the FBI's work against nation-state actors, ransomware operators, and consumer fraud appears not only undiminished but reinforced by the administration's retention of those enforcement priorities. The January 2026 participation of the FBI in multi-agency investigation of cryptocurrency platforms enabling Iranian sanctions evasion further illustrates the continuation of the national security enforcement track. _See_ [OFAC](https://www.thecod3x.com/ofac/) (discussing January 2026 designation of Zedcex and Zedxion exchanges).

### Ross Ulbricht Pardon <a href="#ross-ulbricht-pardon" id="ross-ulbricht-pardon"></a>

On January 21, 2025 -- Inauguration Day -- President Trump granted a full and unconditional pardon to Ross Ulbricht, the founder and operator of the Silk Road darknet marketplace, who had been serving a life sentence without parole since 2015. Trump posted on Truth Social that the pardon was issued "in honor of her and the Libertarian Movement, which supported me so strongly," referring to Ulbricht's mother. CNBC, [_Trump Pardons Silk Road's Ross Ulbricht_](https://www.cnbc.com/2025/01/21/trump-pardons-silk-road-ross-ulbricht-.html) (2025.01.21).

The Ulbricht pardon effectively reversed the outcome of the FBI's most historically significant cryptocurrency investigation. President Trump also pardoned Changpeng Zhao (Binance founder) on October 23, 2025. CNBC, [_Trump Pardons Binance Founder CZ Zhao_](https://www.cnbc.com/2025/10/23/trump-pardons-binance-founder-cz-zhao.html) (2025.10.23). The Zhao pardon drew significant criticism due to financial ties between Binance and Trump family crypto ventures, including World Liberty Financial and the USD1 stablecoin. BitMEX executives also received pardons in 2025. Three crypto-related pardons in ten months represent a dramatic reversal of convictions obtained through years of FBI and IRS-CI investigation.

## Index of Sources <a href="#index-of-sources" id="index-of-sources"></a>

* IC3, [_PSA: North Korea Responsible for $1.5 Billion Bybit Hack_](https://www.ic3.gov/psa/2025/psa250226) (2025.02.26)
* FBI, [_North Korea Responsible for $1.5 Billion Bybit Hack_](https://www.fbi.gov/investigate/cyber/alerts/2025/north-korea-responsible-for-1-5-billion-bybit-hack) (2025.02.26)
* FBI, [_New FBI Director Takes Oath of Office_](https://www.fbi.gov/news/stories/new-fbi-director-takes-oath-of-office) (2025.02.21)
* FBI, [_Fictitious Law Firms Targeting Cryptocurrency Scam Victims_](https://www.fbi.gov/investigate/cyber/alerts/2025/fictitious-law-firms-targeting-cryptocurrency-scam-victims) (2025)
* CNBC, [_Trump Pardons Binance Founder CZ Zhao_](https://www.cnbc.com/2025/10/23/trump-pardons-binance-founder-cz-zhao.html) (2025.10.23)
* IC3, [_2024 Internet Crime Report_](https://www.ic3.gov/AnnualReport/Reports/2024_IC3Report.pdf) (2025.04)
* CNBC, [_Trump Pardons Silk Road's Ross Ulbricht_](https://www.cnbc.com/2025/01/21/trump-pardons-silk-road-ross-ulbricht-.html) (2025.01.21)
* CNBC, [_DOJ Ends Crypto Enforcement Team, Shifts Focus to Terrorism and Fraud_](https://www.cnbc.com/2025/04/08/doj-ends-crypto-enforcement-team-shifts-focus-to-terrorism-and-fraud.html) (2025.04.08)
* Fortune, [_DOJ NCET Disbands_](https://fortune.com/crypto/2025/04/08/doj-ncet-disbands-memo-todd-blanche-trump/) (2025.04.08)
* FBI, [_FBI, DC3, and NPA Identification of North Korean Cyber Actors Tracked as TraderTraitor Responsible for Theft of $308 Million from bitcoin.dmm.com_](https://www.fbi.gov/news/press-releases/fbi-dc3-and-npa-identification-of-north-korean-cyber-actors-tracked-as-tradertraitor-responsible-for-theft-of-308-million-from-bitcoindmmcom) (2024.12.24)
* Fortune, [_FBI, DOJ Announce Crypto Market Manipulation Fraud Charges_](https://fortune.com/crypto/2024/10/09/fbi-doj-crypto-market-manipulation-fraud-charges/) (2024.10.09)
* IC3, [_PSA: North Korea Aggressively Targeting Crypto Industry_](https://www.ic3.gov/PSA/2024/PSA240903) (2024.09.03)
* FBI, [_FBI Publishes 2023 Cryptocurrency Fraud Report_](https://www.fbi.gov/news/press-releases/fbi-publishes-2023-cryptocurrency-fraud-report) (2024.09.09)
* IC3, [_2023 Cryptocurrency Fraud Report_](https://www.ic3.gov/AnnualReport/Reports/2023_IC3CryptocurrencyReport.pdf) (2024.09.09)
* CISA, [_North Korean Cyber Espionage Activity Advisory_](https://www.cisa.gov/news-events/alerts/2024/07/25/fbi-cisa-and-partners-release-advisory-highlighting-north-korean-cyber-espionage-activity) (2024.07.25)
* IC3, [_Alert on Cryptocurrency Money Services Businesses_](https://www.ic3.gov/PSA/2024/PSA240425) (2024.04.25)
* DOJ, [_U.S. and U.K. Disrupt LockBit Ransomware Variant_](https://www.justice.gov/archives/opa/pr/us-and-uk-disrupt-lockbit-ransomware-variant) (2024.02.20)
* DOJ, [_Samuel Bankman-Fried Sentenced to 25 Years_](https://www.justice.gov/archives/opa/pr/samuel-bankman-fried-sentenced-25-years-his-orchestration-multiple-fraudulent-schemes) (2024.03.28)
* FBI, [_Director Wray's Remarks at the Munich Security Conference_](https://www.fbi.gov/news/speeches-and-testimony/director-wray-s-remarks-at-the-munich-security-conference) (2024.02)
* DOJ, [_Justice Department Disrupts Prolific ALPHV/Blackcat Ransomware Variant_](https://www.justice.gov/archives/opa/pr/justice-department-disrupts-prolific-alphvblackcat-ransomware-variant) (2023.12.19)
* CISA, [_#StopRansomware: ALPHV Blackcat_](https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-353a) (2023.12.19)
* FBI, [_Director Wray's Remarks at the 2024 Aspen Cyber Summit_](https://www.fbi.gov/news/speeches-and-testimony/director-wray-s-remarks-at-the-2024-aspen-cyber-summit) (2024)
* Wray, [_Testimony Before the Senate Judiciary Committee_](https://www.judiciary.senate.gov/imo/media/doc/2023-12-05_-_testimony_-_wray.pdf) (2023.12.05)
* FBI, [_Director Wray's Remarks at the Mandiant/mWISE 2023 Cybersecurity Conference_](https://www.fbi.gov/news/speeches-and-testimony/director-wrays-remarks-at-the-mandiantmwise-2023-cybersecurity-conference) (2023.10)
* FBI, [_Lazarus Group Cyber Actors Responsible for Theft of $41 Million from Stake.com_](https://www.fbi.gov/news/press-releases/fbi-identifies-lazarus-group-cyber-actors-as-responsible-for-theft-of-41-million-from-stakecom) (2023.09.07)
* FBI, [_FBI Identifies Cryptocurrency Funds Stolen by DPRK_](https://www.fbi.gov/news/press-releases/fbi-identifies-cryptocurrency-funds-stolen-by-dprk) (2023.08.22)
* IC3, [_FBI Guidance for Cryptocurrency Scam Victims_](https://www.ic3.gov/PSA/2023/psa230824) (2023.08.24)
* IC3, [_Criminals Pose as Non-Fungible Token (NFT) Developers to Target Internet Users_](https://www.ic3.gov/PSA/2023/psa230804) (2023.08.04)
* DOJ, [_Bitfinex Hacker and Wife Plead Guilty to Money Laundering Conspiracy Involving Billions_](https://www.justice.gov/archives/opa/pr/bitfinex-hacker-and-wife-plead-guilty-money-laundering-conspiracy-involving-billions) (2023.08.03)
* IC3, [_The FBI Warns of a Spike in Cryptocurrency Investment Schemes_](https://www.ic3.gov/PSA/2023/PSA230314) (2023.03.14)
* CISA, [_#StopRansomware: Ransomware Attacks on Critical Infrastructure Fund DPRK Malicious Cyber Activities_](https://www.cisa.gov/news-events/cybersecurity-advisories/aa23-040a) (2023.02.09)
* FBI, [_Director Wray's Remarks at the 2023 Homeland Security Symposium and Expo_](https://www.fbi.gov/news/speeches-and-testimony/director-wrays-remarks-at-the-2023-homeland-security-symposium-and-expo-021623) (2023.02.16)
* FBI, [_FBI Confirms Lazarus Group Cyber Actors Responsible for Harmony's Horizon Bridge Currency Theft_](https://www.fbi.gov/news/press-releases/fbi-confirms-lazarus-group-cyber-actors-responsible-for-harmonys-horizon-bridge-currency-theft) (2023.01.23)
* DOJ, [_U.S. Department of Justice Disrupts Hive Ransomware Variant_](https://www.justice.gov/archives/opa/video/us-department-justice-disrupts-hive-ransomware-variant) (2023.01.26)
* DOJ, [_U.S. Attorney Announces Historic $3.36 Billion Cryptocurrency Seizure and Conviction_](https://www.justice.gov/usao-sdny/pr/us-attorney-announces-historic-336-billion-cryptocurrency-seizure-and-conviction) (2022.11.04)
* Skadden, [_Cryptoasset Seizures and Forfeitures_](https://www.skadden.com/insights/publications/2022/09/cryptoasset-seizures-and-forfeitures) (2022.09)
* DOJ, [_Bitconnect Founder Indicted in Global $2.4 Billion Cryptocurrency Scheme_](https://www.justice.gov/archives/opa/pr/bitconnect-founder-indicted-global-24-billion-cryptocurrency-scheme) (2022.02)
* CISA, [_TraderTraitor: North Korean State-Sponsored APT Targeting Blockchain Companies_](https://www.cisa.gov/news-events/news/cisa-fbi-and-treasury-expose-latest-tool-north-koreas-cryptocurrency-theft-scheme-applejeus) (2022.04)
* DOJ, [_Department of Justice Seizes $2.3 Million in Cryptocurrency Paid to the Ransomware Extortionists Darkside_](https://www.justice.gov/archives/opa/pr/department-justice-seizes-23-million-cryptocurrency-paid-ransomware-extortionists-darkside) (2021.06.07)
* FBI, [_FBI Deputy Director Paul Abbate's Remarks at Press Conference Regarding the Ransomware Attack on Colonial Pipeline_](https://www.fbi.gov/news/press-releases/fbi-deputy-director-paul-abbates-remarks-at-press-conference-regarding-the-ransomware-attack-on-colonial-pipeline) (2021.06.07)
* FBI, [_FBI Statement on Compromise of Colonial Pipeline Networks_](https://www.fbi.gov/news/press-releases/fbi-statement-on-compromise-of-colonial-pipeline-networks) (2021.05.10)
* DOJ, [_Bitcoin Fog Operator Sentenced for Money Laundering Conspiracy_](https://www.justice.gov/archives/opa/pr/bitcoin-fog-operator-sentenced-money-laundering-conspiracy)
* FBI, [_AlphaBay Takedown_](https://www.fbi.gov/news/stories/alphabay-takedown) (2017.07.20)
* FBI, [_Ross Ulbricht Sentenced in Manhattan Federal Court to Life in Prison_](https://www.fbi.gov/contact-us/field-offices/newyork/news/press-releases/ross-ulbricht-aka-dread-pirate-roberts-sentenced-in-manhattan-federal-court-to-life-in-prison) (2015.05.29)
* FBI, [_Ross Ulbricht Found Guilty in Manhattan Federal Court on All Counts_](https://www.fbi.gov/contact-us/field-offices/newyork/news/press-releases/ross-ulbricht-the-creator-and-owner-of-the-silk-road-website-found-guilty-in-manhattan-federal-court-on-all-counts) (2015.02.05)
* FBI, [_Dozens of Online 'Dark Markets' Seized (Silk Road 2.0)_](https://www.fbi.gov/contact-us/field-offices/newyork/news/press-releases/dozens-of-online-dark-markets-seized-pursuant-to-forfeiture-complaint-filed-in-manhattan-federal-court-in-conjunction-with-the-arrest-of-the-operator-of-silk-road-2.0) (2014.11)
* FBI, [_Ross William Ulbricht's Laptop_](https://www.fbi.gov/history/artifacts/ross-william-ulbrichts-laptop)
* FBI, [_Operation Level Up_](https://www.fbi.gov/how-we-can-help-you/victim-services/national-crimes-and-victim-resources/operation-level-up)
* FBI, [_Operation Level Up: How the FBI Is Saving Victims from Cryptocurrency Investment Fraud_](https://www.fbi.gov/news/stories/operation-level-up-how-the-fbi-is-saving-victims-from-cryptocurrency-investment-fraud)
* FBI, [_Cryptocurrency Investment Fraud_](https://www.fbi.gov/how-we-can-help-you/victim-services/national-crimes-and-victim-resources/cryptocurrency-investment-fraud)
* FBI, [_Cyber Division_](https://www.fbi.gov/investigate/cyber)
* FBI, [_Director Patel_](https://www.fbi.gov/about/leadership-and-structure/director-patel)
* FBI, [_Seeking Potential Victims in Bitconnect Investigation_](https://www.fbi.gov/contact-us/field-offices/cleveland/news/press-releases/seeking-potential-victims-in-bitconnect-investigation)
* FBI, [_IC3 Recovery Asset Team_](https://www.fbi.gov/contact-us/field-offices/lasvegas/news/press-releases/fbi-las-vegas-federal-fact-friday-recovery-asset-team)
* IC3, [_Cryptocurrency Information_](https://www.ic3.gov/CrimeInfo/Cryptocurrency)
* Chainalysis, [_Crypto Investigations_](https://www.chainalysis.com/solution/crypto-investigations/)
* Europol, [_Joint Cybercrime Action Taskforce_](https://www.europol.europa.eu/operations-services-and-innovation/services-support/joint-cybercrime-action-taskforce)
* Blank Rome, [_Understanding Cryptocurrency Forfeiture: A Guide to Digital Asset Seizure_](https://www.blankrome.com/publications/understanding-cryptocurrency-forfeiture-guide-digital-asset-seizure)
* FLETC, [_Cryptocurrency Analysis and Control Training Program_](https://www.fletc.gov/cryptocurrency-analysis-and-control-training-program)
* FLETC, [_Cryptocurrency for Investigators Training Program_](https://www.fletc.gov/cryptocurrency-investigators-training-program)
* The Street, [_Trump's New FBI Director Kash Patel Is a Bitcoiner_](https://www.thestreet.com/crypto/policy/trumps-new-fbi-director-kash-patel-is-a-bitcoiner)
* IRS-CI, [_J5 Report_](https://www.irs.gov/pub/irs-ci/j5-report-7-25-2024.pdf) (2024.07.25)
* FBI, [_FBI Director Convenes Five Eyes Summit on Protecting Innovation, Preventing Economic Espionage_](https://www.fbi.gov/news/stories/fbi-director-convenes-five-eyes-summit-on-protecting-innovation-preventing-economic-espionage)
* FBI, [_FBI Hosts Five Eyes Summit to Launch Drive to Secure Innovation_](https://www.fbi.gov/news/press-releases/fbi-hosts-five-eyes-summit-to-launch-drive-to-secure-innovation-in-response-to-intelligence-threats)

## Authors <a href="#authors" id="authors"></a>

This article was drafted by [@Lawtoshi](https://twitter.com/lawtoshi) with research assistance from an AI agent.
