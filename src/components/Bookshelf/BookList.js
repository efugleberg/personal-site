const BookList = [
    {
        id: 1,
        author: 'Andrew Lo',
        title: 'Adaptive Markets',
        url: 'https://www.amazon.com/Adaptive-Markets-Financial-Evolution-Thought/dp/0691135142'
    },
    {
        id: 2,
        author: 'David Epstein',
        title: 'Range',
        url: 'https://www.amazon.com/Range-Generalists-Triumph-Specialized-World/dp/0735214484'
    },
    {
        id: 3,
        author: 'Robert Cialdini',
        title: 'Influence',
        url: 'https://www.amazon.com/Influence-Practice-Robert-B-Cialdini/dp/0205609996/ref=sr_1_1?qid=1574786136&refinements=p_27%3ARobert+B.+Cialdini&s=books&sr=1-1&text=Robert+B.+Cialdini'
    },
    {
        id: 4,
        author: 'Andy Grove',
        title: 'Only the Paranoid Survive',
        url: 'https://www.amazon.com/Only-Paranoid-Survive-Exploit-Challenge/dp/0385483821/ref=sr_1_1?crid=30VMNYSWXC0RX&keywords=only+the+paranoid+survive&qid=1579203529&sprefix=only+the+pa%2Caps%2C165&sr=8-1'
    },
    {
        id: 5,
        author: 'Ben Rich',
        title: 'Skunk Works',
        url: 'https://www.amazon.com/Skunk-Works-Personal-Memoir-Lockheed/dp/B009W4WAZS/ref=sr_1_3?crid=2PGKYSSQWERNX&keywords=skunkworks+book&qid=1579203562&sprefix=skunkworks%2Caps%2C165&sr=8-3'
    },
    {
        id: 6,
        author: 'William Poundstone',
        title: "Fortune's Formula",
        url: 'https://www.amazon.com/Fortunes-Formula-Scientific-Betting-Casinos/dp/0809045990/ref=sr_1_1?crid=KZBSUKTKYASG&keywords=fortune%27s+formula&qid=1579203589&s=books&sprefix=fortune%27s+formu%2Caps%2C161&sr=1-1'
    },
    {
        id: 7,
        author: 'Samuel Greengard',
        title: 'The Internet of Things',
        url: 'https://www.amazon.com/Internet-Things-Press-Essential-Knowledge/dp/0262527731/ref=sr_1_fkmr0_1?keywords=greenguard+internet+of+things&qid=1579205775&s=books&sr=8-1-fkmr0'
    },
    {
        id: 8,
        author: 'Adam Smith',
        title: 'The Money Game',
        url: 'https://www.amazon.com/Money-Game-Adam-Smith/dp/0394721039/ref=sr_1_1?crid=2ZJHLPDPZJLQ3&keywords=adam+smith+the+money+game&qid=1579205799&s=books&sprefix=adam+smith+the+mo%2Caps%2C157&sr=1-1'
    },
    {
        id: 9,
        author: 'Charles Duhigg',
        title: 'The Power of Habit',
        url: 'https://www.amazon.com/Power-Habit-What-Life-Business/dp/081298160X/ref=sr_1_3?crid=KS32PO4I4025&keywords=the+power+of+habit+by+charles+duhigg&qid=1579205829&s=books&sprefix=the+power+of+habit%2Cstripbooks%2C168&sr=1-3'
    },
    {
        id: 10,
        author: 'Motley Fool',
        title: 'Million Dollar Portfolio',
        url: 'https://www.amazon.com/Motley-Fool-Million-Dollar-Portfolio/dp/0061727628/ref=sr_1_1?crid=WBXE9QIBOBD0&keywords=million+dollar+portfolio+david+tom+gardner&qid=1579205856&sprefix=million+dollar+portf%2Caps%2C165&sr=8-1'
    },
    {
        id: 11,
        author: 'William Poundstone',
        title: 'Are You Smart Enough to Work at Google?',
        url: 'https://www.amazon.com/Are-Smart-Enough-Work-Google/dp/0316099988/ref=sr_1_1?crid=2E6Q6B93BYGO6&keywords=are+you+smart+enough+to+work+at+google&qid=1579205879&s=books&sprefix=are+you+smart+eno%2Caps%2C248&sr=1-1'
    },
    {
        id: 12,
        author: 'John Train',
        title: 'Money Masters of Our Time',
        url: 'https://www.amazon.com/Money-Masters-Time-John-Train/dp/0887309704/ref=sr_1_1?crid=2Z06GMLBNX4T8&keywords=money+masters+of+our+time&qid=1579205904&s=books&sprefix=money+masters+of+ou%2Cstripbooks%2C164&sr=1-1'
    },
    {
        id: 13,
        author: 'G. Richard Shell',
        title: 'Bargaining for Advantage',
        url: 'https://www.amazon.com/Bargaining-Advantage-Negotiation-Strategies-Reasonable/dp/B008AUOK2G/ref=sr_1_3?crid=1PLB09TAMN2JG&keywords=bargaining+for+advantage+by+g.+richard+shell&qid=1579205923&s=books&sprefix=baraining+for+a%2Cstripbooks%2C168&sr=1-3'
    },
    {
        id: 14,
        author: 'John E. Sarno, M.D.',
        title: 'Healing Back Pain',
        url: 'https://www.amazon.com/Healing-Back-Pain-Mind-Body-Connection/dp/0446392308/ref=sr_1_2?crid=30ZU2M91V64P2&keywords=healing+back+pain+by+dr.+john+sarno&qid=1579205945&s=books&sprefix=healing+back+%2Cstripbooks%2C163&sr=1-2'
    },
    {
        id: 15,
        author: 'Bryan Burrough',
        title: 'The Big Rich',
        url: 'https://www.amazon.com/Big-Rich-Greatest-Texas-Fortunes/dp/0143116827/ref=sr_1_1?crid=1TWIEDPFWKRX&keywords=the+big+rich+the+rise+and+fall+of+the+greatest+texas+oil+fortunes&qid=1579205975&s=books&sprefix=the+big+rich%2Cstripbooks%2C164&sr=1-1'
    },
    {
        id: 16,
        author: 'Stacy Perman',
        title: 'In-N-Out Burger',
        url: 'https://www.amazon.com/N-Out-Burger-Behind-Counter-Fast-Food/dp/0061346721/ref=sr_1_1?keywords=stacy+perman&qid=1579205995&s=books&sr=1-1'
    },
    {
        id: 17,
        author: 'Michael Lewis',
        title: 'Moneyball',
        url: 'https://www.amazon.com/Moneyball-Art-Winning-Unfair-Game/dp/0393324818/ref=sr_1_1?crid=95MJRMGMPQQY&keywords=moneyball+michael+lewis&qid=1579206016&s=books&sprefix=moneyball%2Cstripbooks%2C162&sr=1-1'
    },
    {
        id: 18,
        author: 'Edward N. Luttwak',
        title: 'The Grand Strategy of the Roman Empire',
        url: 'https://www.amazon.com/Grand-Strategy-Roman-Empire-Century/dp/1421419459/ref=sr_1_1?crid=233R892L98NWY&keywords=grand+strategy+of+the+roman+empire&qid=1579206037&s=books&sprefix=grand+strat%2Cstripbooks%2C164&sr=1-1'
    },
    {
        id: 19,
        author: 'Michael Finkel',
        title: 'The Stranger in the Woods',
        url: 'https://www.amazon.com/Stranger-Woods-Extraordinary-Story-Hermit/dp/1101875682/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1579206057&sr=1-1'
    },
    {
        id: 20,
        author: 'Terry L. Anderson and Peter J. Hill',
        title: 'The Not So Wild, Wild West',
        url: 'https://www.amazon.com/Not-So-Wild-West-Economics/dp/0804748543/ref=sr_1_1?crid=3V3YXQAS6V5JD&keywords=the+not+so+wild%2C+wild+west&qid=1579206091&s=books&sprefix=the+not+so+wild%2Cstripbooks%2C163&sr=1-1'
    },
    {
        id: 21,
        author: 'Frank Partnoy',
        title: 'The Match King',
        url: 'https://www.amazon.com/Match-King-Kreuger-Financial-Scandals/dp/1586488120/ref=sr_1_1?crid=33WX2NF1XQ4V2&keywords=the+match+king&qid=1579206114&s=books&sprefix=the+match+king%2Caps%2C156&sr=1-1'
    },
    {
        id: 22,
        author: 'Larry Swedroe',
        title: 'Investment Mistakes Even Smart Investers Make and How to Avoid Them',
        url: 'https://www.amazon.com/Investment-Mistakes-Smart-Investors-Avoid/dp/0071786821/ref=sr_1_3?crid=1H4R64MAGHH7X&keywords=larry+swedroe&qid=1579206136&s=books&sprefix=larry+swe%2Cstripbooks%2C160&sr=1-3'
    },
    {
        id: 23,
        author: 'Peter Bernstein',
        title: 'Capital Ideas',
        url: 'https://www.amazon.com/Capital-Ideas-Improbable-Origins-Modern/dp/0029030110/ref=sr_1_1?crid=39QF89BKT9BHV&keywords=capital+ideas&qid=1579206163&s=books&sprefix=capital+ideas%2Cstripbooks%2C153&sr=1-1'
    },
    {
        id: 24,
        author: 'Ben Horowitz',
        title: 'The Hard Thing About Hard Things',
        url: 'https://www.amazon.com/Hard-Thing-About-Things-Building/dp/0062273205/ref=sr_1_1?crid=16UA9VP29Q1VN&keywords=hard+things+about+hard+things+by+ben+horowitz&qid=1579206192&s=books&sprefix=hard+thing%2Cstripbooks%2C159&sr=1-1'
    },
    {
        id: 25,
        author: 'Jordan Ellenberg',
        title: 'How to Not Be Wrong',
        url: 'https://www.amazon.com/How-Not-Be-Wrong-Mathematical/dp/1594205221/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1579206213&sr=1-2'
    },
    {
        id: 26,
        author: 'Bryan Jones',
        title: 'The Farming Game',
        url: 'https://www.amazon.com/Farming-Game-Bryan-L-Jones/dp/080327582X/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1579206238&sr=1-3'
    },
    {
        id: 27,
        author: 'Walter Isaacson',
        title: 'Benjamin Franklin',
        url: 'https://www.amazon.com/Benjamin-Franklin-American-Walter-Isaacson/dp/074325807X/ref=sr_1_2?crid=1LLUU3LDTFYXC&keywords=benjamin+franklin+walter+isaacson&qid=1579206260&s=books&sprefix=benjamin+frank%2Cstripbooks%2C166&sr=1-2'
    },
    {
        id: 28,
        author: 'Nancy Forbes and Basil Mahon',
        title: 'Faraday, Maxwell, and the Electromagnetic Field',
        url: 'https://www.amazon.com/Faraday-Maxwell-Electromagnetic-Field-Revolutionized/dp/1616149426/ref=sr_1_1?crid=26F1BKQJ0NAZY&keywords=faraday+maxwell+and+the+electromagnetic+field&qid=1579206283&s=books&sprefix=faraday%2Cstripbooks%2C164&sr=1-1'
    },
    {
        id: 29,
        author: 'Jocko Willink and Leif Babin',
        title: 'Extreme Ownership',
        url: 'https://www.amazon.com/Extreme-Ownership-U-S-Navy-SEALs/dp/1250183863/ref=sr_1_1?crid=2IZ3HAPDLV949&keywords=extreme+ownership&qid=1579206305&s=books&sprefix=extreme+o%2Cstripbooks%2C168&sr=1-1'
    },
    {
        id: 30,
        author: 'Rene Girard',
        title: 'Things Hidden Since the Foundation of the World',
        url: 'https://www.amazon.com/Things-Hidden-Since-Foundation-World/dp/0804722153/ref=sr_1_1?crid=138RGC8YJ9P75&keywords=rene+girard&qid=1579206324&s=books&sprefix=rene+gir%2Cstripbooks%2C164&sr=1-1'
    },
    {
        id: 31,
        author: 'Lawrence Lessig',
        title: 'Republic Lost',
        url: 'https://www.amazon.com/Republic-Lost-Corrupts-4-Oct-2012-Paperback/dp/B012HUOVUK/ref=pd_sbs_14_3/141-4342414-9702424?_encoding=UTF8&pd_rd_i=B012HUOVUK&pd_rd_r=b5f34305-5e96-4b8d-a3f3-39b958168b7e&pd_rd_w=L1CJX&pd_rd_wg=VEHXO&pf_rd_p=bdd201df-734f-454e-883c-73b0d8ccd4c3&pf_rd_r=2EHAGAEEE7V515C7X066&psc=1&refRID=2EHAGAEEE7V515C7X066'
    },
    {
        id: 32,
        author: 'John Butterworth',
        title: 'Morgan & Mikhails Clinical Anesthesiology',
        url: 'https://www.amazon.com/Morgan-Mikhails-Clinical-Anesthesiology-5th/dp/0071627030/ref=pd_sbs_14_3/141-4342414-9702424?_encoding=UTF8&pd_rd_i=0071627030&pd_rd_r=294a9d38-bfe4-45c6-a3ce-65474251443d&pd_rd_w=PfFQw&pd_rd_wg=2SIXI&pf_rd_p=bdd201df-734f-454e-883c-73b0d8ccd4c3&pf_rd_r=CA9NB0WMV0Z6D22K8QTY&psc=1&refRID=CA9NB0WMV0Z6D22K8QTY'
    },
    {
        id: 33,
        author: 'Bethany McLean and Peter Elkind',
        title: 'The Smartest Guys in the Room',
        url: 'https://www.amazon.com/Smartest-Guys-Room-Amazing-Scandalous/dp/1591846609/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1579206434&sr=1-1'
    },
    {
        id: 34,
        author: 'Bryan Burrough',
        title: 'Barbarians at the Gate',
        url: 'https://www.amazon.com/Barbarians-Gate-Fall-RJR-Nabisco/dp/0061655554/ref=sr_1_1?crid=QDL2KTH5TINV&keywords=barbarians+at+the+gate+book&qid=1579206472&s=books&sprefix=barbarians+at+the%2Cstripbooks%2C345&sr=1-1'
    },
    {
        id: 35,
        author: 'Liaquat Ahamed',
        title: 'Lords of Finance',
        url: 'https://www.amazon.com/Lords-Finance-Bankers-Broke-World/dp/0143116800/ref=sr_1_1?crid=1LQIY3UB3BVQ6&keywords=lords+of+finance&qid=1579206489&s=books&sprefix=lords+of+fin%2Cstripbooks%2C166&sr=1-1'
    },
    {
        id: 36,
        author: 'Piers Paul Read',
        title: 'Alive',
        url: 'https://www.amazon.com/Alive-Piers-Paul-Read/dp/0060778660/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1579206510&sr=1-1'
    },
    {
        id: 37,
        author: 'Fyodor Dostoevsky',
        title: 'The Brothers Karamazov',
        url: 'https://www.amazon.com/Brothers-Karamazov-Fyodor-Dostoevsky/dp/0374528373/ref=pd_sbs_14_5/141-4342414-9702424?_encoding=UTF8&pd_rd_i=0374528373&pd_rd_r=4c81b806-2f1e-45a4-9a2b-905b692266b0&pd_rd_w=zap61&pd_rd_wg=3Naof&pf_rd_p=bdd201df-734f-454e-883c-73b0d8ccd4c3&pf_rd_r=SCEJXNPN11HE9Y2SMW9N&psc=1&refRID=SCEJXNPN11HE9Y2SMW9N'
    },
    {
        id: 38,
        author: 'Tracy Kidder',
        title: 'A Truck Full of Money',
        url: 'https://www.amazon.com/Truck-Full-Money-Tracy-Kidder/dp/0812985354/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1579206563&sr=8-1'
    },
    {
        id: 39,
        author: 'Steven Pinker',
        title: 'The Language Instinct',
        url: 'https://www.amazon.com/Language-Instinct-Creates-Perennial-Classics/dp/0061336467/ref=sr_1_1?crid=1W02ST73X8XTC&keywords=the+language+instinct+steven+pinker&qid=1579206586&sprefix=the+language+ins%2Caps%2C159&sr=8-1'
    },
    {
        id: 40,
        author: 'Max Gunther',
        title: 'The Zurich Axioms',
        url: 'https://www.amazon.com/Zurich-Axioms-reward-generations-bankers/dp/1897597495/ref=sr_1_1?crid=10VZPAWNPQL01&keywords=the+zurich+axioms&qid=1579206608&s=books&sprefix=the+zurich+%2Caps%2C164&sr=1-1'
    },
    {
        id: 41,
        author: 'Frances Stonor Saunders',
        title: 'The Cultural Cold War',
        url: 'https://www.amazon.com/Cultural-Cold-War-World-Letters/dp/1595589147/ref=sr_1_1?crid=1JHFSE9BVPKVU&keywords=cultural+cold+war&qid=1579205288&s=books&sprefix=culturla+cold+war%2Caps%2C163&sr=1-1'
    },
    {
        id: 42,
        author: 'Mikhail Bulgakov',
        title: 'The Master and Margarita',
        url: 'https://www.amazon.com/Master-Margarita-Mikhail-Bulgakov/dp/0679760806/ref=sr_1_2?keywords=master+and+margarita&qid=1579205262&sr=8-2'
    },
    {
        id: 43,
        author: 'Bryan Caplan',
        title: 'Selfish Reasons to Have More Kids',
        url: 'https://www.amazon.com/Selfish-Reasons-Have-More-Kids/dp/0465028616/ref=sr_1_1?crid=2VSHCVMB95ZM1&keywords=selfish+reasons+to+have+more+kids&qid=1579205235&s=books&sprefix=selfish+reasons+to+h%2Caps%2C163&sr=1-1'
    },
    {
        id: 44,
        author: 'Fyodor Dostoevsky',
        title: 'Crime and Punishment',
        url: 'https://www.amazon.com/Crime-Punishment-Translation-Fyodor-Dostoevsky/dp/1631495313/ref=sr_1_4?keywords=crime+and+punishment&qid=1579205182&sr=8-4'
    },
    {
        id: 45,
        author: 'Fyodor Dostoevsky',
        title: 'The Idiot',
        url: 'https://www.amazon.com/Idiot-Vintage-Classics-Fyodor-Dostoevsky/dp/0375702245/ref=sr_1_3?crid=3W2FG1CFGLCBB&keywords=the+idiot+fyodor+dostoevsky&qid=1579205066&s=books&sprefix=the+idiot%2Cstripbooks%2C164&sr=1-3'
    },
    {
        id: 46,
        author: 'Tom Wolfe',
        title: 'The Bonfire of the Vanities',
        url: 'https://www.amazon.com/Bonfire-Vanities-Tom-Wolfe/dp/0312427573/ref=sr_1_1?crid=222KIE33QIBLH&keywords=bonfire+of+the+vanities+by+tom+wolfe&qid=1579205038&s=books&sprefix=bonfire+of+th%2Cstripbooks%2C167&sr=1-1'
    },
    {
        id: 47,
        author: 'James Grant',
        title: 'The Trouble with Prosperity',
        url: 'https://www.amazon.com/Trouble-Prosperity-Speculation-American-Savings/dp/0812924398/ref=sr_1_1?crid=LZQLKSBD0FJE&keywords=the+trouble+with+prosperity&qid=1579205014&s=books&sprefix=the+trouble+with+pros%2Cstripbooks%2C170&sr=1-1'
    },
    {
        id: 48,
        author: 'Michael Mauboussin',
        title: 'Think Twice',
        url: 'https://www.amazon.com/Think-Twice-Harnessing-Power-Counterintuition/dp/1422187381/ref=sr_1_1?crid=2BYLI45X8W1OH&keywords=think+twice+michael+mauboussin&qid=1579204888&sprefix=think+twice+mi%2Cstripbooks%2C164&sr=8-1'
    },
    {
        id: 49,
        author: 'Alfred Rappaport',
        title: 'Creating Shareholder Value',
        url: 'https://www.amazon.com/Creating-Shareholder-Value-Managers-Investors/dp/0684844109/ref=sr_1_1?crid=3BRJFICBTV25V&keywords=creating+shareholder+value&qid=1579204936&s=books&sprefix=creating+shar%2Caps%2C161&sr=1-1'
    },
    {
        id: 50,
        author: 'Michael Mauboussin',
        title: 'More Than You Know',
        url: 'https://www.amazon.com/More-Than-You-Know-Unconventional/dp/0231143737/ref=pd_sbs_14_30?_encoding=UTF8&pd_rd_i=0231143737&pd_rd_r=a278c6cb-5e9b-48bc-a2d0-f23e16a7b60b&pd_rd_w=SIPPv&pd_rd_wg=iX7hZ&pf_rd_p=670e3530-913b-43e2-8005-da937e9a4fe8&pf_rd_r=49RNRDFHP2Y9F4QEB42W&psc=1&refRID=49RNRDFHP2Y9F4QEB42W'
    },
    {
        id: 51,
        author: 'Michael Lewis',
        title: 'The Fifth Risk',
        url: 'https://www.amazon.com/Fifth-Risk-Undoing-Democracy/dp/0393357457/ref=sr_1_1?crid=1UG06CN4ADWBK&keywords=the+fifth+risk+michael+lewis&qid=1579204860&s=books&sprefix=the+fifth+ri%2Cstripbooks%2C184&sr=1-1'
    },
    {
        id: 52,
        author: 'Jacque McNish',
        title: 'The Big Score',
        url: 'https://www.amazon.com/Big-Score-Robert-Friedland-Voiseys/dp/0385259069/ref=sr_1_1?crid=2BUSSWY37XCBF&keywords=the+big+score&qid=1579204840&s=books&sprefix=the+big+score%2Caps%2C164&sr=1-1'
    },
    {
        id: 53,
        author: 'John Markoff',
        title: 'What the Dormouse Said',
        url: 'https://www.amazon.com/What-Dormouse-Said-Counterculture-Personal/dp/0143036769/ref=sr_1_1?crid=1WJB2TXNCS5J9&keywords=what+the+dormouse+said&qid=1579204811&sprefix=what+the+dormou%2Caps%2C217&sr=8-1'
    },
    {
        id: 54,
        author: 'Michael Lewis',
        title: 'Flash Boys',
        url: 'https://www.amazon.com/Flash-Boys-Wall-Street-Revolt/dp/0393351599/ref=sr_1_1?keywords=flash+boys&qid=1579204786&sr=8-1'
    },
    {
        id: 55,
        author: 'Steven Strogatz',
        title: 'The Joy of X',
        url: 'https://www.amazon.com/Joy-Guided-Tour-Math-Infinity/dp/0544105850/ref=sr_1_1?crid=1JBV4SV1GFHDO&keywords=joy+of+x+steven+strogatz&qid=1579204770&sprefix=joy+of+x%2Caps%2C163&sr=8-1'
    },
    {
        id: 56,
        author: 'Simon Kuper',
        title: 'Soccernomics',
        url: 'https://www.amazon.com/Soccernomics-England-Germany-Australia-Destined/dp/1568587015/ref=sr_1_3?crid=1UGRO4LAFZDPK&keywords=soccernomics&qid=1579204733&s=books&sprefix=soccerno%2Caps%2C156&sr=1-3'
    },
    {
        id: 57,
        author: 'Matt Ridley',
        title: 'The Origins of Virtue',
        url: 'https://www.amazon.com/Origins-Virtue-Instincts-Evolution-Cooperation/dp/0140264450/ref=sr_1_1?crid=31RUNMJKSGS17&keywords=origins+of+virtue&qid=1579204712&s=books&sprefix=origins+of+vir%2Caps%2C157&sr=1-1'
    },
    {
        id: 58,
        author: 'Charles Wheelan',
        title: 'Naked Economics',
        url: 'https://www.amazon.com/Naked-Economics-Undressing-Dismal-Science/dp/0393356493/ref=sr_1_1?crid=2NAF8PR4Z238N&keywords=naked+economics&qid=1579204682&s=books&sprefix=naked+eco%2Caps%2C161&sr=1-1'
    },
    {
        id: 59,
        author: 'Mary Karlet',
        title: 'Nurse Anesthesia Secrets',
        url: 'https://www.amazon.com/Nurse-Anesthesia-Secrets-Mary-Karlet/dp/0323031447/ref=sr_1_2?keywords=nurse+anesthesia+secrets&qid=1579204652&sr=8-2'
    },
    {
        id: 60,
        author: 'Richard W. Hamming',
        title: 'Methods of Mathematics',
        url: 'https://www.amazon.com/Methods-Mathematics-Calculus-Probability-Statistics/dp/0486439453/ref=sr_1_8?crid=18FLPXKNZU3KP&keywords=methods+of+mathematics&qid=1579204620&sprefix=methods+of+math%2Caps%2C162&sr=8-8'
    },
    {
        id: 61,
        author: 'William Shakespeare',
        title: 'MacBeth',
        url: 'https://www.amazon.com/Macbeth-Folger-Shakespeare-Library-William/dp/0743477103/ref=sr_1_2?keywords=macbeth&qid=1579204594&sr=8-2'
    },
    {
        id: 62,
        author: 'J. Peter Steidlmayer',
        title: 'Steidlmayer on Markets',
        url: 'https://www.amazon.com/Steidlmayer-Markets-New-Approach-Trading/dp/0471621153/ref=sr_1_2?crid=1J3EZBDXCS1G8&keywords=steidlmayer+on+markets&qid=1579204551&sprefix=steidlm%2Caps%2C165&sr=8-2'
    },



    
]

export default BookList