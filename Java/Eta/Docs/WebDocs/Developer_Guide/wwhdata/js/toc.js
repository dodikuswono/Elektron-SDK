function  WWHBookData_AddTOCEntries(P)
{
var A=P.fN("Chapter 1 Transport API Developers Guide Introduction","0");
var B=A.fN("1.1 About this Manual","1");
B=A.fN("1.2 Audience","2");
B=A.fN("1.3 Programming Language","3");
B=A.fN("1.4 Acronyms and Abbreviations","4");
B=A.fN("1.5 References","5");
B=A.fN("1.6 Document Conventions","6");
var C=B.fN("1.6.1 Typographic","7");
C=B.fN("1.6.2 Diagrams","8");
A=P.fN("Chapter 2 Product Description","9");
B=A.fN("2.1 What is the Transport API?","10");
B=A.fN("2.2 Transport API Features","11");
C=B.fN("2.2.1 General Capabilities","12");
C=B.fN("2.2.2 Consumer Applications","13");
C=B.fN("2.2.3 Provider Applications: Interactive","14");
C=B.fN("2.2.4 Provider Applications: Non-Interactive","15");
B=A.fN("2.3 Performance and Feature Comparison","16");
C=B.fN("2.3.1 Java Garbage","17");
C=B.fN("2.3.2 Use of Assertions","18");
B=A.fN("2.4 Functionality: Which API to Choose?","19");
A=P.fN("Chapter 3 Consumers and Providers","20");
B=A.fN("3.1 Overview","21");
B=A.fN("3.2 Consumers","22");
C=B.fN("3.2.1 Subscriptions: Request/Response","23");
C=B.fN("3.2.2 Batches","24");
C=B.fN("3.2.3 Views","25");
C=B.fN("3.2.4 Pause and Resume","26");
var D=C.fN("3.2.4.1 Pause / Resume Use Case 1: Back-end Processing","27");
D=C.fN("3.2.4.2 Pause / Resume Use Case 2: Display Applications","28");
C=B.fN("3.2.5 Symbol Lists","29");
D=C.fN("3.2.5.1 Requesting Symbol List Data Streams","30");
D=C.fN("3.2.5.2 Server Symbol Lists","31");
C=B.fN("3.2.6 Posting","32");
D=C.fN("3.2.6.1 Local Publication","33");
D=C.fN("3.2.6.2 Contribution/Inserts","34");
C=B.fN("3.2.7 Generic Message","35");
C=B.fN("3.2.8 Private Streams","36");
B=A.fN("3.3 Providers","37");
C=B.fN("3.3.1 Interactive Providers","38");
D=C.fN("3.3.1.1 Request /Response","39");
D=C.fN("3.3.1.2 Posts","40");
D=C.fN("3.3.1.3 Generic Messages","41");
D=C.fN("3.3.1.4 Private Streams","42");
C=B.fN("3.3.2 Non-Interactive Providers","43");
A=P.fN("Chapter 4 System View","44");
B=A.fN("4.1 System Architecture Overview","45");
B=A.fN("4.2 Advanced Distribution Server (ADS)","46");
B=A.fN("4.3 Advanced Data Hub (ADH)","47");
B=A.fN("4.4 Elektron","48");
B=A.fN("4.5 Data Feed Direct","49");
B=A.fN("4.6 Internet Connctivity via HTTP and HTTPS","50");
B=A.fN("4.7 Direct Connect","51");
A=P.fN("Chapter 5 Model and Package Overviews","52");
B=A.fN("5.1 Transport API Models","53");
C=B.fN("5.1.1 Open Message Model (OMM)","53#999038");
C=B.fN("5.1.2 Reuters Wire Format (RWF)","54");
C=B.fN("5.1.3 Domain Message Model","55");
D=C.fN("5.1.3.1 Reuters Domain Model","56");
D=C.fN("5.1.3.2 User-Defined Domain Model","57");
B=A.fN("5.2 Packages","58");
C=B.fN("5.2.1 Transport Package","59");
C=B.fN("5.2.2 Codec Package","60");
A=P.fN("Chapter 6 Building an OMM Consumer","61");
B=A.fN("6.1 Overview","62");
B=A.fN("6.2 Establish Network Communication","63");
B=A.fN("6.3 Perform Login Process","64");
B=A.fN("6.4 Obtain Source Directory Information","65");
B=A.fN("6.5 Load or Download Necessary Dictionary Information","66");
B=A.fN("6.6 Issue Requests and/or Post Information","67");
B=A.fN("6.7 Log Out and Shut Down","68");
B=A.fN("6.8 Additional Consumer Details","69");
A=P.fN("Chapter 7 Building an OMM Interactive Provider","70");
B=A.fN("7.1 Overview","71");
B=A.fN("7.2 Establish Network Communication","72");
B=A.fN("7.3 Perform Login Process","73");
B=A.fN("7.4 Provide Source Directory Information","74");
B=A.fN("7.5 Provide or Download Necessary Dictionaries","75");
B=A.fN("7.6 Handle Requests and Post Messages","76");
B=A.fN("7.7 Disconnect Consumers and Shut Down","77");
B=A.fN("7.8 Additional Interactive Provider Details","78");
A=P.fN("Chapter 8 Building an OMM NIP","79");
B=A.fN("8.1 Overview","80");
B=A.fN("8.2 Establish Network Communication","81");
B=A.fN("8.3 Perform Login Process","82");
B=A.fN("8.4 Perform Dictionary Download","83");
B=A.fN("8.5 Provide Source Directory Information","84");
B=A.fN("8.6 Provide Content","85");
B=A.fN("8.7 Log Out and Shut Down","86");
B=A.fN("8.8 Additional NIP Details","87");
A=P.fN("Chapter 9 Transport Package Detailed View","88");
B=A.fN("9.1 Concepts","89");
C=B.fN("9.1.1 Transport Types","90");
D=C.fN("9.1.1.1 Socket Transport","91");
D=C.fN("9.1.1.2 Reliable Multicast Transport","92");
D=C.fN("9.1.1.3 Sequenced Multicast Transport","93");
C=B.fN("9.1.2 Channel Object","94");
D=C.fN("9.1.2.1 Channel State Values","95");
D=C.fN("9.1.2.2 ConnectionTypes Values","96");
C=B.fN("9.1.3 Server Object","97");
C=B.fN("9.1.4 Transport Error Handling","98");
C=B.fN("9.1.5 General Transport Return Codes","99");
C=B.fN("9.1.6 Application Lifecycle","100");
B=A.fN("9.2 Initializing and Uninitializing the Transport","101");
C=B.fN("9.2.1 Initialization and Uninitialization Method","102");
C=B.fN("9.2.2 Initialization Reference Counting with Example","103");
C=B.fN("9.2.3 Transport Locking Models","104");
B=A.fN("9.3 Creating the Connection","105");
C=B.fN("9.3.1 Network Topologies","106");
D=C.fN("9.3.1.1 TCP-based Networks","107");
D=C.fN("9.3.1.2 Multicast-based Networks: Unified","108");
D=C.fN("9.3.1.3 Multicast-based Networks: Segmented","109");
C=B.fN("9.3.2 Creating the Outbound Connection: Transport.connect Method","110");
D=C.fN("9.3.2.1 ConnectOptions Methods","111");
D=C.fN("9.3.2.2 UnifiedNetworkInfo Method Options","112");
D=C.fN("9.3.2.3 SegmentedNetworkInfo Method Options","113");
D=C.fN("9.3.2.4 TcpOpts Method Option","114");
D=C.fN("9.3.2.5 MCastOpts Method Options","115");
D=C.fN("9.3.2.6 ShmemOpts Method","116");
D=C.fN("9.3.2.7 SeqMCastOpts Method","117");
C=B.fN("9.3.3 Transport.connect Outbound Connection Creation Example","118");
C=B.fN("9.3.4 Tunneling Connection Keep Alive","119");
B=A.fN("9.4 Server Creation and Accepting Connections","120");
C=B.fN("9.4.1 Creating a Listening Socket","120#1006013");
D=C.fN("9.4.1.1 BindOptions Methods","121");
D=C.fN("9.4.1.2 Transport.bind Listening Socket Connection Creation Example","122");
C=B.fN("9.4.2 Accepting Connection Requests","123");
D=C.fN("9.4.2.1 AcceptOptions Methods","124");
D=C.fN("9.4.2.2 Server.accept Accepting Connection Example","125");
C=B.fN("9.4.3 Compression Support","126");
B=A.fN("9.5 Channel Initialization","127");
C=B.fN("9.5.1 Channel.init Method","128");
C=B.fN("9.5.2 InProgInfo Object","129");
C=B.fN("9.5.3 Calling Channel.init","130");
C=B.fN("9.5.4 Channel.init Return Codes","131");
C=B.fN("9.5.5 Channel.init Example","132");
B=A.fN("9.6 Reading Data","133");
C=B.fN("9.6.1 Channel.read Method","134");
C=B.fN("9.6.2 ReadFlags Values","135");
C=B.fN("9.6.3 Channel.read Return Codes","136");
C=B.fN("9.6.4 Channel.read Example","137");
B=A.fN("9.7 Writing Data: Overview","138");
B=A.fN("9.8 Writing Data: Obtaining a Buffer","139");
C=B.fN("9.8.1 Transport Buffer Management Channel Methods","140");
C=B.fN("9.8.2 Transport Buffer Management Server Method","141");
C=B.fN("9.8.3 Channel.getBuffer Return Values","142");
B=A.fN("9.9 Writing Data to a Buffer","143");
C=B.fN("9.9.1 Channel.write Method","144");
C=B.fN("9.9.2 WriteFlags Values","145");
C=B.fN("9.9.3 Compression","146");
C=B.fN("9.9.4 Fragmentation","147");
C=B.fN("9.9.5 Channel.write Return Codes","148");
C=B.fN("9.9.6 Channel.getBuffer and Channel.write Example","149");
B=A.fN("9.10 Managing Outbound Queues","150");
C=B.fN("9.10.1 Ordering Queued Data: WritePriorities","151");
D=C.fN("9.10.1.1 Priority Ordering","152");
D=C.fN("9.10.1.2 WritePriorities Values","153");
C=B.fN("9.10.2 Channel.flush Method","154");
C=B.fN("9.10.3 Channel.flush Return Codes","155");
C=B.fN("9.10.4 Channel.flush Example","156");
B=A.fN("9.11 Packing Additional Data into a Buffer","157");
C=B.fN("9.11.1 Channel.packBuffer Return Values","158");
C=B.fN("9.11.2 Example: Channel.getBuffer, Channel.packBuffer, and Channel.write","159");
B=A.fN("9.12 Ping Management","160");
C=B.fN("9.12.1 Ping Timeout","161");
C=B.fN("9.12.2 Channel.ping Function","162");
C=B.fN("9.12.3 Channel.ping Return Values","163");
C=B.fN("9.12.4 Channel.ping Example","164");
B=A.fN("9.13 Closing Connections","165");
C=B.fN("9.13.1 Functions for Closing Connections","165#1037673");
C=B.fN("9.13.2 Close Connections Example","166");
B=A.fN("9.14 Utility Methods","167");
C=B.fN("9.14.1 General Transport Utility Methods","168");
C=B.fN("9.14.2 ChannelInfo Methods","169");
C=B.fN("9.14.3 multicastStats Methods","170");
C=B.fN("9.14.4 componentInfo Method","171");
C=B.fN("9.14.5 ServerInfo Methods","172");
C=B.fN("9.14.6 Channel.ioctl IoctlCodes","173");
C=B.fN("9.14.7 Server.ioctl IoctlCodes","174");
B=A.fN("9.15 Tunneling","175");
C=B.fN("9.15.1 Configuration","176");
D=C.fN("9.15.1.1 TunnelingInfo Methods","177");
D=C.fN("9.15.1.2 Configuration Example","178");
C=B.fN("9.15.2 Proxy Authentication","179");
D=C.fN("9.15.2.1 The Proxy Authentication Process","180");
D=C.fN("9.15.2.2 Supplying the Transport API with Credentials for Proxy Authentication","181");
D=C.fN("9.15.2.3 CredentialsInfo Methods","182");
D=C.fN("9.15.2.4 Providing Credentials and Modifying the Consumer Example","183");
D=C.fN("9.15.2.5 Proxy Authentication using NTLM","184");
D=C.fN("9.15.2.6 Proxy Authentication using Negotiate/Kerberos","185");
A=P.fN("Chapter 10 Encoding and Decoding Conventions","186");
B=A.fN("10.1 Concepts","187");
C=B.fN("10.1.1 Data Types","188");
C=B.fN("10.1.2 Composite Pattern and Nesting","189");
B=A.fN("10.2 Encoding Semantics","190");
C=B.fN("10.2.1 Init and Complete Suffixes","191");
C=B.fN("10.2.2 The Encode Iterator: EncodeIterator","192");
D=C.fN("10.2.2.1 EncodeIterator Functions","193");
D=C.fN("10.2.2.2 EncodeIterator: Basic Use Example","194");
C=B.fN("10.2.3 Content Roll Back with Example","195");
B=A.fN("10.3 Decoding Semantics","196");
C=B.fN("10.3.1 The Decode Iterator: DecodeIterator","197");
C=B.fN("10.3.2 Functions for use with DecodeIterator","198");
C=B.fN("10.3.3 DecodeIterator: Basic Use Example","199");
B=A.fN("10.4 Return Code Values","200");
C=B.fN("10.4.1 CodecReturnCodes Methods","201");
B=A.fN("10.5 Versioning","202");
C=B.fN("10.5.1 Protocol Versioning","203");
C=B.fN("10.5.2 Library Versioning","204");
A=P.fN("Chapter 11 Data Package Detailed View","205");
B=A.fN("11.1 Concepts","206");
B=A.fN("11.2 Primitive Types","207");
C=B.fN("11.2.1 Real","208");
D=C.fN("11.2.1.1 Methods","209");
D=C.fN("11.2.1.2 hint Values","210");
D=C.fN("11.2.1.3 Hint Use Case: Converting an Real to a Float or a Double","211");
D=C.fN("11.2.1.4 Hint Use Case: Converting Double or Float to an Real","212");
C=B.fN("11.2.2 Date","213");
C=B.fN("11.2.3 Time","214");
C=B.fN("11.2.4 DateTime","215");
C=B.fN("11.2.5 Qos","216");
D=C.fN("11.2.5.1 Methods","217");
D=C.fN("11.2.5.2 Qos Timeliness Values","218");
D=C.fN("11.2.5.3 QosRates Values","219");
C=B.fN("11.2.6 State","220");
D=C.fN("11.2.6.1 Methods","221");
D=C.fN("11.2.6.2 StreamStates Values","222");
D=C.fN("11.2.6.3 StreamStates Methods","223");
D=C.fN("11.2.6.4 DataStates Values","224");
D=C.fN("11.2.6.5 DataStates Methods","225");
D=C.fN("11.2.6.6 StateCodes Values","226");
D=C.fN("11.2.6.7 StateCodes Methods","227");
C=B.fN("11.2.7 Array","228");
D=C.fN("11.2.7.1 Array Methods","229");
D=C.fN("11.2.7.2 ArrayEntry Methods","230");
D=C.fN("11.2.7.3 Encoding: Example 1","231");
D=C.fN("11.2.7.4 Encoding: Example 2","232");
D=C.fN("11.2.7.5 Decoding: Example","233");
C=B.fN("11.2.8 Buffer","234");
D=C.fN("11.2.8.1 Methods","235");
D=C.fN("11.2.8.2 Example","236");
C=B.fN("11.2.9 RMTES Decoding","237");
D=C.fN("11.2.9.1 RmtesCacheBuffer: Structure","238");
D=C.fN("11.2.9.2 RmtesBuffer: Structure Members","239");
D=C.fN("11.2.9.3 RmtesDecoder","240");
D=C.fN("11.2.9.4 Example: Converting RMTES to UCS-2","241");
B=A.fN("11.3 Container Types","242");
C=B.fN("11.3.1 FieldList","243");
D=C.fN("11.3.1.1 Structure Members","244");
D=C.fN("11.3.1.2 FieldListFlag Values","245");
D=C.fN("11.3.1.3 FieldEntry Methods","246");
D=C.fN("11.3.1.4 Rippling","247");
D=C.fN("11.3.1.5 Encoding Example","248");
D=C.fN("11.3.1.6 Decoding Example","249");
C=B.fN("11.3.2 ElementList","250");
D=C.fN("11.3.2.1 Structure Members","251");
D=C.fN("11.3.2.2 ElementListFlags Values","252");
D=C.fN("11.3.2.3 ElementEntry Methods","253");
D=C.fN("11.3.2.4 ElementList Encoding Example","254");
D=C.fN("11.3.2.5 ElementList Decoding Examples","255");
C=B.fN("11.3.3 Map","256");
D=C.fN("11.3.3.1 Map Methods","257");
D=C.fN("11.3.3.2 MapFlags Values","258");
D=C.fN("11.3.3.3 MapEntry Methods","259");
D=C.fN("11.3.3.4 MapEntry Flag Enumeration Value","260");
D=C.fN("11.3.3.5 MapEntry Action Enumeration Values","261");
D=C.fN("11.3.3.6 MapEntry Encoding Example","262");
D=C.fN("11.3.3.7 MapEntry Decoding Example","263");
C=B.fN("11.3.4 Series","264");
D=C.fN("11.3.4.1 Series Methods","265");
D=C.fN("11.3.4.2 SeriesFlags Values","266");
D=C.fN("11.3.4.3 SeriesEntry Methods","267");
D=C.fN("11.3.4.4 Series Encoding Example","268");
D=C.fN("11.3.4.5 Series Decoding Example","269");
C=B.fN("11.3.5 Vector","270");
D=C.fN("11.3.5.1 Vector Structure Members","271");
D=C.fN("11.3.5.2 Vector Flag Enumeration Values","272");
D=C.fN("11.3.5.3 VectorEntry Structure Members","273");
D=C.fN("11.3.5.4 VectorEntry Flag Enumeration Value","274");
D=C.fN("11.3.5.5 VectorEntryActions Values","275");
D=C.fN("11.3.5.6 Vector Encoding Example","276");
D=C.fN("11.3.5.7 Vector Decoding Example","277");
C=B.fN("11.3.6 FilterList","278");
D=C.fN("11.3.6.1 FilterList Methods","279");
D=C.fN("11.3.6.2 FilterList Flag Enumeration Values","280");
D=C.fN("11.3.6.3 FilterEntry Methods","281");
D=C.fN("11.3.6.4 FilterEntry Flag Enumeration Values","282");
D=C.fN("11.3.6.5 FilterEntryActions Values","283");
D=C.fN("11.3.6.6 FilterEntry Encoding Example","284");
D=C.fN("11.3.6.7 FilterEntry Decoding Example","285");
C=B.fN("11.3.7 Non-RWF Container Types","286");
D=C.fN("11.3.7.1 Non-RWF Encode Functions","287");
D=C.fN("11.3.7.2 Non-RWF Encoding Example","288");
D=C.fN("11.3.7.3 Decoding Non-RWF Types","289");
B=A.fN("11.4 Permission Data","290");
B=A.fN("11.5 Summary Data","291");
B=A.fN("11.6 Set Definitions and Set-Defined Data","292");
C=B.fN("11.6.1 Set-Defined Primitive Types","293");
C=B.fN("11.6.2 Set Definition Use","294");
D=C.fN("11.6.2.1 FieldSetDef Methods","295");
D=C.fN("11.6.2.2 FieldSetDefEntry Structure Members","296");
D=C.fN("11.6.2.3 ElementSetDef Methods","297");
D=C.fN("11.6.2.4 ElementSetDefEntry Methods","298");
C=B.fN("11.6.3 Set Definition Database","299");
D=C.fN("11.6.3.1 LocalFieldSetDefDb Methods","300");
D=C.fN("11.6.3.2 LocalElementSetDefDb Methods","301");
D=C.fN("11.6.3.3 Local Set Definition Database Encoding Interfaces","302");
D=C.fN("11.6.3.4 Local Set Definition Database Decoding Interfaces","303");
D=C.fN("11.6.3.5 Field Set Definition Database Encoding Example","304");
D=C.fN("11.6.3.6 Field Set Definition Database Decoding Example","305");
D=C.fN("11.6.3.7 Element Set Definition Database Encoding Example","306");
D=C.fN("11.6.3.8 Element Set Definition Database Decoding Example","307");
A=P.fN("Chapter 12 Message Package Detailed View","308");
B=A.fN("12.1 Concepts","309");
C=B.fN("12.1.1 Common Message Interface","310");
D=C.fN("12.1.1.1 Msg Methods","311");
D=C.fN("12.1.1.2 MsgClasses Values","312");
D=C.fN("12.1.1.3 MsgClasses Methods","313");
C=B.fN("12.1.2 Message Key","314");
D=C.fN("12.1.2.1 MsgKey Methods","315");
D=C.fN("12.1.2.2 Message Key Flag Enumeration Values","316");
C=B.fN("12.1.3 Stream Identification","317");
D=C.fN("12.1.3.1 Stream Comparison","318");
D=C.fN("12.1.3.2 Private Streams","319");
D=C.fN("12.1.3.3 Changeable Stream Attributes","320");
B=A.fN("12.2 Messages","321");
C=B.fN("12.2.1 Request Message Interface","321#1001278");
D=C.fN("12.2.1.1 RequestMsg Methods","322");
D=C.fN("12.2.1.2 RequestMsgFlags Values","323");
C=B.fN("12.2.2 Refresh Message Interface","324");
D=C.fN("12.2.2.1 RefreshMsg Methods","325");
D=C.fN("12.2.2.2 RefreshMsgFlags Values","326");
C=B.fN("12.2.3 Update Message Interface","327");
D=C.fN("12.2.3.1 UpdateMsg Methods","328");
D=C.fN("12.2.3.2 UpdateMsgFlags Values","329");
C=B.fN("12.2.4 Status Message Interface","330");
D=C.fN("12.2.4.1 StatusMsg Methods","331");
D=C.fN("12.2.4.2 StatusMsgFlags Values","332");
C=B.fN("12.2.5 Close Message Interface","333");
D=C.fN("12.2.5.1 CloseMsg Methods","334");
D=C.fN("12.2.5.2 CloseMsgFlags Values","335");
C=B.fN("12.2.6 Generic Message Class","336");
D=C.fN("12.2.6.1 GenericMsg Methods","337");
D=C.fN("12.2.6.2 GenericMsgFlags Values","338");
C=B.fN("12.2.7 Post Message Interface","339");
D=C.fN("12.2.7.1 Post Msg Methods","340");
D=C.fN("12.2.7.2 PostMsgFlags Values","341");
D=C.fN("12.2.7.3 PostUserRights Values","342");
D=C.fN("12.2.7.4 PostUserInfo Methods","343");
C=B.fN("12.2.8 Acknowledgment Message Interface","344");
D=C.fN("12.2.8.1 AckMsg Methods","345");
D=C.fN("12.2.8.2 AckMsgFlags Values","346");
D=C.fN("12.2.8.3 NakCodes Values","347");
C=B.fN("12.2.9 Msg Encoding and Decoding","348");
D=C.fN("12.2.9.1 Msg Encoding Interfaces","349");
D=C.fN("12.2.9.2 Msg Encoding Example 1","350");
D=C.fN("12.2.9.3 Msg Encoding Example 2","351");
D=C.fN("12.2.9.4 Msg Decoding Interfaces","352");
D=C.fN("12.2.9.5 Msg Decoding Example","353");
D=C.fN("12.2.9.6 EncodeIterator Utility Methods","354");
D=C.fN("12.2.9.7 DecodeIterator Utility Methods","355");
A=P.fN("Chapter 13 Advanced Messaging Concepts","356");
B=A.fN("13.1 Multi-Part Message Handling","357");
B=A.fN("13.2 Stream Priority","358");
B=A.fN("13.3 Stream Quality of Service","359");
B=A.fN("13.4 Item Group Use","360");
C=B.fN("13.4.1 Item Group Buffer Contents","361");
C=B.fN("13.4.2 Item Group Utility Functions","362");
C=B.fN("13.4.3 Group Status Message Information","363");
C=B.fN("13.4.4 Group Status Responsibilities by Application Type","364");
B=A.fN("13.5 Single Open and Allow Suspect Data Behavior","365");
B=A.fN("13.6 Pause and Resume","366");
B=A.fN("13.7 Batch Requesting","367");
C=B.fN("13.7.1 Batch Request Usage","368");
C=B.fN("13.7.2 Batch RequestMsg Encoding Example","369");
B=A.fN("13.8 Dynamic View Use","370");
C=B.fN("13.8.1 RDM ViewTypes Names","371");
C=B.fN("13.8.2 Dynamic View RequestMsg Encoding Example","372");
B=A.fN("13.9 Posting","373");
C=B.fN("13.9.1 Post Message Encoding Example","374");
C=B.fN("13.9.2 Post Acknowledgement Encoding Example","375");
B=A.fN("13.10 Private Streams","376");
A=P.fN("Appendix A Item and Group State Decision Table","377");
}
