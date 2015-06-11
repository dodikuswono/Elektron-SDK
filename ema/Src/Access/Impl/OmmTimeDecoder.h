/*|-----------------------------------------------------------------------------
 *|            This source code is provided under the Apache 2.0 license      --
 *|  and is provided AS IS with no warranty or guarantee of fit for purpose.  --
 *|                See the project's LICENSE.md for details.                  --
 *|           Copyright Thomson Reuters 2015. All rights reserved.            --
 *|-----------------------------------------------------------------------------
 */

#ifndef __thomsonreuters_ema_access_OmmTimeDecoder_h
#define __thomsonreuters_ema_access_OmmTimeDecoder_h

#include "Decoder.h"
#include "EmaBufferInt.h"

namespace thomsonreuters {

namespace ema {

namespace access {

class OmmTimeDecoder : public Decoder
{
public :

	OmmTimeDecoder();

	virtual ~OmmTimeDecoder();

	UInt8 getHour() const;

	UInt8 getMinute() const;

	UInt8 getSecond() const;

	UInt16 getMillisecond() const;

	UInt16 getMicrosecond() const;

	UInt16 getNanosecond() const;

	const EmaString& toString();

	Data::DataCode getCode() const;

	void setRsslData( UInt8 , UInt8 , RsslMsg* , const RsslDataDictionary* );

	void setRsslData( UInt8 , UInt8 , RsslBuffer* , const RsslDataDictionary* , void* );

	void setRsslData( RsslDecodeIterator* , RsslBuffer* );

	const EmaBuffer& getHexBuffer();

private :

	RsslBuffer				_rsslBuffer;

	RsslTime				_rsslTime;

	EmaString				_toString;

	EmaBufferInt			_hexBuffer;

	Data::DataCode			_dataCode;

	bool					_toStringSet;
};

}

}

}

#endif //__thomsonreuters_ema_access_OmmTimeDecoder_h