mkdir bin
set JAVAC="%JAVA_HOME%\bin\javac"
set CLASSPATH=.\;..\Shared;.\xpp3-1.1.3_8.jar;.\xpp3_min-1.1.3_8.jar;..\..\Libs\upa.jar;..\..\Libs\upaValueAdd.jar;..\..\..\..\Elektron-SDK-BinaryPack\Java\Eta\Libs\upa.jar

del /S *.class

%JAVAC% -d bin ..\Shared\com\thomsonreuters\upa\shared\*.java 
%JAVAC% -d bin ..\Shared\com\thomsonreuters\upa\shared\provider\*.java 
%JAVAC% -d bin ..\Shared\com\thomsonreuters\upa\shared\rdm\marketbyorder\*.java 
%JAVAC% -d bin ..\Shared\com\thomsonreuters\upa\shared\rdm\marketbyprice\*.java 
%JAVAC% -d bin ..\Shared\com\thomsonreuters\upa\shared\rdm\marketprice\*.java 
%JAVAC% -d bin ..\Shared\com\thomsonreuters\upa\shared\rdm\symbollist\*.java 
%JAVAC% -d bin ..\Shared\com\thomsonreuters\upa\shared\rdm\yieldcurve\*.java 
%JAVAC% -d bin com\thomsonreuters\upa\perftools\common\*.java
%JAVAC% -d bin com\thomsonreuters\upa\perftools\upajconsperf\*.java
%JAVAC% -d bin com\thomsonreuters\upa\perftools\upajniprovperf\*.java
%JAVAC% -d bin com\thomsonreuters\upa\perftools\upajprovperf\*.java
%JAVAC% -d bin com\thomsonreuters\upa\perftools\upajtransportperf\*.java