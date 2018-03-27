

function Account(){
    return {
        loggedIn: true,
        checkAndSignalForAccessToken: function(){},
        connected: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disconnected: function(QString){},
        downloadInfoChanged: function(DownloadInfoResult){},
        findableByChanged: function(QString){},
        getDownloadInfo: function(){},
        isLoggedIn: function(){},
        logOut: function(){},
        loggedInChanged: function(bool){},
        myUsernameChanged: function(QString){},
        objectNameChanged: function(QString){},
        updateDownloadInfo: function(){},
        findableBy: '',
        metaverseServerURL: '',
        objectName: '',
        username: ''
        };
    }

function AccountServices(){
    return {
        loggedIn: true,
        checkAndSignalForAccessToken: function(){},
        connected: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disconnected: function(QString){},
        downloadInfoChanged: function(DownloadInfoResult){},
        findableByChanged: function(QString){},
        getDownloadInfo: function(){},
        isLoggedIn: function(){},
        logOut: function(){},
        loggedInChanged: function(bool){},
        myUsernameChanged: function(QString){},
        objectNameChanged: function(QString){},
        updateDownloadInfo: function(){},
        findableBy: '',
        metaverseServerURL: '',
        objectName: '',
        username: ''
        };
    }

function AnimationCache(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        dirty: function(){},
        getAnimation: function(QString){},
        getAnimation: function(QUrl){},
        getResource: function(QUrl){},
        getResource: function(QUrl,QUrl){},
        getResource: function(QUrl,QUrl,void*){},
        getResourceList: function(){},
        objectNameChanged: function(QString){},
        prefetch: function(QUrl){},
        prefetch: function(QUrl,void*){},
        updateTotalSize: function(qlonglong){},
        numCached: 0,
        numTotal: 0,
        sizeCached: 0,
        sizeTotal: 0,
        objectName: ''
        };
    }

function Assets(){
    return {
        canWriteCacheValue: function(QUrl){},
        compressData: function(QScriptValue,QScriptValue){},
        compressData: function(QScriptValue,QScriptValue,QScriptValue){},
        decompressData: function(QScriptValue,QScriptValue){},
        decompressData: function(QScriptValue,QScriptValue,QScriptValue){},
        deleteAsset: function(QScriptValue,QScriptValue){},
        deleteAsset: function(QScriptValue,QScriptValue,QScriptValue){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        downloadData: function(QString,QScriptValue){},
        extractAssetHash: function(QString){},
        getATPUrl: function(QString){},
        getAsset: function(QScriptValue,QScriptValue){},
        getAsset: function(QScriptValue,QScriptValue,QScriptValue){},
        getCacheStatus: function(QScriptValue){},
        getCacheStatus: function(QScriptValue,QScriptValue){},
        getMapping: function(QString,QScriptValue){},
        hashData: function(QByteArray){},
        hashDataHex: function(QByteArray){},
        initializeCache: function(){},
        isValidFilePath: function(QString){},
        isValidHash: function(QString){},
        isValidPath: function(QString){},
        loadFromCache: function(QScriptValue,QScriptValue){},
        loadFromCache: function(QScriptValue,QScriptValue,QScriptValue){},
        objectNameChanged: function(QString){},
        putAsset: function(QScriptValue,QScriptValue){},
        putAsset: function(QScriptValue,QScriptValue,QScriptValue){},
        queryCacheMeta: function(QScriptValue,QScriptValue){},
        queryCacheMeta: function(QScriptValue,QScriptValue,QScriptValue){},
        resolveAsset: function(QScriptValue,QScriptValue){},
        resolveAsset: function(QScriptValue,QScriptValue,QScriptValue){},
        saveToCache: function(QScriptValue,QScriptValue){},
        saveToCache: function(QScriptValue,QScriptValue,QScriptValue){},
        saveToCache: function(QUrl,QByteArray,QVariantMap,QScriptValue){},
        saveToCache: function(QUrl,QByteArray,QVariantMap,QScriptValue,QScriptValue){},
        setBakingEnabled: function(QString,bool,QScriptValue){},
        setMapping: function(QString,QString,QScriptValue){},
        uploadData: function(QString,QScriptValue){},
        objectName: ''
        };
    }

function Audio(){
    return {
        muted: true,
        noiseReduction: true,
        contextChanged: function(QString){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disconnected: function(){},
        environmentMuted: function(){},
        getRecording: function(){},
        inputLevelChanged: function(float){},
        inputReceived: function(QByteArray){},
        inputVolumeChanged: function(float){},
        mutedByMixer: function(){},
        mutedChanged: function(bool){},
        noiseGateClosed: function(){},
        noiseGateOpened: function(){},
        noiseReductionChanged: function(bool){},
        nop: function(){},
        objectNameChanged: function(QString){},
        onContextChanged: function(){},
        playSound: function(SharedSoundPointer){},
        playSound: function(SharedSoundPointer,AudioInjectorOptions){},
        playSystemSound: function(SharedSoundPointer,QVector3D){},
        receivedFirstPacket: function(){},
        setInputDevice: function(QAudioDeviceInfo,bool){},
        setOutputDevice: function(QAudioDeviceInfo,bool){},
        setReverb: function(bool){},
        setReverbOptions: function(const AudioEffectOptions*){},
        setStereoInput: function(bool){},
        startRecording: function(QString){},
        stopRecording: function(){},
        inputLevel: 0,
        inputVolume: 0,
        devices: function(){
            return {
                deleteLater: function(){},
                destroyed: function(){},
                destroyed: function(QObject*){},
                nop: function(){},
                objectNameChanged: function(QString){},
                input: function(){
                    return {
                        peakValuesAvailable: true,
                        peakValuesEnabled: true,
                        canFetchMore: function(QModelIndex){},
                        columnCount: function(){},
                        columnCount: function(QModelIndex){},
                        columnsAboutToBeInserted: function(QModelIndex,int,int){},
                        columnsAboutToBeMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        columnsAboutToBeRemoved: function(QModelIndex,int,int){},
                        columnsInserted: function(QModelIndex,int,int){},
                        columnsMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        columnsRemoved: function(QModelIndex,int,int){},
                        data: function(QModelIndex){},
                        data: function(QModelIndex,int){},
                        dataChanged: function(QModelIndex,QModelIndex){},
                        dataChanged: function(QModelIndex,QModelIndex,QVector<int>){},
                        deleteLater: function(){},
                        destroyed: function(){},
                        destroyed: function(QObject*){},
                        deviceChanged: function(QAudioDeviceInfo){},
                        fetchMore: function(QModelIndex){},
                        flags: function(QModelIndex){},
                        hasChildren: function(){},
                        hasChildren: function(QModelIndex){},
                        hasIndex: function(int,int){},
                        hasIndex: function(int,int,QModelIndex){},
                        headerData: function(int,Qt::Orientation){},
                        headerData: function(int,Qt::Orientation,int){},
                        headerDataChanged: function(Qt::Orientation,int,int){},
                        index: function(int,int){},
                        index: function(int,int,QModelIndex){},
                        layoutAboutToBeChanged: function(){},
                        layoutAboutToBeChanged: function(QList<QPersistentModelIndex>){},
                        layoutAboutToBeChanged: function(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHint){},
                        layoutChanged: function(){},
                        layoutChanged: function(QList<QPersistentModelIndex>){},
                        layoutChanged: function(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHint){},
                        match: function(QModelIndex,int,QVariant){},
                        match: function(QModelIndex,int,QVariant,int){},
                        match: function(QModelIndex,int,QVariant,int,Qt::MatchFlags){},
                        modelAboutToBeReset: function(){},
                        modelReset: function(){},
                        objectNameChanged: function(QString){},
                        onDeviceChanged: function(QAudioDeviceInfo,bool){},
                        onDevicesChanged: function(QList<QAudioDeviceInfo>,bool){},
                        onPeakValueListChanged: function(QList<float>){},
                        parent: function(QModelIndex){},
                        peakValuesEnabledChanged: function(bool){},
                        resetInternalData: function(){},
                        revert: function(){},
                        rowCount: function(){},
                        rowCount: function(QModelIndex){},
                        rowsAboutToBeInserted: function(QModelIndex,int,int){},
                        rowsAboutToBeMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        rowsAboutToBeRemoved: function(QModelIndex,int,int){},
                        rowsInserted: function(QModelIndex,int,int){},
                        rowsMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        rowsRemoved: function(QModelIndex,int,int){},
                        setData: function(QModelIndex,QVariant){},
                        setData: function(QModelIndex,QVariant,int){},
                        sibling: function(int,int,QModelIndex){},
                        submit: function(){},
                        objectName: ''
                    };
                },
                output: function(){
                    return {
                        canFetchMore: function(QModelIndex){},
                        columnCount: function(){},
                        columnCount: function(QModelIndex){},
                        columnsAboutToBeInserted: function(QModelIndex,int,int){},
                        columnsAboutToBeMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        columnsAboutToBeRemoved: function(QModelIndex,int,int){},
                        columnsInserted: function(QModelIndex,int,int){},
                        columnsMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        columnsRemoved: function(QModelIndex,int,int){},
                        data: function(QModelIndex){},
                        data: function(QModelIndex,int){},
                        dataChanged: function(QModelIndex,QModelIndex){},
                        dataChanged: function(QModelIndex,QModelIndex,QVector<int>){},
                        deleteLater: function(){},
                        destroyed: function(){},
                        destroyed: function(QObject*){},
                        deviceChanged: function(QAudioDeviceInfo){},
                        fetchMore: function(QModelIndex){},
                        flags: function(QModelIndex){},
                        hasChildren: function(){},
                        hasChildren: function(QModelIndex){},
                        hasIndex: function(int,int){},
                        hasIndex: function(int,int,QModelIndex){},
                        headerData: function(int,Qt::Orientation){},
                        headerData: function(int,Qt::Orientation,int){},
                        headerDataChanged: function(Qt::Orientation,int,int){},
                        index: function(int,int){},
                        index: function(int,int,QModelIndex){},
                        layoutAboutToBeChanged: function(){},
                        layoutAboutToBeChanged: function(QList<QPersistentModelIndex>){},
                        layoutAboutToBeChanged: function(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHint){},
                        layoutChanged: function(){},
                        layoutChanged: function(QList<QPersistentModelIndex>){},
                        layoutChanged: function(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHint){},
                        match: function(QModelIndex,int,QVariant){},
                        match: function(QModelIndex,int,QVariant,int){},
                        match: function(QModelIndex,int,QVariant,int,Qt::MatchFlags){},
                        modelAboutToBeReset: function(){},
                        modelReset: function(){},
                        objectNameChanged: function(QString){},
                        onDeviceChanged: function(QAudioDeviceInfo,bool){},
                        onDevicesChanged: function(QList<QAudioDeviceInfo>,bool){},
                        parent: function(QModelIndex){},
                        resetInternalData: function(){},
                        revert: function(){},
                        rowCount: function(){},
                        rowCount: function(QModelIndex){},
                        rowsAboutToBeInserted: function(QModelIndex,int,int){},
                        rowsAboutToBeMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        rowsAboutToBeRemoved: function(QModelIndex,int,int){},
                        rowsInserted: function(QModelIndex,int,int){},
                        rowsMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        rowsRemoved: function(QModelIndex,int,int){},
                        setData: function(QModelIndex,QVariant){},
                        setData: function(QModelIndex,QVariant,int){},
                        sibling: function(int,int,QModelIndex){},
                        submit: function(){},
                        objectName: ''
                    };
                },
                objectName: ''
            };
        },
        context: '',
        objectName: ''
        };
    }

function AudioScope(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        getAutoTrigger: function(){},
        getFramesPerScope: function(){},
        getFramesPerSecond: function(){},
        getPause: function(){},
        getScopeInput: function(){},
        getScopeOutputLeft: function(){},
        getScopeOutputRight: function(){},
        getTriggerInput: function(){},
        getTriggerOutputLeft: function(){},
        getTriggerOutputRight: function(){},
        getTriggered: function(){},
        getVisible: function(){},
        objectNameChanged: function(QString){},
        pauseChanged: function(){},
        selectAudioScopeFiftyFrames: function(){},
        selectAudioScopeFiveFrames: function(){},
        selectAudioScopeTwentyFrames: function(){},
        setAutoTrigger: function(bool){},
        setLocalEcho: function(bool){},
        setPause: function(bool){},
        setServerEcho: function(bool){},
        setTriggerValues: function(int,int){},
        setTriggered: function(bool){},
        setVisible: function(bool){},
        toggle: function(){},
        togglePause: function(){},
        toggleTrigger: function(){},
        triggered: function(){},
        scopeInput: function(){
            return {
            };
        },
        scopeOutputLeft: function(){
            return {
            };
        },
        scopeOutputRight: function(){
            return {
            };
        },
        triggerInput: function(){
            return {
            };
        },
        triggerOutputLeft: function(){
            return {
            };
        },
        triggerOutputRight: function(){
            return {
            };
        },
        objectName: ''
        };
    }

function AudioStats(){
    return {
        clientStreamChanged: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        injectorStreamsChanged: function(){},
        inputReadMsMaxChanged: function(float){},
        inputUnplayedMsMaxChanged: function(float){},
        mixerStreamChanged: function(){},
        objectNameChanged: function(QString){},
        outputUnplayedMsMaxChanged: function(float){},
        pingMsChanged: function(float){},
        sentTimegapMsAvgChanged: function(qulonglong){},
        sentTimegapMsAvgWindowChanged: function(qulonglong){},
        sentTimegapMsMaxChanged: function(qulonglong){},
        sentTimegapMsMaxWindowChanged: function(qulonglong){},
        inputReadMsMax: 0,
        inputUnplayedMsMax: 0,
        outputUnplayedMsMax: 0,
        pingMs: 0,
        sentTimegapMsAvg: 0,
        sentTimegapMsAvgWindow: 0,
        sentTimegapMsMax: 0,
        sentTimegapMsMaxWindow: 0,
        clientStream: function(){
            return {
                deleteLater: function(){},
                destroyed: function(){},
                destroyed: function(QObject*){},
                dropCountChanged: function(int){},
                framesAvailableAvgChanged: function(int){},
                framesAvailableChanged: function(int){},
                framesDesiredChanged: function(int){},
                lastStarveDurationCountChanged: function(int){},
                lossCountChanged: function(float){},
                lossCountWindowChanged: function(float){},
                lossRateChanged: function(float){},
                lossRateWindowChanged: function(float){},
                objectNameChanged: function(QString){},
                overflowCountChanged: function(int){},
                starveCountChanged: function(int){},
                timegapMsAvgChanged: function(qulonglong){},
                timegapMsAvgWindowChanged: function(qulonglong){},
                timegapMsMaxChanged: function(qulonglong){},
                timegapMsMaxWindowChanged: function(qulonglong){},
                unplayedMsMaxChanged: function(float){},
                dropCount: 0,
                framesAvailable: 0,
                framesAvailableAvg: 0,
                framesDesired: 0,
                lastStarveDurationCount: 0,
                lossCount: 0,
                lossCountWindow: 0,
                lossRate: 0,
                lossRateWindow: 0,
                overflowCount: 0,
                starveCount: 0,
                timegapMsAvg: 0,
                timegapMsAvgWindow: 0,
                timegapMsMax: 0,
                timegapMsMaxWindow: 0,
                unplayedMsMax: 0,
                objectName: ''
            };
        },
        injectorStreams: function(){
            return {
                deleteLater: function(){},
                destroyed: function(){},
                destroyed: function(QObject*){},
                objectNameChanged: function(QString){},
                objectName: ''
            };
        },
        mixerStream: function(){
            return {
                deleteLater: function(){},
                destroyed: function(){},
                destroyed: function(QObject*){},
                dropCountChanged: function(int){},
                framesAvailableAvgChanged: function(int){},
                framesAvailableChanged: function(int){},
                framesDesiredChanged: function(int){},
                lastStarveDurationCountChanged: function(int){},
                lossCountChanged: function(float){},
                lossCountWindowChanged: function(float){},
                lossRateChanged: function(float){},
                lossRateWindowChanged: function(float){},
                objectNameChanged: function(QString){},
                overflowCountChanged: function(int){},
                starveCountChanged: function(int){},
                timegapMsAvgChanged: function(qulonglong){},
                timegapMsAvgWindowChanged: function(qulonglong){},
                timegapMsMaxChanged: function(qulonglong){},
                timegapMsMaxWindowChanged: function(qulonglong){},
                unplayedMsMaxChanged: function(float){},
                dropCount: 0,
                framesAvailable: 0,
                framesAvailableAvg: 0,
                framesDesired: 0,
                lastStarveDurationCount: 0,
                lossCount: 0,
                lossCountWindow: 0,
                lossRate: 0,
                lossRateWindow: 0,
                overflowCount: 0,
                starveCount: 0,
                timegapMsAvg: 0,
                timegapMsAvgWindow: 0,
                timegapMsMax: 0,
                timegapMsMaxWindow: 0,
                unplayedMsMax: 0,
                objectName: ''
            };
        },
        objectName: ''
        };
    }

function AvatarBookmarks(){
    return {
        addBookmark: function(){},
        deleteBookmark: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        objectName: ''
        };
    }

function AvatarInputs(){
    return {
        cameraEnabled: true,
        cameraMuted: true,
        isHMD: true,
        showAudioTools: true,
        cameraEnabledChanged: function(){},
        cameraMutedChanged: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        isHMDChanged: function(){},
        loudnessToAudioLevel: function(float){},
        objectNameChanged: function(QString){},
        resetSensors: function(){},
        setShowAudioTools: function(bool){},
        showAudioToolsChanged: function(bool){},
        toggleCameraMute: function(){},
        objectName: ''
        };
    }

function AvatarList(){
    return {
        avatarAddedEvent: function(QUuid){},
        avatarRemovedEvent: function(QUuid){},
        avatarSessionChangedEvent: function(QUuid,QUuid){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        findRayIntersection: function(PickRay){},
        findRayIntersection: function(PickRay,QScriptValue){},
        findRayIntersection: function(PickRay,QScriptValue,QScriptValue){},
        findRayIntersectionVector: function(PickRay,QVector<EntityItemID>,QVector<EntityItemID>){},
        getAvatar: function(QUuid){},
        getAvatarDataRate: function(QUuid){},
        getAvatarDataRate: function(QUuid,QString){},
        getAvatarIdentifiers: function(){},
        getAvatarSimulationRate: function(QUuid){},
        getAvatarSimulationRate: function(QUuid,QString){},
        getAvatarSortCoefficient: function(QString){},
        getAvatarUpdateRate: function(QUuid){},
        getAvatarUpdateRate: function(QUuid,QString){},
        getAvatarsInRange: function(glm::vec3,float){},
        isAvatarInRange: function(glm::vec3,float){},
        objectNameChanged: function(QString){},
        processAvatarDataPacket: function(QSharedPointer<ReceivedMessage>,SharedNodePointer){},
        processAvatarIdentityPacket: function(QSharedPointer<ReceivedMessage>,SharedNodePointer){},
        processKillAvatar: function(QSharedPointer<ReceivedMessage>,SharedNodePointer){},
        sessionUUIDChanged: function(QUuid,QUuid){},
        setAvatarSortCoefficient: function(QString,QScriptValue){},
        updateAvatarRenderStatus: function(bool){},
        objectName: ''
        };
    }

function AvatarManager(){
    return {
        avatarAddedEvent: function(QUuid){},
        avatarRemovedEvent: function(QUuid){},
        avatarSessionChangedEvent: function(QUuid,QUuid){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        findRayIntersection: function(PickRay){},
        findRayIntersection: function(PickRay,QScriptValue){},
        findRayIntersection: function(PickRay,QScriptValue,QScriptValue){},
        findRayIntersectionVector: function(PickRay,QVector<EntityItemID>,QVector<EntityItemID>){},
        getAvatar: function(QUuid){},
        getAvatarDataRate: function(QUuid){},
        getAvatarDataRate: function(QUuid,QString){},
        getAvatarIdentifiers: function(){},
        getAvatarSimulationRate: function(QUuid){},
        getAvatarSimulationRate: function(QUuid,QString){},
        getAvatarSortCoefficient: function(QString){},
        getAvatarUpdateRate: function(QUuid){},
        getAvatarUpdateRate: function(QUuid,QString){},
        getAvatarsInRange: function(glm::vec3,float){},
        isAvatarInRange: function(glm::vec3,float){},
        objectNameChanged: function(QString){},
        processAvatarDataPacket: function(QSharedPointer<ReceivedMessage>,SharedNodePointer){},
        processAvatarIdentityPacket: function(QSharedPointer<ReceivedMessage>,SharedNodePointer){},
        processKillAvatar: function(QSharedPointer<ReceivedMessage>,SharedNodePointer){},
        sessionUUIDChanged: function(QUuid,QUuid){},
        setAvatarSortCoefficient: function(QString,QScriptValue){},
        updateAvatarRenderStatus: function(bool){},
        objectName: ''
        };
    }

function Camera(){
    return {
        computePickRay: function(float,float){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        getCameraEntity: function(){},
        getModeString: function(){},
        getOrientation: function(){},
        getPosition: function(){},
        keepLookingAt: function(glm::vec3){},
        lookAt: function(glm::vec3){},
        modeUpdated: function(QString){},
        objectNameChanged: function(QString){},
        setCameraEntity: function(QUuid){},
        setModeString: function(QString){},
        setOrientation: function(glm::quat){},
        setPosition: function(glm::vec3){},
        stopLooking: function(){},
        cameraEntity: null,
        frustum: function(){
            return {
                aspectRatio: 0,
                centerRadius: 0,
                fieldOfView: 0,
                orientation: function(){
                    return {
                        w: 0,
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                position: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                projection: function(){
                    return {
                        r0c0: 0,
                        r0c1: 0,
                        r0c2: 0,
                        r0c3: 0,
                        r1c0: 0,
                        r1c1: 0,
                        r1c2: 0,
                        r1c3: 0,
                        r2c0: 0,
                        r2c1: 0,
                        r2c2: 0,
                        r2c3: 0,
                        r3c0: 0,
                        r3c1: 0,
                        r3c2: 0,
                        r3c3: 0
                    };
                }
            };
        },
        orientation: function(){
            return {
                w: 0,
                x: 0,
                y: 0,
                z: 0
            };
        },
        position: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        mode: '',
        objectName: ''
        };
    }

function Clipboard(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        exportEntities: function(QString,QVector<EntityItemID>){},
        exportEntities: function(QString,float,float,float,float){},
        getClipboardContentsLargestDimension: function(){},
        getContentsDimensions: function(){},
        importEntities: function(QString){},
        objectNameChanged: function(QString){},
        pasteEntities: function(glm::vec3){},
        objectName: ''
        };
    }

function console(){
    return {
        assert: function(){
            return {
            };
        },
        debug: function(){
            return {
            };
        },
        error: function(){
            return {
            };
        },
        exception: function(){
            return {
            };
        },
        group: function(){
            return {
            };
        },
        groupCollapsed: function(){
            return {
            };
        },
        groupEnd: function(){
            return {
            };
        },
        info: function(){
            return {
            };
        },
        log: function(){
            return {
            };
        },
        warn: function(){
            return {
            };
        },
        clear: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        time: function(QString){},
        timeEnd: function(QString){},
        trace: function(){},
        objectName: ''
        };
    }

function ContextOverlay(){
    return {
        enabled: true,
        isInMarketplaceInspectionMode: true,
        contextOverlayClicked: function(QUuid){},
        contextOverlayFilterPassed: function(EntityItemID){},
        contextOverlays_hoverEnterEntity: function(EntityItemID,PointerEvent){},
        contextOverlays_hoverEnterOverlay: function(OverlayID,PointerEvent){},
        contextOverlays_hoverLeaveEntity: function(EntityItemID,PointerEvent){},
        contextOverlays_hoverLeaveOverlay: function(OverlayID,PointerEvent){},
        contextOverlays_mousePressOnOverlay: function(OverlayID,PointerEvent){},
        createOrDestroyContextOverlay: function(EntityItemID,PointerEvent){},
        destroyContextOverlay: function(EntityItemID){},
        destroyContextOverlay: function(EntityItemID,PointerEvent){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        getCurrentEntityWithContextOverlay: function(){},
        objectNameChanged: function(QString){},
        requestOwnershipVerification: function(QUuid){},
        entityWithContextOverlay: null,
        objectName: ''
        };
    }

function Controller(){
    return {
        actionEvent: function(int,float){},
        captureActionEvents: function(){},
        captureEntityClickEvents: function(){},
        captureJoystick: function(int){},
        captureKeyEvents: function(KeyEvent){},
        captureMouseEvents: function(){},
        captureTouchEvents: function(){},
        captureWheelEvents: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disableMapping: function(QString){},
        enableMapping: function(QString){},
        enableMapping: function(QString,bool){},
        findAction: function(QString){},
        findDevice: function(QString){},
        getActionNames: function(){},
        getActionValue: function(int){},
        getActions: function(){},
        getAllActions: function(){},
        getAvailableInputs: function(uint){},
        getAxisValue: function(StandardAxisChannel){},
        getAxisValue: function(StandardAxisChannel,uint16_t){},
        getAxisValue: function(int){},
        getButtonValue: function(StandardButtonChannel){},
        getButtonValue: function(StandardButtonChannel,uint16_t){},
        getDeviceName: function(uint){},
        getDeviceNames: function(){},
        getHardware: function(){},
        getInputRecorderSaveDirectory: function(){},
        getPoseValue: function(StandardPoseChannel){},
        getPoseValue: function(StandardPoseChannel,uint16_t){},
        getPoseValue: function(int){},
        getRecommendedHUDRect: function(){},
        getStandard: function(){},
        getValue: function(int){},
        getViewportDimensions: function(){},
        hardwareChanged: function(){},
        inputEvent: function(int,float){},
        keyPressEvent: function(KeyEvent){},
        keyReleaseEvent: function(KeyEvent){},
        loadInputRecording: function(QString){},
        loadMapping: function(QString){},
        mouseDoublePressEvent: function(MouseEvent){},
        mouseMoveEvent: function(MouseEvent){},
        mousePressEvent: function(MouseEvent){},
        mouseReleaseEvent: function(MouseEvent){},
        newMapping: function(){},
        newMapping: function(QString){},
        objectNameChanged: function(QString){},
        parseMapping: function(QString){},
        releaseActionEvents: function(){},
        releaseEntityClickEvents: function(){},
        releaseJoystick: function(int){},
        releaseKeyEvents: function(KeyEvent){},
        releaseMouseEvents: function(){},
        releaseTouchEvents: function(){},
        releaseWheelEvents: function(){},
        saveInputRecording: function(){},
        startInputPlayback: function(){},
        startInputRecording: function(){},
        stopInputPlayback: function(){},
        stopInputRecording: function(){},
        touchBeginEvent: function(TouchEvent){},
        touchEndEvent: function(TouchEvent){},
        touchUpdateEvent: function(TouchEvent){},
        triggerHapticPulse: function(float,float){},
        triggerHapticPulse: function(float,float,controller::Hand){},
        triggerHapticPulseOnDevice: function(uint,float,float){},
        triggerHapticPulseOnDevice: function(uint,float,float,controller::Hand){},
        triggerShortHapticPulse: function(float){},
        triggerShortHapticPulse: function(float,controller::Hand){},
        triggerShortHapticPulseOnDevice: function(uint,float){},
        triggerShortHapticPulseOnDevice: function(uint,float,controller::Hand){},
        wheelEvent: function(WheelEvent){},
        Actions: function(){
            return {
                ACTION1: 0,
                ACTION2: 0,
                BOOM_IN: 0,
                BOOM_OUT: 0,
                Backward: 0,
                BoomIn: 0,
                BoomOut: 0,
                CONTEXT_MENU: 0,
                ContextMenu: 0,
                CycleCamera: 0,
                Down: 0,
                Forward: 0,
                Head: 0,
                Hips: 0,
                LATERAL_LEFT: 0,
                LATERAL_RIGHT: 0,
                LEFT_HAND: 0,
                LEFT_HAND_CLICK: 0,
                LONGITUDINAL_BACKWARD: 0,
                LONGITUDINAL_FORWARD: 0,
                LeftArm: 0,
                LeftFoot: 0,
                LeftHand: 0,
                LeftHandClick: 0,
                LeftHandIndex1: 0,
                LeftHandIndex2: 0,
                LeftHandIndex3: 0,
                LeftHandIndex4: 0,
                LeftHandMiddle1: 0,
                LeftHandMiddle2: 0,
                LeftHandMiddle3: 0,
                LeftHandMiddle4: 0,
                LeftHandPinky1: 0,
                LeftHandPinky2: 0,
                LeftHandPinky3: 0,
                LeftHandPinky4: 0,
                LeftHandRing1: 0,
                LeftHandRing2: 0,
                LeftHandRing3: 0,
                LeftHandRing4: 0,
                LeftHandThumb1: 0,
                LeftHandThumb2: 0,
                LeftHandThumb3: 0,
                LeftHandThumb4: 0,
                PITCH_DOWN: 0,
                PITCH_UP: 0,
                Pitch: 0,
                PitchDown: 0,
                PitchUp: 0,
                PrimaryAction: 0,
                RIGHT_HAND: 0,
                RIGHT_HAND_CLICK: 0,
                ReticleClick: 0,
                ReticleDown: 0,
                ReticleLeft: 0,
                ReticleRight: 0,
                ReticleUp: 0,
                ReticleX: 0,
                ReticleY: 0,
                RightArm: 0,
                RightFoot: 0,
                RightHand: 0,
                RightHandClick: 0,
                RightHandIndex1: 0,
                RightHandIndex2: 0,
                RightHandIndex3: 0,
                RightHandIndex4: 0,
                RightHandMiddle1: 0,
                RightHandMiddle2: 0,
                RightHandMiddle3: 0,
                RightHandMiddle4: 0,
                RightHandPinky1: 0,
                RightHandPinky2: 0,
                RightHandPinky3: 0,
                RightHandPinky4: 0,
                RightHandRing1: 0,
                RightHandRing2: 0,
                RightHandRing3: 0,
                RightHandRing4: 0,
                RightHandThumb1: 0,
                RightHandThumb2: 0,
                RightHandThumb3: 0,
                RightHandThumb4: 0,
                Roll: 0,
                SHIFT: 0,
                SecondaryAction: 0,
                Shift: 0,
                Spine2: 0,
                StepPitch: 0,
                StepRoll: 0,
                StepTranslateX: 0,
                StepTranslateY: 0,
                StepTranslateZ: 0,
                StepYaw: 0,
                StrafeLeft: 0,
                StrafeRight: 0,
                TOGGLE_MUTE: 0,
                ToggleMute: 0,
                ToggleOverlay: 0,
                TrackedObject00: 0,
                TrackedObject01: 0,
                TrackedObject02: 0,
                TrackedObject03: 0,
                TrackedObject04: 0,
                TrackedObject05: 0,
                TrackedObject06: 0,
                TrackedObject07: 0,
                TrackedObject08: 0,
                TrackedObject09: 0,
                TrackedObject10: 0,
                TrackedObject11: 0,
                TrackedObject12: 0,
                TrackedObject13: 0,
                TrackedObject14: 0,
                TrackedObject15: 0,
                TranslateX: 0,
                TranslateY: 0,
                TranslateZ: 0,
                UiNavBack: 0,
                UiNavGroup: 0,
                UiNavLateral: 0,
                UiNavSelect: 0,
                UiNavVertical: 0,
                Up: 0,
                VERTICAL_DOWN: 0,
                VERTICAL_UP: 0,
                YAW_LEFT: 0,
                YAW_RIGHT: 0,
                Yaw: 0,
                YawLeft: 0,
                YawRight: 0
            };
        },
        Hardware: function(){
            return {
                Actions: function(){
                    return {
                        ACTION1: 0,
                        ACTION2: 0,
                        BOOM_IN: 0,
                        BOOM_OUT: 0,
                        Backward: 0,
                        BoomIn: 0,
                        BoomOut: 0,
                        CONTEXT_MENU: 0,
                        ContextMenu: 0,
                        CycleCamera: 0,
                        Down: 0,
                        Forward: 0,
                        Head: 0,
                        Hips: 0,
                        LATERAL_LEFT: 0,
                        LATERAL_RIGHT: 0,
                        LEFT_HAND: 0,
                        LEFT_HAND_CLICK: 0,
                        LONGITUDINAL_BACKWARD: 0,
                        LONGITUDINAL_FORWARD: 0,
                        LeftArm: 0,
                        LeftFoot: 0,
                        LeftHand: 0,
                        LeftHandClick: 0,
                        LeftHandIndex1: 0,
                        LeftHandIndex2: 0,
                        LeftHandIndex3: 0,
                        LeftHandIndex4: 0,
                        LeftHandMiddle1: 0,
                        LeftHandMiddle2: 0,
                        LeftHandMiddle3: 0,
                        LeftHandMiddle4: 0,
                        LeftHandPinky1: 0,
                        LeftHandPinky2: 0,
                        LeftHandPinky3: 0,
                        LeftHandPinky4: 0,
                        LeftHandRing1: 0,
                        LeftHandRing2: 0,
                        LeftHandRing3: 0,
                        LeftHandRing4: 0,
                        LeftHandThumb1: 0,
                        LeftHandThumb2: 0,
                        LeftHandThumb3: 0,
                        LeftHandThumb4: 0,
                        PITCH_DOWN: 0,
                        PITCH_UP: 0,
                        Pitch: 0,
                        PitchDown: 0,
                        PitchUp: 0,
                        PrimaryAction: 0,
                        RIGHT_HAND: 0,
                        RIGHT_HAND_CLICK: 0,
                        ReticleClick: 0,
                        ReticleDown: 0,
                        ReticleLeft: 0,
                        ReticleRight: 0,
                        ReticleUp: 0,
                        ReticleX: 0,
                        ReticleY: 0,
                        RightArm: 0,
                        RightFoot: 0,
                        RightHand: 0,
                        RightHandClick: 0,
                        RightHandIndex1: 0,
                        RightHandIndex2: 0,
                        RightHandIndex3: 0,
                        RightHandIndex4: 0,
                        RightHandMiddle1: 0,
                        RightHandMiddle2: 0,
                        RightHandMiddle3: 0,
                        RightHandMiddle4: 0,
                        RightHandPinky1: 0,
                        RightHandPinky2: 0,
                        RightHandPinky3: 0,
                        RightHandPinky4: 0,
                        RightHandRing1: 0,
                        RightHandRing2: 0,
                        RightHandRing3: 0,
                        RightHandRing4: 0,
                        RightHandThumb1: 0,
                        RightHandThumb2: 0,
                        RightHandThumb3: 0,
                        RightHandThumb4: 0,
                        Roll: 0,
                        SHIFT: 0,
                        SecondaryAction: 0,
                        Shift: 0,
                        Spine2: 0,
                        StepPitch: 0,
                        StepRoll: 0,
                        StepTranslateX: 0,
                        StepTranslateY: 0,
                        StepTranslateZ: 0,
                        StepYaw: 0,
                        StrafeLeft: 0,
                        StrafeRight: 0,
                        TOGGLE_MUTE: 0,
                        ToggleMute: 0,
                        ToggleOverlay: 0,
                        TrackedObject00: 0,
                        TrackedObject01: 0,
                        TrackedObject02: 0,
                        TrackedObject03: 0,
                        TrackedObject04: 0,
                        TrackedObject05: 0,
                        TrackedObject06: 0,
                        TrackedObject07: 0,
                        TrackedObject08: 0,
                        TrackedObject09: 0,
                        TrackedObject10: 0,
                        TrackedObject11: 0,
                        TrackedObject12: 0,
                        TrackedObject13: 0,
                        TrackedObject14: 0,
                        TrackedObject15: 0,
                        TranslateX: 0,
                        TranslateY: 0,
                        TranslateZ: 0,
                        UiNavBack: 0,
                        UiNavGroup: 0,
                        UiNavLateral: 0,
                        UiNavSelect: 0,
                        UiNavVertical: 0,
                        Up: 0,
                        VERTICAL_DOWN: 0,
                        VERTICAL_UP: 0,
                        YAW_LEFT: 0,
                        YAW_RIGHT: 0,
                        Yaw: 0,
                        YawLeft: 0,
                        YawRight: 0
                    };
                },
                Application: function(){
                    return {
                        AdvancedMovement: 0,
                        CameraEntity: 0,
                        CameraFSM: 0,
                        CameraFirstPerson: 0,
                        CameraIndependent: 0,
                        CameraThirdPerson: 0,
                        Grounded: 0,
                        InHMD: 0,
                        NavigationFocused: 0,
                        SnapTurn: 0
                    };
                },
                Hydra: function(){
                    return {
                        L0: 0,
                        L1: 0,
                        L2: 0,
                        L3: 0,
                        L4: 0,
                        LB: 0,
                        LS: 0,
                        LT: 0,
                        LX: 0,
                        LY: 0,
                        LeftHand: 0,
                        R0: 0,
                        R1: 0,
                        R2: 0,
                        R3: 0,
                        R4: 0,
                        RB: 0,
                        RS: 0,
                        RT: 0,
                        RX: 0,
                        RY: 0,
                        RightHand: 0
                    };
                },
                Keyboard: function(){
                    return {
                        0: 0,
                        1: 0,
                        2: 0,
                        3: 0,
                        4: 0,
                        5: 0,
                        6: 0,
                        7: 0,
                        8: 0,
                        9: 0,
                        A: 0,
                        B: 0,
                        C: 0,
                        Control: 0,
                        D: 0,
                        Down: 0,
                        E: 0,
                        F: 0,
                        G: 0,
                        H: 0,
                        I: 0,
                        J: 0,
                        K: 0,
                        L: 0,
                        Left: 0,
                        LeftMouseButton: 0,
                        LeftMouseClicked: 0,
                        M: 0,
                        MiddleMouseButton: 0,
                        MiddleMouseClicked: 0,
                        MouseMoveDown: 0,
                        MouseMoveLeft: 0,
                        MouseMoveRight: 0,
                        MouseMoveUp: 0,
                        MouseWheelDown: 0,
                        MouseWheelLeft: 0,
                        MouseWheelRight: 0,
                        MouseWheelUp: 0,
                        MouseX: 0,
                        MouseY: 0,
                        N: 0,
                        O: 0,
                        P: 0,
                        PgDown: 0,
                        PgUp: 0,
                        Q: 0,
                        R: 0,
                        Right: 0,
                        RightMouseButton: 0,
                        RightMouseClicked: 0,
                        S: 0,
                        Shift: 0,
                        Space: 0,
                        T: 0,
                        Tab: 0,
                        TouchpadDown: 0,
                        TouchpadLeft: 0,
                        TouchpadRight: 0,
                        TouchpadUp: 0,
                        U: 0,
                        Up: 0,
                        V: 0,
                        W: 0,
                        X: 0,
                        Y: 0,
                        Z: 0
                    };
                },
                LeapMotion: function(){
                    return {
                        LeftHand: 0,
                        LeftHandIndex1: 0,
                        LeftHandIndex2: 0,
                        LeftHandIndex3: 0,
                        LeftHandIndex4: 0,
                        LeftHandMiddle1: 0,
                        LeftHandMiddle2: 0,
                        LeftHandMiddle3: 0,
                        LeftHandMiddle4: 0,
                        LeftHandPinky1: 0,
                        LeftHandPinky2: 0,
                        LeftHandPinky3: 0,
                        LeftHandPinky4: 0,
                        LeftHandRing1: 0,
                        LeftHandRing2: 0,
                        LeftHandRing3: 0,
                        LeftHandRing4: 0,
                        LeftHandThumb1: 0,
                        LeftHandThumb2: 0,
                        LeftHandThumb3: 0,
                        LeftHandThumb4: 0,
                        RightHand: 0,
                        RightHandIndex1: 0,
                        RightHandIndex2: 0,
                        RightHandIndex3: 0,
                        RightHandIndex4: 0,
                        RightHandMiddle1: 0,
                        RightHandMiddle2: 0,
                        RightHandMiddle3: 0,
                        RightHandMiddle4: 0,
                        RightHandPinky1: 0,
                        RightHandPinky2: 0,
                        RightHandPinky3: 0,
                        RightHandPinky4: 0,
                        RightHandRing1: 0,
                        RightHandRing2: 0,
                        RightHandRing3: 0,
                        RightHandRing4: 0,
                        RightHandThumb1: 0,
                        RightHandThumb2: 0,
                        RightHandThumb3: 0,
                        RightHandThumb4: 0
                    };
                }
            };
        },
        Standard: function(){
            return {
                A: 0,
                B: 0,
                Back: 0,
                Circle: 0,
                Cross: 0,
                DD: 0,
                DL: 0,
                DR: 0,
                DU: 0,
                Down: 0,
                Head: 0,
                Hips: 0,
                L1: 0,
                L2: 0,
                L3: 0,
                LB: 0,
                LS: 0,
                LSTouch: 0,
                LT: 0,
                LTClick: 0,
                LX: 0,
                LY: 0,
                Left: 0,
                LeftArm: 0,
                LeftFoot: 0,
                LeftGrip: 0,
                LeftGripTouch: 0,
                LeftHand: 0,
                LeftHandIndex1: 0,
                LeftHandIndex2: 0,
                LeftHandIndex3: 0,
                LeftHandIndex4: 0,
                LeftHandMiddle1: 0,
                LeftHandMiddle2: 0,
                LeftHandMiddle3: 0,
                LeftHandMiddle4: 0,
                LeftHandPinky1: 0,
                LeftHandPinky2: 0,
                LeftHandPinky3: 0,
                LeftHandPinky4: 0,
                LeftHandRing1: 0,
                LeftHandRing2: 0,
                LeftHandRing3: 0,
                LeftHandRing4: 0,
                LeftHandThumb1: 0,
                LeftHandThumb2: 0,
                LeftHandThumb3: 0,
                LeftHandThumb4: 0,
                LeftIndexPoint: 0,
                LeftPrimaryIndex: 0,
                LeftPrimaryIndexTouch: 0,
                LeftPrimaryThumb: 0,
                LeftPrimaryThumbTouch: 0,
                LeftSecondaryIndex: 0,
                LeftSecondaryIndexTouch: 0,
                LeftSecondaryThumb: 0,
                LeftSecondaryThumbTouch: 0,
                LeftThumbUp: 0,
                R1: 0,
                R2: 0,
                R3: 0,
                RB: 0,
                RS: 0,
                RSTouch: 0,
                RT: 0,
                RTClick: 0,
                RX: 0,
                RY: 0,
                Right: 0,
                RightArm: 0,
                RightFoot: 0,
                RightGrip: 0,
                RightGripTouch: 0,
                RightHand: 0,
                RightHandIndex1: 0,
                RightHandIndex2: 0,
                RightHandIndex3: 0,
                RightHandIndex4: 0,
                RightHandMiddle1: 0,
                RightHandMiddle2: 0,
                RightHandMiddle3: 0,
                RightHandMiddle4: 0,
                RightHandPinky1: 0,
                RightHandPinky2: 0,
                RightHandPinky3: 0,
                RightHandPinky4: 0,
                RightHandRing1: 0,
                RightHandRing2: 0,
                RightHandRing3: 0,
                RightHandRing4: 0,
                RightHandThumb1: 0,
                RightHandThumb2: 0,
                RightHandThumb3: 0,
                RightHandThumb4: 0,
                RightIndexPoint: 0,
                RightPrimaryIndex: 0,
                RightPrimaryIndexTouch: 0,
                RightPrimaryThumb: 0,
                RightPrimaryThumbTouch: 0,
                RightSecondaryIndex: 0,
                RightSecondaryIndexTouch: 0,
                RightSecondaryThumb: 0,
                RightSecondaryThumbTouch: 0,
                RightThumbUp: 0,
                Select: 0,
                Spine2: 0,
                Square: 0,
                Start: 0,
                TrackedObject00: 0,
                TrackedObject01: 0,
                TrackedObject02: 0,
                TrackedObject03: 0,
                TrackedObject04: 0,
                TrackedObject05: 0,
                TrackedObject06: 0,
                TrackedObject07: 0,
                TrackedObject08: 0,
                TrackedObject09: 0,
                TrackedObject10: 0,
                TrackedObject11: 0,
                TrackedObject12: 0,
                TrackedObject13: 0,
                TrackedObject14: 0,
                TrackedObject15: 0,
                Triangle: 0,
                Up: 0,
                X: 0,
                Y: 0
            };
        },
        objectName: ''
        };
    }

function DebugDraw(){
    return {
        addMarker: function(QString,glm::quat,glm::vec3,glm::vec4){},
        addMyAvatarMarker: function(QString,glm::quat,glm::vec3,glm::vec4){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        drawRay: function(glm::vec3,glm::vec3,glm::vec4){},
        objectNameChanged: function(QString){},
        removeMarker: function(QString){},
        removeMyAvatarMarker: function(QString){},
        objectName: ''
        };
    }

function Desktop(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        setHUDAlpha: function(float){},
        show: function(QString,QString){},
        height: 0,
        width: 0,
        objectName: ''
        };
    }

function DesktopPreviewProvider(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        setPreviewDisabledReason: function(QString){},
        objectName: ''
        };
    }

function DialogsManager(){
    return {
        addressBarShown: function(bool){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        hideAddressBar: function(){},
        objectNameChanged: function(QString){},
        showAddressBar: function(){},
        showFeed: function(){},
        showLoginDialog: function(){},
        objectName: ''
        };
    }

function DriveKeys(){
    return {
        PITCH: 0,
        STEP_TRANSLATE_X: 0,
        STEP_TRANSLATE_Y: 0,
        STEP_TRANSLATE_Z: 0,
        STEP_YAW: 0,
        TRANSLATE_X: 0,
        TRANSLATE_Y: 0,
        TRANSLATE_Z: 0,
        YAW: 0,
        ZOOM: 0
        };
    }

function Entities(){
    return {
        AABoxIntersectsCapsule: function(glm::vec3,glm::vec3,glm::vec3,glm::vec3,float){},
        addAction: function(QString,QUuid,QVariantMap){},
        addEntity: function(EntityItemProperties){},
        addEntity: function(EntityItemProperties,bool){},
        addModelEntity: function(QString,QString,QString,QString,bool,glm::vec3,glm::vec3){},
        addingEntity: function(EntityItemID){},
        appendPoint: function(QUuid,glm::vec3){},
        callEntityClientMethod: function(QUuid,QUuid,QString){},
        callEntityClientMethod: function(QUuid,QUuid,QString,QStringList){},
        callEntityMethod: function(QUuid,QString){},
        callEntityMethod: function(QUuid,QString,QStringList){},
        callEntityServerMethod: function(QUuid,QString){},
        callEntityServerMethod: function(QUuid,QString,QStringList){},
        canAdjustLocks: function(){},
        canAdjustLocksChanged: function(bool){},
        canReplaceContent: function(){},
        canRez: function(){},
        canRezCertified: function(){},
        canRezCertifiedChanged: function(bool){},
        canRezChanged: function(bool){},
        canRezTmp: function(){},
        canRezTmpCertified: function(){},
        canRezTmpCertifiedChanged: function(bool){},
        canRezTmpChanged: function(bool){},
        canWriteAssets: function(){},
        canWriteAssetsChanged: function(bool){},
        clearingEntities: function(){},
        clickDownOnEntity: function(EntityItemID,PointerEvent){},
        clickReleaseOnEntity: function(EntityItemID,PointerEvent){},
        collisionWithEntity: function(EntityItemID,EntityItemID,Collision){},
        debitEnergySource: function(float){},
        deleteAction: function(QUuid,QUuid){},
        deleteEntity: function(QUuid){},
        deletingEntity: function(EntityItemID){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        dumpTree: function(){},
        editEntity: function(QUuid,EntityItemProperties){},
        emitScriptEvent: function(EntityItemID,QVariant){},
        enterEntity: function(EntityItemID){},
        findClosestEntity: function(glm::vec3,float){},
        findEntities: function(glm::vec3,float){},
        findEntitiesByType: function(QString,glm::vec3,float){},
        findEntitiesInBox: function(glm::vec3,glm::vec3){},
        findEntitiesInFrustum: function(QVariantMap){},
        findRayIntersection: function(PickRay){},
        findRayIntersection: function(PickRay,bool){},
        findRayIntersection: function(PickRay,bool,QScriptValue){},
        findRayIntersection: function(PickRay,bool,QScriptValue,QScriptValue){},
        findRayIntersection: function(PickRay,bool,QScriptValue,QScriptValue,bool){},
        findRayIntersection: function(PickRay,bool,QScriptValue,QScriptValue,bool,bool){},
        findRayIntersectionBlocking: function(PickRay){},
        findRayIntersectionBlocking: function(PickRay,bool){},
        findRayIntersectionBlocking: function(PickRay,bool,QScriptValue){},
        findRayIntersectionBlocking: function(PickRay,bool,QScriptValue,QScriptValue){},
        findRayIntersectionVector: function(PickRay,bool,QVector<EntityItemID>,QVector<EntityItemID>,bool,bool){},
        getAbsoluteJointRotationInObjectFrame: function(QUuid,int){},
        getAbsoluteJointTranslationInObjectFrame: function(QUuid,int){},
        getActionArguments: function(QUuid,QUuid){},
        getActionIDs: function(QUuid){},
        getChildrenIDs: function(QUuid){},
        getChildrenIDsOfJoint: function(QUuid,int){},
        getDrawZoneBoundaries: function(){},
        getEntityLocalTransform: function(QUuid){},
        getEntityProperties: function(QUuid){},
        getEntityProperties: function(QUuid,EntityPropertyFlags){},
        getEntityTransform: function(QUuid){},
        getJointIndex: function(QUuid,QString){},
        getJointNames: function(QUuid){},
        getKeyboardFocusEntity: function(){},
        getLifetimeBPS: function(){},
        getLifetimeBPSQueued: function(){},
        getLifetimeBytesQueued: function(){},
        getLifetimeBytesSent: function(){},
        getLifetimeInSeconds: function(){},
        getLifetimeInUsecs: function(){},
        getLifetimePPS: function(){},
        getLifetimePPSQueued: function(){},
        getLifetimePacketsQueued: function(){},
        getLifetimePacketsSent: function(){},
        getLightsArePickable: function(){},
        getLocalJointRotation: function(QUuid,int){},
        getLocalJointTranslation: function(QUuid,int){},
        getMeshes: function(QUuid,QScriptValue){},
        getNestableType: function(QUuid){},
        getPacketsPerSecond: function(){},
        getServerScriptStatus: function(QUuid,QScriptValue){},
        getStaticCertificateJSON: function(QUuid){},
        getZonesArePickable: function(){},
        hasPacketsToSend: function(){},
        holdingClickOnEntity: function(EntityItemID,PointerEvent){},
        hoverEnterEntity: function(EntityItemID,PointerEvent){},
        hoverLeaveEntity: function(EntityItemID,PointerEvent){},
        hoverOverEntity: function(EntityItemID,PointerEvent){},
        isChildOfParent: function(QUuid,QUuid){},
        leaveEntity: function(EntityItemID){},
        localCoordsToVoxelCoords: function(QUuid,glm::vec3){},
        mouseDoublePressOffEntity: function(){},
        mouseDoublePressOnEntity: function(EntityItemID,PointerEvent){},
        mouseMoveOnEntity: function(EntityItemID,PointerEvent){},
        mousePressOffEntity: function(){},
        mousePressOnEntity: function(EntityItemID,PointerEvent){},
        mouseReleaseOnEntity: function(EntityItemID,PointerEvent){},
        objectNameChanged: function(QString){},
        packetsToSendCount: function(){},
        queryPropertyMetadata: function(QUuid,QScriptValue,QScriptValue){},
        queryPropertyMetadata: function(QUuid,QScriptValue,QScriptValue,QScriptValue){},
        reloadServerScripts: function(QUuid){},
        sendClickDownOnEntity: function(EntityItemID,PointerEvent){},
        sendClickReleaseOnEntity: function(EntityItemID,PointerEvent){},
        sendHoldingClickOnEntity: function(EntityItemID,PointerEvent){},
        sendHoverEnterEntity: function(EntityItemID,PointerEvent){},
        sendHoverLeaveEntity: function(EntityItemID,PointerEvent){},
        sendHoverOverEntity: function(EntityItemID,PointerEvent){},
        sendMouseMoveOnEntity: function(EntityItemID,PointerEvent){},
        sendMousePressOnEntity: function(EntityItemID,PointerEvent){},
        sendMouseReleaseOnEntity: function(EntityItemID,PointerEvent){},
        serversExist: function(){},
        setAbsoluteJointRotationInObjectFrame: function(QUuid,int,glm::quat){},
        setAbsoluteJointTranslationInObjectFrame: function(QUuid,int,glm::vec3){},
        setAllPoints: function(QUuid,QVector<glm::vec3>){},
        setAllVoxels: function(QUuid,int){},
        setDrawZoneBoundaries: function(bool){},
        setKeyboardFocusEntity: function(EntityItemID){},
        setLightsArePickable: function(bool){},
        setLocalJointRotation: function(QUuid,int,glm::quat){},
        setLocalJointRotations: function(QUuid,QVector<glm::quat>){},
        setLocalJointTranslation: function(QUuid,int,glm::vec3){},
        setLocalJointTranslations: function(QUuid,QVector<glm::vec3>){},
        setLocalJointsData: function(QUuid,QVector<glm::quat>,QVector<glm::vec3>){},
        setPacketsPerSecond: function(int){},
        setVoxel: function(QUuid,glm::vec3,int){},
        setVoxelCapsule: function(QUuid,glm::vec3,glm::vec3,float,int){},
        setVoxelSphere: function(QUuid,glm::vec3,float,int){},
        setVoxelsInCuboid: function(QUuid,glm::vec3,glm::vec3,int){},
        setZonesArePickable: function(bool){},
        updateAction: function(QUuid,QUuid,QVariantMap){},
        verifyStaticCertificateProperties: function(QUuid){},
        voxelCoordsToLocalCoords: function(QUuid,glm::vec3){},
        voxelCoordsToWorldCoords: function(QUuid,glm::vec3){},
        wantsHandControllerPointerEvents: function(QUuid){},
        webEventReceived: function(EntityItemID,QVariant){},
        worldCoordsToVoxelCoords: function(QUuid,glm::vec3){},
        keyboardFocusEntity: null,
        costMultiplier: 0,
        currentAvatarEnergy: 0,
        objectName: ''
        };
    }

function EntityScriptServerLog(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        receivedNewLogLines: function(QString){},
        objectName: ''
        };
    }

function FaceTracker(){
    return {
        calibrate: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        getMuted: function(){},
        muteToggled: function(){},
        objectNameChanged: function(QString){},
        setEnabled: function(bool){},
        toggleMute: function(){},
        objectName: ''
        };
    }

function File(){
    return {
        convertUrlToPath: function(QUrl){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        getTempDir: function(){},
        objectNameChanged: function(QString){},
        runUnzip: function(QString,QUrl,bool,bool,bool){},
        unzipResult: function(QString,QStringList,bool,bool,bool){},
        objectName: ''
        };
    }

function function(){
    return {
        NOT HANDLED: 0,
        NOT HANDLED: 1,
        NOT HANDLED: 2,
        NOT HANDLED: 3,
        NOT HANDLED: 4,
        NOT HANDLED: 5,
        NOT HANDLED: 6,
        NOT HANDLED: 7,
        NOT HANDLED: 8,
        NOT HANDLED: 9,
        NOT HANDLED: 10,
        NOT HANDLED: 11,
        NOT HANDLED: 12,
        NOT HANDLED: 13,
        NOT HANDLED: 14,
        NOT HANDLED: 15,
        NOT HANDLED: 16,
        NOT HANDLED: 17,
        NOT HANDLED: 18
        };
    }

function GlobalServices(){
    return {
        loggedIn: true,
        checkAndSignalForAccessToken: function(){},
        connected: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disconnected: function(QString){},
        downloadInfoChanged: function(DownloadInfoResult){},
        findableByChanged: function(QString){},
        getDownloadInfo: function(){},
        isLoggedIn: function(){},
        logOut: function(){},
        loggedInChanged: function(bool){},
        myUsernameChanged: function(QString){},
        objectNameChanged: function(QString){},
        updateDownloadInfo: function(){},
        findableBy: '',
        metaverseServerURL: '',
        objectName: '',
        username: ''
        };
    }

function GooglePoly(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        getAssetList: function(QString,QString,QString){},
        getBlocks: function(QString,QString){},
        getFBX: function(QString,QString){},
        getGLTF: function(QString,QString){},
        getGLTF2: function(QString,QString){},
        getModelInfo: function(QString){},
        getOBJ: function(QString,QString){},
        getTilt: function(QString,QString){},
        objectNameChanged: function(QString){},
        setAPIKey: function(QString){},
        objectName: ''
        };
    }

function Graphics(){
    return {
        canUpdateModel: function(QUuid){},
        canUpdateModel: function(QUuid,int){},
        canUpdateModel: function(QUuid,int,int){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        exportModelToOBJ: function(scriptable::ScriptableModel){},
        getModel: function(QUuid){},
        newMesh: function(QVariantMap){},
        newModel: function(scriptable::ScriptableMeshes){},
        objectNameChanged: function(QString){},
        updateModel: function(QUuid,scriptable::ScriptableModelPointer){},
        objectName: ''
        };
    }

function HMD(){
    return {
        active: true,
        mounted: true,
        showTablet: true,
        tabletContextualMode: true,
        IPDScaleChanged: function(){},
        getHUDLookAtPosition2D: function(){
            return {
                x: 0,
                y: 0
            };
        },
        getHUDLookAtPosition3D: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        activateHMDHandMouse: function(){},
        calculateRayUICollisionPoint: function(glm::vec3,glm::vec3){},
        centerUI: function(){},
        closeTablet: function(){},
        deactivateHMDHandMouse: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        displayModeChanged: function(bool){},
        isHMDAvailable: function(){},
        isHMDAvailable: function(QString){},
        isHandControllerAvailable: function(){},
        isHandControllerAvailable: function(QString){},
        isHeadControllerAvailable: function(){},
        isHeadControllerAvailable: function(QString){},
        isKeyboardVisible: function(){},
        isSubdeviceContainingNameAvailable: function(QString){},
        mountedChanged: function(){},
        objectNameChanged: function(QString){},
        openTablet: function(){},
        openTablet: function(bool){},
        overlayFromWorldPoint: function(glm::vec3){},
        overlayToSpherical: function(glm::vec2){},
        preferredAudioInput: function(){},
        preferredAudioOutput: function(){},
        requestHideHandControllers: function(){},
        requestShowHandControllers: function(){},
        shouldShowHandControllers: function(){},
        shouldShowHandControllersChanged: function(){},
        sphericalToOverlay: function(glm::vec2){},
        suppressKeyboard: function(){},
        unsuppressKeyboard: function(){},
        worldPointFromOverlay: function(glm::vec2){},
        homeButtonHighlightID: null,
        homeButtonID: null,
        tabletID: null,
        tabletScreenID: null,
        eyeHeight: 0,
        ipd: 0,
        ipdScale: 0,
        playerHeight: 0,
        orientation: function(){
            return {
                w: 0,
                x: 0,
                y: 0,
                z: 0
            };
        },
        position: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        objectName: ''
        };
    }

function LaserPointers(){
    return {
        createLaserPointer: function(QVariant){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disableLaserPointer: function(uint){},
        editRenderState: function(uint,QString,QVariant){},
        enableLaserPointer: function(uint){},
        getPrevRayPickResult: function(uint){},
        isLeftHand: function(uint){},
        isMouse: function(uint){},
        isRightHand: function(uint){},
        objectNameChanged: function(QString){},
        removeLaserPointer: function(uint){},
        setIgnoreItems: function(uint,QScriptValue){},
        setIncludeItems: function(uint,QScriptValue){},
        setLaserLength: function(uint,float){},
        setLockEndUUID: function(uint,QUuid,bool){},
        setLockEndUUID: function(uint,QUuid,bool,glm::mat4){},
        setPrecisionPicking: function(uint,bool){},
        setRenderState: function(uint,QString){},
        objectName: ''
        };
    }

function LimitlessSpeechRecognition(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        onFinishedSpeaking: function(QString){},
        onReceivedTranscription: function(QString){},
        setAuthKey: function(QString){},
        setListeningToVoice: function(bool){},
        objectName: ''
        };
    }

function location(){
    return {
        isConnected: true,
        copyAddress: function(){},
        copyPath: function(){},
        deleteLater: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        goBack: function(){},
        goBackPossible: function(bool){},
        goForward: function(){},
        goForwardPossible: function(bool){},
        goToEntry: function(){},
        goToEntry: function(LookupTrigger){},
        goToLocalSandbox: function(){},
        goToLocalSandbox: function(QString){},
        goToLocalSandbox: function(QString,LookupTrigger){},
        goToUser: function(QString){},
        goToUser: function(QString,bool){},
        goToViewpointForPath: function(QString,QString){},
        handleLookupString: function(QString){},
        handleLookupString: function(QString,bool){},
        hostChanged: function(QString){},
        locationChangeRequired: function(glm::vec3,bool,glm::quat,bool){},
        lookupResultIsNotFound: function(){},
        lookupResultIsOffline: function(){},
        lookupResultsFinished: function(){},
        lookupShareableNameForDomainID: function(QUuid){},
        objectNameChanged: function(QString){},
        pathChangeRequired: function(QString){},
        possibleDomainChangeRequired: function(QString,ushort,QUuid){},
        possibleDomainChangeRequiredViaICEForID: function(QString,QUuid){},
        protocolVersion: function(){},
        refreshPreviousLookup: function(){},
        storeCurrentAddress: function(){},
        domainID: '',
        domainId: '',
        hostname: '',
        href: '',
        objectName: '',
        pathname: '',
        placename: '',
        protocol: ''
        };
    }

function LocationBookmarks(){
    return {
        addBookmark: function(){},
        deleteBookmark: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        setHomeLocationToAddress: function(QVariant){},
        objectName: ''
        };
    }

function LODManager(){
    return {
        LODDecreased: function(){},
        LODIncreased: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        getAutomaticLODAdjust: function(){},
        getBoundaryLevelAdjust: function(){},
        getDesktopLODDecreaseFPS: function(){},
        getDesktopLODIncreaseFPS: function(){},
        getHMDLODDecreaseFPS: function(){},
        getHMDLODIncreaseFPS: function(){},
        getLODDecreaseFPS: function(){},
        getLODFeedbackText: function(){},
        getLODIncreaseFPS: function(){},
        getOctreeSizeScale: function(){},
        objectNameChanged: function(QString){},
        setAutomaticLODAdjust: function(bool){},
        setBoundaryLevelAdjust: function(int){},
        setDesktopLODDecreaseFPS: function(float){},
        setHMDLODDecreaseFPS: function(float){},
        setOctreeSizeScale: function(float){},
        avgRenderTime: 0,
        engineRunTime: 0,
        fps: 0,
        gpuTime: 0,
        lodDecreaseFPS: 0,
        lodIncreaseFPS: 0,
        lodLevel: 0,
        presentTime: 0,
        objectName: ''
        };
    }

function Mat4(){
    return {
        createFromArray: function(QVector<float>){},
        createFromColumns: function(glm::vec4,glm::vec4,glm::vec4,glm::vec4){},
        createFromRotAndTrans: function(glm::quat,glm::vec3){},
        createFromScaleRotAndTrans: function(glm::vec3,glm::quat,glm::vec3){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        extractRotation: function(glm::mat4){},
        extractScale: function(glm::mat4){},
        extractTranslation: function(glm::mat4){},
        getForward: function(glm::mat4){},
        getFront: function(glm::mat4){},
        getRight: function(glm::mat4){},
        getUp: function(glm::mat4){},
        inverse: function(glm::mat4){},
        multiply: function(glm::mat4,glm::mat4){},
        objectNameChanged: function(QString){},
        print: function(QString,glm::mat4){},
        print: function(QString,glm::mat4,bool){},
        transformPoint: function(glm::mat4,glm::vec3){},
        transformVector: function(glm::mat4,glm::vec3){},
        objectName: ''
        };
    }

function Menu(){
    return {
        addMenu: function(QString){},
        addMenu: function(QString,QString){},
        addMenuItem: function(MenuItemProperties){},
        addMenuItem: function(QString,QString){},
        addMenuItem: function(QString,QString,QString){},
        addSeparator: function(QString,QString){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        isMenuEnabled: function(QString){},
        isOptionChecked: function(QString){},
        menuExists: function(QString){},
        menuItemEvent: function(QString){},
        menuItemExists: function(QString,QString){},
        objectNameChanged: function(QString){},
        removeMenu: function(QString){},
        removeMenuItem: function(QString,QString){},
        removeSeparator: function(QString,QString){},
        setIsOptionChecked: function(QString,bool){},
        setMenuEnabled: function(QString,bool){},
        triggerOption: function(QString){},
        objectName: ''
        };
    }

function Messages(){
    return {
        dataReceived: function(QString,QByteArray,QUuid,bool){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        messageReceived: function(QString,QString,QUuid,bool){},
        objectNameChanged: function(QString){},
        sendData: function(QString,QByteArray){},
        sendData: function(QString,QByteArray,bool){},
        sendLocalMessage: function(QString,QString){},
        sendMessage: function(QString,QString){},
        sendMessage: function(QString,QString,bool){},
        subscribe: function(QString){},
        unsubscribe: function(QString){},
        objectName: ''
        };
    }

function Midi(){
    return {
        allNotesOff: function(){},
        blockMidiDevice: function(QString,bool){},
        broadcastEnable: function(bool){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        listMidiDevices: function(bool){},
        midiMessage: function(QVariantMap){},
        midiNote: function(QVariantMap){},
        midiReset: function(){},
        objectNameChanged: function(QString){},
        playMidiNote: function(int,int,int){},
        resetDevices: function(){},
        sendMidiMessage: function(int,int,int,int,int){},
        sendRawDword: function(int,int){},
        thruModeEnable: function(bool){},
        typeChanPressureEnable: function(bool){},
        typeControlChangeEnable: function(bool){},
        typeNoteOffEnable: function(bool){},
        typeNoteOnEnable: function(bool){},
        typePitchBendEnable: function(bool){},
        typePolyKeyPressureEnable: function(bool){},
        typeProgramChangeEnable: function(bool){},
        typeSystemMessageEnable: function(bool){},
        unblockMidiDevice: function(QString,bool){},
        objectName: ''
        };
    }

function Model(){
    return {
        appendMeshes: function(MeshProxyList){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        getVertex: function(MeshProxy*,int){},
        getVertexCount: function(MeshProxy*){},
        meshToOBJ: function(MeshProxyList){},
        newMesh: function(QVector<glm::vec3>,QVector<glm::vec3>,QVector<MeshFace>){},
        objectNameChanged: function(QString){},
        transformMesh: function(glm::mat4,MeshProxy*){},
        objectName: ''
        };
    }

function ModelCache(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        dirty: function(){},
        getResource: function(QUrl){},
        getResource: function(QUrl,QUrl){},
        getResource: function(QUrl,QUrl,void*){},
        getResourceList: function(){},
        objectNameChanged: function(QString){},
        prefetch: function(QUrl){},
        prefetch: function(QUrl,void*){},
        updateTotalSize: function(qlonglong){},
        numCached: 0,
        numTotal: 0,
        sizeCached: 0,
        sizeTotal: 0,
        objectName: ''
        };
    }

function MyAvatar(){
    return {
        characterControllerEnabled: true,
        collisionsEnabled: true,
        hmdLeanRecenterEnabled: true,
        hmdRollControlEnabled: true,
        isAway: true,
        lookAtSnappingEnabled: true,
        shouldRenderLocally: true,
        useAdvancedMovementControls: true,
        addAnimationStateHandler: function(QScriptValue,QScriptValue){},
        addThrust: function(glm::vec3){},
        animGraphLoaded: function(){},
        attach: function(QString){},
        attach: function(QString,QString){},
        attach: function(QString,QString,glm::vec3){},
        attach: function(QString,QString,glm::vec3,glm::quat){},
        attach: function(QString,QString,glm::vec3,glm::quat,float){},
        attach: function(QString,QString,glm::vec3,glm::quat,float,bool){},
        attach: function(QString,QString,glm::vec3,glm::quat,float,bool,bool){},
        attach: function(QString,QString,glm::vec3,glm::quat,float,bool,bool,bool){},
        attachmentsChanged: function(){},
        audioListenerModeChanged: function(){},
        centerBody: function(){},
        clearAvatarEntity: function(QUuid){},
        clearIKJointLimitHistory: function(){},
        clearJointData: function(QString){},
        clearJointData: function(int){},
        clearJointsData: function(){},
        clearPinOnJoint: function(int){},
        clearScaleRestriction: function(){},
        collisionWithEntity: function(Collision){},
        decreaseSize: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        detachAll: function(QString){},
        detachAll: function(QString,QString){},
        detachOne: function(QString){},
        detachOne: function(QString,QString){},
        disableDriveKey: function(DriveKeys){},
        displayNameChanged: function(){},
        dominantHandChanged: function(QString){},
        enableDriveKey: function(DriveKeys){},
        energyChanged: function(float){},
        getAbsoluteDefaultJointRotationInObjectFrame: function(int){},
        getAbsoluteDefaultJointTranslationInObjectFrame: function(int){},
        getAbsoluteJointRotationInObjectFrame: function(int){},
        getAbsoluteJointTranslationInObjectFrame: function(int){},
        getAcceleration: function(){},
        getAnimGraphOverrideUrl: function(){},
        getAnimGraphUrl: function(){},
        getAnimationRoles: function(){},
        getAttachmentData: function(){},
        getAttachmentsVariant: function(){},
        getAvatarEntityData: function(){},
        getAvatarScale: function(){},
        getCharacterControllerEnabled: function(){},
        getClearOverlayWhenMoving: function(){},
        getCollisionsEnabled: function(){},
        getControllerLeftHandMatrix: function(){},
        getControllerRightHandMatrix: function(){},
        getDataRate: function(){},
        getDataRate: function(QString){},
        getDefaultEyePosition: function(){},
        getDefaultJointRotation: function(int){},
        getDefaultJointTranslation: function(int){},
        getDomainMaxScale: function(){},
        getDomainMinScale: function(){},
        getDominantHand: function(){},
        getEnableMeshVisible: function(){},
        getEyeHeight: function(){},
        getEyePosition: function(){},
        getFlyingEnabled: function(){},
        getFullAvatarModelName: function(){},
        getFullAvatarURLFromPreferences: function(){},
        getGravity: function(){},
        getHMDLeanRecenterEnabled: function(){},
        getHandState: function(){},
        getHeadDeltaPitch: function(){},
        getHeadFinalPitch: function(){},
        getHeadFinalRoll: function(){},
        getHeadFinalYaw: function(){},
        getHeadPosition: function(){},
        getHeight: function(){},
        getIKErrorOnLastSolve: function(){},
        getJointIndex: function(QString){},
        getJointNames: function(){},
        getJointPosition: function(QString){},
        getJointPosition: function(int){},
        getJointRotation: function(QString){},
        getJointRotation: function(int){},
        getJointRotations: function(){},
        getJointTranslation: function(QString){},
        getJointTranslation: function(int){},
        getJointTranslations: function(){},
        getLeftHandPose: function(){},
        getLeftHandPosition: function(){},
        getLeftHandTipPose: function(){},
        getLeftHandTipPosition: function(){},
        getLeftPalmPosition: function(){},
        getLeftPalmRotation: function(){},
        getNeckPosition: function(){},
        getOrientationForAudio: function(){},
        getOrientationVar: function(){},
        getParentID: function(){},
        getParentJointIndex: function(){},
        getPositionForAudio: function(){},
        getRawDriveKey: function(DriveKeys){},
        getRightHandPose: function(){},
        getRightHandPosition: function(){},
        getRightHandTipPose: function(){},
        getRightHandTipPosition: function(){},
        getRightPalmPosition: function(){},
        getRightPalmRotation: function(){},
        getSensorToWorldMatrix: function(){},
        getSensorToWorldScale: function(){},
        getSimulationRate: function(){},
        getSimulationRate: function(QString){},
        getSkeleton: function(){},
        getSkeletonOffset: function(){},
        getSnapTurn: function(){},
        getTargetAvatar: function(){},
        getTargetAvatarPosition: function(){},
        getTargetScale: function(){},
        getThrust: function(){},
        getUpdateRate: function(){},
        getUpdateRate: function(QString){},
        goToLocation: function(QVariant){},
        goToLocation: function(glm::vec3){},
        goToLocation: function(glm::vec3,bool){},
        goToLocation: function(glm::vec3,bool,glm::quat){},
        goToLocation: function(glm::vec3,bool,glm::quat,bool){},
        goToLocationAndEnableCollisions: function(glm::vec3){},
        increaseSize: function(){},
        isDown: function(glm::vec3){},
        isDriveKeyDisabled: function(DriveKeys){},
        isFlying: function(){},
        isInAir: function(){},
        isJointDataValid: function(QString){},
        isJointDataValid: function(int){},
        isUp: function(glm::vec3){},
        jointToWorldDirection: function(glm::vec3){},
        jointToWorldDirection: function(glm::vec3,int){},
        jointToWorldPoint: function(glm::vec3){},
        jointToWorldPoint: function(glm::vec3,int){},
        jointToWorldRotation: function(glm::quat){},
        jointToWorldRotation: function(glm::quat,int){},
        lookAtSnappingChanged: function(bool){},
        newCollisionSoundURL: function(QUrl){},
        objectNameChanged: function(QString){},
        onLoadComplete: function(){},
        overrideAnimation: function(QString,float,bool,float,float){},
        overrideRoleAnimation: function(QString,QString,float,bool,float,float){},
        pinJoint: function(int,glm::vec3,glm::quat){},
        positionGoneTo: function(){},
        removeAnimationStateHandler: function(QScriptValue){},
        resetLastSent: function(){},
        resetSensorsAndBody: function(){},
        resetSize: function(){},
        restoreAnimation: function(){},
        restoreRoleAnimation: function(QString){},
        restrictScaleFromDomainSettings: function(QJsonObject){},
        rigReady: function(){},
        rigReset: function(){},
        safeLanding: function(glm::vec3){},
        scaleChanged: function(){},
        sendAvatarDataPacket: function(){},
        sendIdentityPacket: function(){},
        sensorToWorldScaleChanged: function(float){},
        sessionDisplayNameChanged: function(){},
        sessionUUIDChanged: function(){},
        setAbsoluteJointRotationInObjectFrame: function(int,glm::quat){},
        setAbsoluteJointTranslationInObjectFrame: function(int,glm::vec3){},
        setAnimGraphOverrideUrl: function(QUrl){},
        setAnimGraphUrl: function(QUrl){},
        setAttachmentData: function(QVector<AttachmentData>){},
        setAttachmentsVariant: function(QVariantList){},
        setAvatarEntityData: function(AvatarEntityMap){},
        setAvatarScale: function(float){},
        setBlendshape: function(QString,float){},
        setCharacterControllerEnabled: function(bool){},
        setClearOverlayWhenMoving: function(bool){},
        setCollisionsEnabled: function(bool){},
        setDominantHand: function(QString){},
        setEnableDebugDrawAnimPose: function(bool){},
        setEnableDebugDrawDefaultPose: function(bool){},
        setEnableDebugDrawDetailedCollision: function(bool){},
        setEnableDebugDrawHandControllers: function(bool){},
        setEnableDebugDrawIKChains: function(bool){},
        setEnableDebugDrawIKConstraints: function(bool){},
        setEnableDebugDrawIKTargets: function(bool){},
        setEnableDebugDrawPosition: function(bool){},
        setEnableDebugDrawSensorToWorldMatrix: function(bool){},
        setEnableInverseKinematics: function(bool){},
        setEnableMeshVisible: function(bool){},
        setFlyingEnabled: function(bool){},
        setForceFaceTrackerConnected: function(bool){},
        setGravity: function(float){},
        setHMDLeanRecenterEnabled: function(bool){},
        setHandState: function(char){},
        setJointData: function(QString,glm::quat,glm::vec3){},
        setJointData: function(int,glm::quat,glm::vec3){},
        setJointMappingsFromNetworkReply: function(){},
        setJointRotation: function(QString,glm::quat){},
        setJointRotation: function(int,glm::quat){},
        setJointRotations: function(QVector<glm::quat>){},
        setJointTranslation: function(QString,glm::vec3){},
        setJointTranslation: function(int,glm::vec3){},
        setJointTranslations: function(QVector<glm::vec3>){},
        setModelScale: function(float){},
        setModelURLFinished: function(bool){},
        setOrientationVar: function(QVariant){},
        setParentID: function(QUuid){},
        setParentJointIndex: function(ushort){},
        setRawJointData: function(QVector<JointData>){},
        setSessionUUID: function(QUuid){},
        setSkeletonOffset: function(glm::vec3){},
        setSnapTurn: function(bool){},
        setThrust: function(glm::vec3){},
        skeletonChanged: function(){},
        skeletonModelURLChanged: function(){},
        transformChanged: function(){},
        updateAvatarEntity: function(QUuid,QByteArray){},
        updateMotionBehaviorFromMenu: function(){},
        useFullAvatarURL: function(QUrl){},
        useFullAvatarURL: function(QUrl,QString){},
        wentActive: function(){},
        wentAway: function(){},
        worldToJointDirection: function(glm::vec3){},
        worldToJointDirection: function(glm::vec3,int){},
        worldToJointPoint: function(glm::vec3){},
        worldToJointPoint: function(glm::vec3,int){},
        worldToJointRotation: function(glm::quat){},
        worldToJointRotation: function(glm::quat,int){},
        audioAverageLoudness: 0,
        audioListenerMode: 0,
        audioListenerModeCamera: 0,
        audioListenerModeCustom: 0,
        audioListenerModeHead: 0,
        audioLoudness: 0,
        bodyPitch: 0,
        bodyRoll: 0,
        bodyYaw: 0,
        density: 0,
        energy: 0,
        headPitch: 0,
        headRoll: 0,
        headYaw: 0,
        hmdRollControlDeadZone: 0,
        hmdRollControlRate: 0,
        motorTimescale: 0,
        pitchSpeed: 0,
        scale: 0,
        sensorToWorldScale: 0,
        userEyeHeight: 0,
        userHeight: 0,
        walkSpeed: 0,
        yawSpeed: 0,
        angularVelocity: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        attachmentData: function(){
            return {
            };
        },
        controllerLeftHandMatrix: function(){
            return {
                r0c0: 0,
                r0c1: 0,
                r0c2: 0,
                r0c3: 0,
                r1c0: 0,
                r1c1: 0,
                r1c2: 0,
                r1c3: 0,
                r2c0: 0,
                r2c1: 0,
                r2c2: 0,
                r2c3: 0,
                r3c0: 0,
                r3c1: 0,
                r3c2: 0,
                r3c3: 0
            };
        },
        controllerRightHandMatrix: function(){
            return {
                r0c0: 0,
                r0c1: 0,
                r0c2: 0,
                r0c3: 0,
                r1c0: 0,
                r1c1: 0,
                r1c2: 0,
                r1c3: 0,
                r2c0: 0,
                r2c1: 0,
                r2c2: 0,
                r2c3: 0,
                r3c0: 0,
                r3c1: 0,
                r3c2: 0,
                r3c3: 0
            };
        },
        customListenOrientation: function(){
            return {
                w: 0,
                x: 0,
                y: 0,
                z: 0
            };
        },
        customListenPosition: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        handPosition: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        headOrientation: function(){
            return {
                w: 0,
                x: 0,
                y: 0,
                z: 0
            };
        },
        jointNames: function(){
            return {
                0: '',
                1: '',
                10: '',
                11: '',
                12: '',
                13: '',
                14: '',
                15: '',
                16: '',
                17: '',
                18: '',
                19: '',
                2: '',
                20: '',
                21: '',
                22: '',
                23: '',
                24: '',
                25: '',
                26: '',
                27: '',
                28: '',
                29: '',
                3: '',
                30: '',
                31: '',
                32: '',
                33: '',
                34: '',
                35: '',
                36: '',
                37: '',
                38: '',
                39: '',
                4: '',
                40: '',
                41: '',
                42: '',
                43: '',
                44: '',
                45: '',
                46: '',
                47: '',
                48: '',
                49: '',
                5: '',
                50: '',
                51: '',
                52: '',
                53: '',
                54: '',
                55: '',
                56: '',
                57: '',
                58: '',
                59: '',
                6: '',
                60: '',
                61: '',
                62: '',
                63: '',
                64: '',
                65: '',
                66: '',
                67: '',
                68: '',
                69: '',
                7: '',
                70: '',
                71: '',
                72: '',
                73: '',
                74: '',
                75: '',
                76: '',
                77: '',
                78: '',
                79: '',
                8: '',
                80: '',
                81: '',
                82: '',
                9: ''
            };
        },
        leftHandPose: function(){
            return {
                valid: true,
                angularVelocity: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                rotation: function(){
                    return {
                        w: 0,
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                translation: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                velocity: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                }
            };
        },
        leftHandPosition: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        leftHandTipPose: function(){
            return {
                valid: true,
                angularVelocity: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                rotation: function(){
                    return {
                        w: 0,
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                translation: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                velocity: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                }
            };
        },
        leftHandTipPosition: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        motorVelocity: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        orientation: function(){
            return {
                w: 0,
                x: 0,
                y: 0,
                z: 0
            };
        },
        position: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        qmlPosition: function(){
            return {
            };
        },
        rightHandPose: function(){
            return {
                valid: true,
                angularVelocity: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                rotation: function(){
                    return {
                        w: 0,
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                translation: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                velocity: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                }
            };
        },
        rightHandPosition: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        rightHandTipPose: function(){
            return {
                valid: true,
                angularVelocity: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                rotation: function(){
                    return {
                        w: 0,
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                translation: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                },
                velocity: function(){
                    return {
                        x: 0,
                        y: 0,
                        z: 0
                    };
                }
            };
        },
        rightHandTipPosition: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        sensorToWorldMatrix: function(){
            return {
                r0c0: 0,
                r0c1: 0,
                r0c2: 0,
                r0c3: 0,
                r1c0: 0,
                r1c1: 0,
                r1c2: 0,
                r1c3: 0,
                r2c0: 0,
                r2c1: 0,
                r2c2: 0,
                r2c3: 0,
                r3c0: 0,
                r3c1: 0,
                r3c2: 0,
                r3c3: 0
            };
        },
        skeletonOffset: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        velocity: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        SELF_ID: '',
        collisionSoundURL: '',
        displayName: '',
        motorMode: '',
        motorReferenceFrame: '',
        objectName: '',
        sessionDisplayName: '',
        sessionUUID: '',
        skeletonModelURL: ''
        };
    }

function OffscreenFlags(){
    return {
        navigationFocusDisabled: true,
        navigationFocused: true,
        destroyed: function(){},
        destroyed: function(QObject*){},
        navigationFocusDisabledChanged: function(){},
        navigationFocusedChanged: function(){},
        objectNameChanged: function(QString){},
        objectName: ''
        };
    }

function Overlays(){
    return {
        addOverlay: function(QString,QVariant){},
        cloneOverlay: function(OverlayID){},
        deleteOverlay: function(OverlayID){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        editOverlay: function(OverlayID,QVariant){},
        editOverlays: function(QVariant){},
        findOverlays: function(glm::vec3,float){},
        findRayIntersection: function(PickRay){},
        findRayIntersection: function(PickRay,bool){},
        findRayIntersection: function(PickRay,bool,QScriptValue){},
        findRayIntersection: function(PickRay,bool,QScriptValue,QScriptValue){},
        findRayIntersection: function(PickRay,bool,QScriptValue,QScriptValue,bool){},
        findRayIntersection: function(PickRay,bool,QScriptValue,QScriptValue,bool,bool){},
        getKeyboardFocusOverlay: function(){},
        getOverlayAtPoint: function(glm::vec2){},
        getOverlayType: function(OverlayID){},
        getOverlaysProperties: function(QVariant){},
        getProperties: function(OverlayID,QStringList){},
        getProperty: function(OverlayID,QString){},
        height: function(){},
        hoverEnterOverlay: function(OverlayID,PointerEvent){},
        hoverLeaveOverlay: function(OverlayID,PointerEvent){},
        hoverOverOverlay: function(OverlayID,PointerEvent){},
        isAddedOverlay: function(OverlayID){},
        isLoaded: function(OverlayID){},
        mouseDoublePressOffOverlay: function(){},
        mouseDoublePressOnOverlay: function(OverlayID,PointerEvent){},
        mouseMoveOnOverlay: function(OverlayID,PointerEvent){},
        mousePressOffOverlay: function(){},
        mousePressOnOverlay: function(OverlayID,PointerEvent){},
        mouseReleaseOnOverlay: function(OverlayID,PointerEvent){},
        objectNameChanged: function(QString){},
        overlayDeleted: function(OverlayID){},
        sendHoverEnterOverlay: function(OverlayID,PointerEvent){},
        sendHoverLeaveOverlay: function(OverlayID,PointerEvent){},
        sendHoverOverOverlay: function(OverlayID,PointerEvent){},
        sendMouseMoveOnOverlay: function(OverlayID,PointerEvent){},
        sendMousePressOnOverlay: function(OverlayID,PointerEvent){},
        sendMouseReleaseOnOverlay: function(OverlayID,PointerEvent){},
        setKeyboardFocusOverlay: function(OverlayID){},
        textSize: function(OverlayID,QString){},
        width: function(){},
        keyboardFocusOverlay: null,
        objectName: ''
        };
    }

function Paths(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        defaultScripts: '',
        objectName: '',
        resources: ''
        };
    }

function Picks(){
    return {
        INTERSECTED_AVATAR: function(){},
        INTERSECTED_ENTITY: function(){},
        INTERSECTED_HUD: function(){},
        INTERSECTED_NONE: function(){},
        INTERSECTED_OVERLAY: function(){},
        PICK_ALL_INTERSECTIONS: function(){},
        PICK_AVATARS: function(){},
        PICK_COARSE: function(){},
        PICK_ENTITIES: function(){},
        PICK_HUD: function(){},
        PICK_INCLUDE_INVISIBLE: function(){},
        PICK_INCLUDE_NONCOLLIDABLE: function(){},
        PICK_NOTHING: function(){},
        PICK_OVERLAYS: function(){},
        createPick: function(PickQuery::PickType,QVariant){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disablePick: function(uint){},
        enablePick: function(uint){},
        getPrevPickResult: function(uint){},
        isLeftHand: function(uint){},
        isMouse: function(uint){},
        isRightHand: function(uint){},
        objectNameChanged: function(QString){},
        removePick: function(uint){},
        setIgnoreItems: function(uint,QScriptValue){},
        setIncludeItems: function(uint,QScriptValue){},
        setPrecisionPicking: function(uint,bool){},
        INTERSECTED_AVATAR: 0,
        INTERSECTED_ENTITY: 0,
        INTERSECTED_HUD: 0,
        INTERSECTED_NONE: 0,
        INTERSECTED_OVERLAY: 0,
        PICK_ALL_INTERSECTIONS: 0,
        PICK_AVATARS: 0,
        PICK_COARSE: 0,
        PICK_ENTITIES: 0,
        PICK_HUD: 0,
        PICK_INCLUDE_INVISIBLE: 0,
        PICK_INCLUDE_NONCOLLIDABLE: 0,
        PICK_NOTHING: 0,
        PICK_OVERLAYS: 0,
        objectName: ''
        };
    }

function PickType(){
    return {
        Ray: 0,
        Stylus: 0
        };
    }

function Pointers(){
    return {
        createPointer: function(PickQuery::PickType,QVariant){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disablePointer: function(uint){},
        editRenderState: function(uint,QString,QVariant){},
        enablePointer: function(uint){},
        getPrevPickResult: function(uint){},
        isLeftHand: function(uint){},
        isMouse: function(uint){},
        isRightHand: function(uint){},
        objectNameChanged: function(QString){},
        removePointer: function(uint){},
        setIgnoreItems: function(uint,QScriptValue){},
        setIncludeItems: function(uint,QScriptValue){},
        setLength: function(uint,float){},
        setLockEndUUID: function(uint,QUuid,bool){},
        setLockEndUUID: function(uint,QUuid,bool,glm::mat4){},
        setPrecisionPicking: function(uint,bool){},
        setRenderState: function(uint,QString){},
        objectName: ''
        };
    }

function Quat(){
    return {
        angle: function(glm::quat){},
        angleAxis: function(float,glm::vec3){},
        axis: function(glm::quat){},
        cancelOutRoll: function(glm::quat){},
        cancelOutRollAndPitch: function(glm::quat){},
        conjugate: function(glm::quat){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        dot: function(glm::quat,glm::quat){},
        equal: function(glm::quat,glm::quat){},
        fromPitchYawRollDegrees: function(float,float,float){},
        fromPitchYawRollRadians: function(float,float,float){},
        fromVec3Degrees: function(glm::vec3){},
        fromVec3Radians: function(glm::vec3){},
        getForward: function(glm::quat){},
        getFront: function(glm::quat){},
        getRight: function(glm::quat){},
        getUp: function(glm::quat){},
        inverse: function(glm::quat){},
        lookAt: function(glm::vec3,glm::vec3,glm::vec3){},
        lookAtSimple: function(glm::vec3,glm::vec3){},
        mix: function(glm::quat,glm::quat,float){},
        multiply: function(glm::quat,glm::quat){},
        normalize: function(glm::quat){},
        objectNameChanged: function(QString){},
        print: function(QString,glm::quat){},
        print: function(QString,glm::quat,bool){},
        rotationBetween: function(glm::vec3,glm::vec3){},
        safeEulerAngles: function(glm::quat){},
        slerp: function(glm::quat,glm::quat,float){},
        squad: function(glm::quat,glm::quat,glm::quat,glm::quat,float){},
        IDENTITY: function(){
            return {
                w: 0,
                x: 0,
                y: 0,
                z: 0
            };
        },
        objectName: ''
        };
    }

function Rates(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        dropped: 0,
        newFrame: 0,
        present: 0,
        render: 0,
        simulation: 0,
        objectName: ''
        };
    }

function RayPick(){
    return {
        INTERSECTED_AVATAR: function(){},
        INTERSECTED_ENTITY: function(){},
        INTERSECTED_HUD: function(){},
        INTERSECTED_NONE: function(){},
        INTERSECTED_OVERLAY: function(){},
        PICK_ALL_INTERSECTIONS: function(){},
        PICK_AVATARS: function(){},
        PICK_COARSE: function(){},
        PICK_ENTITIES: function(){},
        PICK_HUD: function(){},
        PICK_INCLUDE_INVISIBLE: function(){},
        PICK_INCLUDE_NONCOLLIDABLE: function(){},
        PICK_NOTHING: function(){},
        PICK_OVERLAYS: function(){},
        createRayPick: function(QVariant){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disableRayPick: function(uint){},
        enableRayPick: function(uint){},
        getPrevRayPickResult: function(uint){},
        isLeftHand: function(uint){},
        isMouse: function(uint){},
        isRightHand: function(uint){},
        objectNameChanged: function(QString){},
        removeRayPick: function(uint){},
        setIgnoreItems: function(uint,QScriptValue){},
        setIncludeItems: function(uint,QScriptValue){},
        setPrecisionPicking: function(uint,bool){},
        INTERSECTED_AVATAR: 0,
        INTERSECTED_ENTITY: 0,
        INTERSECTED_HUD: 0,
        INTERSECTED_NONE: 0,
        INTERSECTED_OVERLAY: 0,
        PICK_ALL_INTERSECTIONS: 0,
        PICK_AVATARS: 0,
        PICK_COARSE: 0,
        PICK_ENTITIES: 0,
        PICK_HUD: 0,
        PICK_INCLUDE_INVISIBLE: 0,
        PICK_INCLUDE_NONCOLLIDABLE: 0,
        PICK_NOTHING: 0,
        PICK_OVERLAYS: 0,
        objectName: ''
        };
    }

function Recording(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        getDefaultRecordingSaveDirectory: function(){},
        getPlayFromCurrentLocation: function(){},
        getPlayerUseAttachments: function(){},
        getPlayerUseDisplayName: function(){},
        getPlayerUseHeadModel: function(){},
        getPlayerUseSkeletonModel: function(){},
        isPaused: function(){},
        isPlaying: function(){},
        isRecording: function(){},
        loadLastRecording: function(){},
        loadRecording: function(QString){},
        loadRecording: function(QString,QScriptValue){},
        objectNameChanged: function(QString){},
        pausePlayer: function(){},
        playerElapsed: function(){},
        playerLength: function(){},
        recorderElapsed: function(){},
        saveRecording: function(QString){},
        saveRecordingToAsset: function(QScriptValue){},
        setPlayFromCurrentLocation: function(bool){},
        setPlayerAudioOffset: function(float){},
        setPlayerLoop: function(bool){},
        setPlayerTime: function(float){},
        setPlayerUseAttachments: function(bool){},
        setPlayerUseDisplayName: function(bool){},
        setPlayerUseHeadModel: function(bool){},
        setPlayerUseSkeletonModel: function(bool){},
        setPlayerVolume: function(float){},
        startPlaying: function(){},
        startRecording: function(){},
        stopPlaying: function(){},
        stopRecording: function(){},
        objectName: ''
        };
    }

function Render(){
    return {
        enabled: true,
        destroyed: function(){},
        destroyed: function(QObject*){},
        dirtyEnabled: function(){},
        getConfig: function(QString){},
        load: function(QJsonObject){},
        load: function(QVariantMap){},
        loaded: function(){},
        newStats: function(){},
        objectNameChanged: function(QString){},
        refresh: function(){},
        toJSON: function(){},
        cpuRunTime: 0,
        objectName: ''
        };
    }

function Resource(){
    return {
        State: function(){
            return {
                destroyed: function(){},
                destroyed: function(QObject*){},
                objectNameChanged: function(QString){},
                FAILED: 0,
                FINISHED: 0,
                LOADED: 0,
                LOADING: 0,
                QUEUED: 0,
                objectName: ''
            };
        }
        };
    }

function Resources(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        overrideUrlPrefix: function(QString,QString){},
        restoreUrlPrefix: function(QString){},
        objectName: ''
        };
    }

function Reticle(){
    return {
        allowMouseCapture: true,
        mouseCaptured: true,
        pointingAtSystemOverlay: true,
        visible: true,
        destroyed: function(){},
        destroyed: function(QObject*){},
        getAllowMouseCapture: function(){},
        getDepth: function(){},
        getMaximumPosition: function(){},
        getPosition: function(){},
        getScale: function(){},
        getVisible: function(){},
        isMouseCaptured: function(){},
        isPointingAtSystemOverlay: function(){},
        objectNameChanged: function(QString){},
        setAllowMouseCapture: function(bool){},
        setDepth: function(float){},
        setPosition: function(QVariant){},
        setScale: function(float){},
        setVisible: function(bool){},
        depth: 0,
        scale: 0,
        maximumPosition: function(){
            return {
                x: 0,
                y: 0
            };
        },
        position: function(){
            return {
                x: 0,
                y: 0
            };
        },
        objectName: ''
        };
    }

function Scene(){
    return {
        shouldRenderAvatars: true,
        shouldRenderEntities: true,
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        shouldRenderAvatarsChanged: function(bool){},
        shouldRenderEntitiesChanged: function(bool){},
        stage: function(){
            return {
                sunModel: true,
                deleteLater: function(){},
                destroyed: function(){},
                destroyed: function(QObject*){},
                objectNameChanged: function(QString){},
                setLocation: function(float,float,float){},
                setOrientation: function(glm::quat){},
                keyLight: function(){
                    return {
                        deleteLater: function(){},
                        destroyed: function(){},
                        destroyed: function(QObject*){},
                        objectNameChanged: function(QString){},
                        ambientIntensity: 0,
                        intensity: 0,
                        color: function(){
                            return {
                                x: 0,
                                y: 0,
                                z: 0
                            };
                        },
                        direction: function(){
                            return {
                                x: 0,
                                y: 0,
                                z: 0
                            };
                        },
                        objectName: ''
                    };
                },
                location: function(){
                    return {
                        deleteLater: function(){},
                        destroyed: function(){},
                        destroyed: function(QObject*){},
                        objectNameChanged: function(QString){},
                        altitude: 0,
                        latitude: 0,
                        longitude: 0,
                        objectName: ''
                    };
                },
                time: function(){
                    return {
                        deleteLater: function(){},
                        destroyed: function(){},
                        destroyed: function(QObject*){},
                        objectNameChanged: function(QString){},
                        day: 0,
                        hour: 0,
                        objectName: ''
                    };
                },
                backgroundMode: '',
                objectName: ''
            };
        },
        objectName: ''
        };
    }

function Script(){
    return {
        _requireResolve: function(QString){},
        _requireResolve: function(QString,QString){},
        addEventHandler: function(EntityItemID,QString,QScriptValue){},
        beginProfileRange: function(QString){},
        callAnimationStateHandler: function(QScriptValue,AnimVariantMap,QStringList,bool,AnimVariantResultHandler){},
        callEntityScriptMethod: function(EntityItemID,QString){},
        callEntityScriptMethod: function(EntityItemID,QString,EntityItemID,Collision){},
        callEntityScriptMethod: function(EntityItemID,QString,PointerEvent){},
        callEntityScriptMethod: function(EntityItemID,QString,QStringList){},
        callEntityScriptMethod: function(EntityItemID,QString,QStringList,QUuid){},
        cleanupMenuItem: function(QString){},
        clearDebugWindow: function(){},
        clearInterval: function(QObject*){},
        clearTimeout: function(QObject*){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        doneRunning: function(){},
        endProfileRange: function(QString){},
        entityScriptContentAvailable: function(EntityItemID,QString,QString,bool,bool,QString){},
        entityScriptDetailsUpdated: function(){},
        errorLoadingScript: function(QString){},
        errorMessage: function(QString,QString){},
        evaluate: function(QString,QString){},
        evaluate: function(QString,QString,int){},
        evaluateInClosure: function(QScriptValue,QScriptProgram){},
        executeOnScriptThread: function(std::function<void){},
        executeOnScriptThread: function(std::function<void){},
        finished: function(QString,ScriptEnginePointer){},
        formatException: function(QScriptValue,bool){},
        generateUUID: function(){},
        getContext: function(){},
        include: function(QString){},
        include: function(QString,QScriptValue){},
        include: function(QStringList){},
        include: function(QStringList,QScriptValue){},
        infoMessage: function(QString,QString){},
        isAgentScript: function(){},
        isClientScript: function(){},
        isEntityClientScript: function(){},
        isEntityScriptRunning: function(EntityItemID){},
        isEntityServerScript: function(){},
        lintScript: function(QString,QString){},
        lintScript: function(QString,QString,int){},
        load: function(QString){},
        loadEntityScript: function(EntityItemID,QString,bool){},
        loadScript: function(QString,bool){},
        makeError: function(){},
        makeError: function(QScriptValue){},
        makeError: function(QScriptValue,QString){},
        objectNameChanged: function(QString){},
        print: function(QString){},
        printedMessage: function(QString,QString){},
        registerFunction: function(QString,QScriptEngine::FunctionSignature){},
        registerFunction: function(QString,QScriptEngine::FunctionSignature,int){},
        registerFunction: function(QString,QString,QScriptEngine::FunctionSignature){},
        registerFunction: function(QString,QString,QScriptEngine::FunctionSignature,int){},
        registerGetterSetter: function(QString,QScriptEngine::FunctionSignature,QScriptEngine::FunctionSignature){},
        registerGetterSetter: function(QString,QScriptEngine::FunctionSignature,QScriptEngine::FunctionSignature,QString){},
        registerGlobalObject: function(QString,QObject*){},
        registerValue: function(QString,QScriptValue){},
        reloadScript: function(QString,bool){},
        removeEventHandler: function(EntityItemID,QString,QScriptValue){},
        requestGarbageCollection: function(){},
        require: function(QString){},
        resetModuleCache: function(){},
        resetModuleCache: function(bool){},
        resolvePath: function(QString){},
        resourcesPath: function(){},
        runningStateChanged: function(){},
        scriptEnding: function(){},
        scriptLoaded: function(QString){},
        setInterval: function(QScriptValue,int){},
        setTimeout: function(QScriptValue,int){},
        signalHandlerException: function(QScriptValue){},
        stop: function(){},
        stop: function(bool){},
        unhandledException: function(QScriptValue){},
        unloadAllEntityScripts: function(){},
        unloadEntityScript: function(EntityItemID){},
        unloadEntityScript: function(EntityItemID,bool){},
        update: function(float){},
        updateMemoryCost: function(qlonglong){},
        warningMessage: function(QString,QString){},
        context: '',
        objectName: ''
        };
    }

function ScriptDiscoveryService(){
    return {
        clearDebugWindow: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        errorLoadingScript: function(QString){},
        errorMessage: function(QString,QString){},
        getLocal: function(){},
        getPublic: function(){},
        getRunning: function(){},
        infoMessage: function(QString,QString){},
        loadOneScript: function(QString){},
        loadScript: function(){},
        loadScript: function(QUrl){},
        loadScript: function(QUrl,bool){},
        loadScript: function(QUrl,bool,bool){},
        loadScript: function(QUrl,bool,bool,bool){},
        loadScript: function(QUrl,bool,bool,bool,bool){},
        objectNameChanged: function(QString){},
        onClearDebugWindow: function(){},
        onErrorLoadingScript: function(QString){},
        onErrorMessage: function(QString,QString){},
        onInfoMessage: function(QString,QString){},
        onPrintedMessage: function(QString,QString){},
        onScriptFinished: function(QString,ScriptEnginePointer){},
        onWarningMessage: function(QString,QString){},
        printedMessage: function(QString,QString){},
        reloadAllScripts: function(){},
        scriptCountChanged: function(){},
        scriptLoadError: function(QString,QString){},
        scriptsReloading: function(){},
        stopAllScripts: function(){},
        stopAllScripts: function(bool){},
        stopScript: function(QString){},
        stopScript: function(QString,bool){},
        warningMessage: function(QString,QString){},
        scriptsModel: function(){
            return {
                canFetchMore: function(QModelIndex){},
                columnCount: function(){},
                columnCount: function(QModelIndex){},
                columnsAboutToBeInserted: function(QModelIndex,int,int){},
                columnsAboutToBeMoved: function(QModelIndex,int,int,QModelIndex,int){},
                columnsAboutToBeRemoved: function(QModelIndex,int,int){},
                columnsInserted: function(QModelIndex,int,int){},
                columnsMoved: function(QModelIndex,int,int,QModelIndex,int){},
                columnsRemoved: function(QModelIndex,int,int){},
                data: function(QModelIndex){},
                data: function(QModelIndex,int){},
                dataChanged: function(QModelIndex,QModelIndex){},
                dataChanged: function(QModelIndex,QModelIndex,QVector<int>){},
                deleteLater: function(){},
                destroyed: function(){},
                destroyed: function(QObject*){},
                downloadFinished: function(){},
                fetchMore: function(QModelIndex){},
                flags: function(QModelIndex){},
                hasChildren: function(){},
                hasChildren: function(QModelIndex){},
                hasIndex: function(int,int){},
                hasIndex: function(int,int,QModelIndex){},
                headerData: function(int,Qt::Orientation){},
                headerData: function(int,Qt::Orientation,int){},
                headerDataChanged: function(Qt::Orientation,int,int){},
                index: function(int,int){},
                index: function(int,int,QModelIndex){},
                layoutAboutToBeChanged: function(){},
                layoutAboutToBeChanged: function(QList<QPersistentModelIndex>){},
                layoutAboutToBeChanged: function(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHint){},
                layoutChanged: function(){},
                layoutChanged: function(QList<QPersistentModelIndex>){},
                layoutChanged: function(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHint){},
                match: function(QModelIndex,int,QVariant){},
                match: function(QModelIndex,int,QVariant,int){},
                match: function(QModelIndex,int,QVariant,int,Qt::MatchFlags){},
                modelAboutToBeReset: function(){},
                modelReset: function(){},
                objectNameChanged: function(QString){},
                parent: function(QModelIndex){},
                reloadDefaultFiles: function(){},
                reloadLocalFiles: function(){},
                resetInternalData: function(){},
                revert: function(){},
                rowCount: function(){},
                rowCount: function(QModelIndex){},
                rowsAboutToBeInserted: function(QModelIndex,int,int){},
                rowsAboutToBeMoved: function(QModelIndex,int,int,QModelIndex,int){},
                rowsAboutToBeRemoved: function(QModelIndex,int,int){},
                rowsInserted: function(QModelIndex,int,int){},
                rowsMoved: function(QModelIndex,int,int,QModelIndex,int){},
                rowsRemoved: function(QModelIndex,int,int){},
                setData: function(QModelIndex,QVariant){},
                setData: function(QModelIndex,QVariant,int){},
                sibling: function(int,int,QModelIndex){},
                submit: function(){},
                updateScriptsLocation: function(QString){},
                objectName: ''
            };
        },
        scriptsModelFilter: function(){
            return {
                dynamicSortFilter: true,
                isSortLocaleAware: true,
                canFetchMore: function(QModelIndex){},
                clear: function(){},
                columnCount: function(){},
                columnCount: function(QModelIndex){},
                columnsAboutToBeInserted: function(QModelIndex,int,int){},
                columnsAboutToBeMoved: function(QModelIndex,int,int,QModelIndex,int){},
                columnsAboutToBeRemoved: function(QModelIndex,int,int){},
                columnsInserted: function(QModelIndex,int,int){},
                columnsMoved: function(QModelIndex,int,int,QModelIndex,int){},
                columnsRemoved: function(QModelIndex,int,int){},
                data: function(QModelIndex){},
                data: function(QModelIndex,int){},
                dataChanged: function(QModelIndex,QModelIndex){},
                dataChanged: function(QModelIndex,QModelIndex,QVector<int>){},
                deleteLater: function(){},
                destroyed: function(){},
                destroyed: function(QObject*){},
                fetchMore: function(QModelIndex){},
                filterRegExp: function(undefined{},
                flags: function(QModelIndex){},
                hasChildren: function(){},
                hasChildren: function(QModelIndex){},
                hasIndex: function(int,int){},
                hasIndex: function(int,int,QModelIndex){},
                headerData: function(int,Qt::Orientation){},
                headerData: function(int,Qt::Orientation,int){},
                headerDataChanged: function(Qt::Orientation,int,int){},
                index: function(int,int){},
                index: function(int,int,QModelIndex){},
                invalidate: function(){},
                layoutAboutToBeChanged: function(){},
                layoutAboutToBeChanged: function(QList<QPersistentModelIndex>){},
                layoutAboutToBeChanged: function(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHint){},
                layoutChanged: function(){},
                layoutChanged: function(QList<QPersistentModelIndex>){},
                layoutChanged: function(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHint){},
                mapFromSource: function(QModelIndex){},
                mapSelectionFromSource: function(QItemSelection){},
                mapSelectionToSource: function(QItemSelection){},
                mapToSource: function(QModelIndex){},
                match: function(QModelIndex,int,QVariant){},
                match: function(QModelIndex,int,QVariant,int){},
                match: function(QModelIndex,int,QVariant,int,Qt::MatchFlags){},
                modelAboutToBeReset: function(){},
                modelReset: function(){},
                objectNameChanged: function(QString){},
                parent: function(QModelIndex){},
                resetInternalData: function(){},
                revert: function(){},
                rowCount: function(){},
                rowCount: function(QModelIndex){},
                rowsAboutToBeInserted: function(QModelIndex,int,int){},
                rowsAboutToBeMoved: function(QModelIndex,int,int,QModelIndex,int){},
                rowsAboutToBeRemoved: function(QModelIndex,int,int){},
                rowsInserted: function(QModelIndex,int,int){},
                rowsMoved: function(QModelIndex,int,int,QModelIndex,int){},
                rowsRemoved: function(QModelIndex,int,int){},
                setData: function(QModelIndex,QVariant){},
                setData: function(QModelIndex,QVariant,int){},
                setFilterFixedString: function(QString){},
                setFilterRegExp: function(QString){},
                setFilterWildcard: function(QString){},
                sibling: function(int,int,QModelIndex){},
                sourceModelChanged: function(){},
                submit: function(){},
                filterCaseSensitivity: 0,
                filterKeyColumn: 0,
                filterRole: 0,
                sortCaseSensitivity: 0,
                sortRole: 0,
                sourceModel: function(){
                    return {
                        canFetchMore: function(QModelIndex){},
                        columnCount: function(){},
                        columnCount: function(QModelIndex){},
                        columnsAboutToBeInserted: function(QModelIndex,int,int){},
                        columnsAboutToBeMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        columnsAboutToBeRemoved: function(QModelIndex,int,int){},
                        columnsInserted: function(QModelIndex,int,int){},
                        columnsMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        columnsRemoved: function(QModelIndex,int,int){},
                        data: function(QModelIndex){},
                        data: function(QModelIndex,int){},
                        dataChanged: function(QModelIndex,QModelIndex){},
                        dataChanged: function(QModelIndex,QModelIndex,QVector<int>){},
                        deleteLater: function(){},
                        destroyed: function(){},
                        destroyed: function(QObject*){},
                        downloadFinished: function(){},
                        fetchMore: function(QModelIndex){},
                        flags: function(QModelIndex){},
                        hasChildren: function(){},
                        hasChildren: function(QModelIndex){},
                        hasIndex: function(int,int){},
                        hasIndex: function(int,int,QModelIndex){},
                        headerData: function(int,Qt::Orientation){},
                        headerData: function(int,Qt::Orientation,int){},
                        headerDataChanged: function(Qt::Orientation,int,int){},
                        index: function(int,int){},
                        index: function(int,int,QModelIndex){},
                        layoutAboutToBeChanged: function(){},
                        layoutAboutToBeChanged: function(QList<QPersistentModelIndex>){},
                        layoutAboutToBeChanged: function(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHint){},
                        layoutChanged: function(){},
                        layoutChanged: function(QList<QPersistentModelIndex>){},
                        layoutChanged: function(QList<QPersistentModelIndex>,QAbstractItemModel::LayoutChangeHint){},
                        match: function(QModelIndex,int,QVariant){},
                        match: function(QModelIndex,int,QVariant,int){},
                        match: function(QModelIndex,int,QVariant,int,Qt::MatchFlags){},
                        modelAboutToBeReset: function(){},
                        modelReset: function(){},
                        objectNameChanged: function(QString){},
                        parent: function(QModelIndex){},
                        reloadDefaultFiles: function(){},
                        reloadLocalFiles: function(){},
                        resetInternalData: function(){},
                        revert: function(){},
                        rowCount: function(){},
                        rowCount: function(QModelIndex){},
                        rowsAboutToBeInserted: function(QModelIndex,int,int){},
                        rowsAboutToBeMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        rowsAboutToBeRemoved: function(QModelIndex,int,int){},
                        rowsInserted: function(QModelIndex,int,int){},
                        rowsMoved: function(QModelIndex,int,int,QModelIndex,int){},
                        rowsRemoved: function(QModelIndex,int,int){},
                        setData: function(QModelIndex,QVariant){},
                        setData: function(QModelIndex,QVariant,int){},
                        sibling: function(int,int,QModelIndex){},
                        submit: function(){},
                        updateScriptsLocation: function(QString){},
                        objectName: ''
                    };
                },
                objectName: ''
            };
        },
        debugScriptUrl: '',
        defaultScriptsPath: '',
        objectName: ''
        };
    }

function Selection(){
    return {
        addToSelectedItemsList: function(QString,QString,QUuid){},
        clearSelectedItemsList: function(QString){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disableListHighlight: function(QString){},
        enableListHighlight: function(QString,QVariantMap){},
        getHighlightedListNames: function(){},
        getListHighlightStyle: function(QString){},
        getListNames: function(){},
        getSelectedItemsList: function(QString){},
        objectNameChanged: function(QString){},
        printList: function(QString){},
        removeFromSelectedItemsList: function(QString,QString,QUuid){},
        removeListFromMap: function(QString){},
        selectedItemsListChanged: function(QString){},
        objectName: ''
        };
    }

function Settings(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        getValue: function(QString){},
        getValue: function(QString,QVariant){},
        objectNameChanged: function(QString){},
        setValue: function(QString,QVariant){},
        objectName: ''
        };
    }

function Snapshot(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        getSnapshotsLocation: function(){},
        objectNameChanged: function(QString){},
        setSnapshotsLocation: function(QString){},
        snapshotLocationSet: function(QString){},
        objectName: ''
        };
    }

function SoundCache(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        dirty: function(){},
        getResource: function(QUrl){},
        getResource: function(QUrl,QUrl){},
        getResource: function(QUrl,QUrl,void*){},
        getResourceList: function(){},
        getSound: function(QUrl){},
        objectNameChanged: function(QString){},
        prefetch: function(QUrl){},
        prefetch: function(QUrl,void*){},
        updateTotalSize: function(qlonglong){},
        numCached: 0,
        numTotal: 0,
        sizeCached: 0,
        sizeTotal: 0,
        objectName: ''
        };
    }

function SpeechRecognizer(){
    return {
        addCommand: function(QString){},
        commandRecognized: function(QString){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        enabledUpdated: function(bool){},
        objectNameChanged: function(QString){},
        removeCommand: function(QString){},
        setEnabled: function(bool){},
        objectName: ''
        };
    }

function Stats(){
    return {
        activeFocus: true,
        activeFocusOnTab: true,
        antialiasing: true,
        clip: true,
        enabled: true,
        expanded: true,
        focus: true,
        smooth: true,
        timingExpanded: true,
        visible: true,
        activeFocusChanged: function(bool){},
        activeFocusOnTabChanged: function(bool){},
        antialiasingChanged: function(bool){},
        appdroppedChanged: function(){},
        assetMbpsInChanged: function(){},
        assetMbpsOutChanged: function(){},
        assetPingChanged: function(){},
        audioAudioInboundPPSChanged: function(){},
        audioCodecChanged: function(){},
        audioMixerInKbpsChanged: function(){},
        audioMixerInPpsChanged: function(){},
        audioMixerKbpsChanged: function(){},
        audioMixerOutKbpsChanged: function(){},
        audioMixerOutPpsChanged: function(){},
        audioMixerPpsChanged: function(){},
        audioNoiseGateChanged: function(){},
        audioOutboundPPSChanged: function(){},
        audioPacketLossChanged: function(){},
        audioPingChanged: function(){},
        audioSilentInboundPPSChanged: function(){},
        audioSilentOutboundPPSChanged: function(){},
        avatarCountChanged: function(){},
        avatarMixerInKbpsChanged: function(){},
        avatarMixerInPpsChanged: function(){},
        avatarMixerOutKbpsChanged: function(){},
        avatarMixerOutPpsChanged: function(){},
        avatarPingChanged: function(){},
        avatarSimulationTimeChanged: function(){},
        baselineOffsetChanged: function(double){},
        batchFrameTimeChanged: function(){},
        bgColorChanged: function(){},
        childAt: function(double,double){},
        childrenChanged: function(){},
        childrenRectChanged: function(QRectF){},
        clipChanged: function(bool){},
        contains: function(QPointF){},
        decimatedTextureCountChanged: function(){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        downloadLimitChanged: function(){},
        downloadUrlsChanged: function(){},
        downloadsChanged: function(){},
        downloadsPendingChanged: function(){},
        enabledChanged: function(){},
        engineFrameTimeChanged: function(){},
        entitiesPingChanged: function(){},
        entityPacketsInKbpsChanged: function(){},
        expandedChanged: function(){},
        focusChanged: function(bool){},
        forceActiveFocus: function(){},
        forceActiveFocus: function(Qt::FocusReason){},
        forceUpdateStats: function(){},
        gameLoopRateChanged: function(){},
        gameUpdateStatsChanged: function(){},
        glContextSwapchainMemoryChanged: function(){},
        gpuBufferMemoryChanged: function(){},
        gpuBuffersChanged: function(){},
        gpuFrameTimeChanged: function(){},
        gpuFreeMemoryChanged: function(){},
        gpuTextureExternalMemoryChanged: function(){},
        gpuTextureFramebufferMemoryChanged: function(){},
        gpuTextureMemoryChanged: function(){},
        gpuTextureMemoryPressureStateChanged: function(){},
        gpuTextureResidentMemoryChanged: function(){},
        gpuTextureResourceMemoryChanged: function(){},
        gpuTextureResourcePopulatedMemoryChanged: function(){},
        gpuTexturesChanged: function(){},
        grabToImage: function(QJSValue){},
        grabToImage: function(QJSValue,QSize){},
        heightChanged: function(){},
        implicitHeightChanged: function(){},
        implicitWidthChanged: function(){},
        itemConsideredChanged: function(){},
        itemOutOfViewChanged: function(){},
        itemRenderedChanged: function(){},
        itemTooSmallChanged: function(){},
        localElementsChanged: function(){},
        localInternalChanged: function(){},
        localLeavesChanged: function(){},
        lodStatusChanged: function(){},
        longframesChanged: function(){},
        longrendersChanged: function(){},
        longsubmitsChanged: function(){},
        mapFromGlobal: function(QQmlV4Function*){},
        mapFromItem: function(QQmlV4Function*){},
        mapToGlobal: function(QQmlV4Function*){},
        mapToItem: function(QQmlV4Function*){},
        materialSwitchesChanged: function(){},
        mbpsInChanged: function(){},
        mbpsOutChanged: function(){},
        messagePingChanged: function(){},
        myAvatarSendRateChanged: function(){},
        nextItemInFocusChain: function(){},
        nextItemInFocusChain: function(bool){},
        notUpdatedAvatarCountChanged: function(){},
        objectNameChanged: function(QString){},
        opacityChanged: function(){},
        packetInCountChanged: function(){},
        packetOutCountChanged: function(){},
        packetStatsChanged: function(){},
        parentChanged: function(QQuickItem*){},
        positionChanged: function(){},
        presentdroprateChanged: function(){},
        presentnewrateChanged: function(){},
        presentrateChanged: function(){},
        processingChanged: function(){},
        processingPendingChanged: function(){},
        qmlTextureMemoryChanged: function(){},
        quadsChanged: function(){},
        rectifiedTextureCountChanged: function(){},
        renderrateChanged: function(){},
        rotationChanged: function(){},
        scaleChanged: function(){},
        sendingModeChanged: function(){},
        serverCountChanged: function(){},
        serverElementsChanged: function(){},
        serverInternalChanged: function(){},
        serverLeavesChanged: function(){},
        shadowConsideredChanged: function(){},
        shadowOutOfViewChanged: function(){},
        shadowRenderedChanged: function(){},
        shadowTooSmallChanged: function(){},
        smoothChanged: function(bool){},
        speedChanged: function(){},
        stateChanged: function(QString){},
        stutterrateChanged: function(){},
        texturePendingTransfersChanged: function(){},
        timingExpandedChanged: function(){},
        timingStatsChanged: function(){},
        transformOriginChanged: function(TransformOrigin){},
        trianglesChanged: function(){},
        update: function(){},
        updatedAvatarCountChanged: function(){},
        visibleChanged: function(){},
        visibleChildrenChanged: function(){},
        widthChanged: function(){},
        windowChanged: function(QQuickWindow*){},
        xChanged: function(){},
        yChanged: function(){},
        yawChanged: function(){},
        zChanged: function(){},
        appdropped: 0,
        assetMbpsIn: 0,
        assetMbpsOut: 0,
        assetPing: 0,
        audioAudioInboundPPS: 0,
        audioMixerInKbps: 0,
        audioMixerInPps: 0,
        audioMixerKbps: 0,
        audioMixerOutKbps: 0,
        audioMixerOutPps: 0,
        audioMixerPps: 0,
        audioOutboundPPS: 0,
        audioPacketLoss: 0,
        audioPing: 0,
        audioSilentInboundPPS: 0,
        audioSilentOutboundPPS: 0,
        avatarCount: 0,
        avatarMixerInKbps: 0,
        avatarMixerInPps: 0,
        avatarMixerOutKbps: 0,
        avatarMixerOutPps: 0,
        avatarPing: 0,
        avatarSimulationTime: 0,
        baselineOffset: 0,
        batchFrameTime: 0,
        decimatedTextureCount: 0,
        downloadLimit: 0,
        downloads: 0,
        downloadsPending: 0,
        engineFrameTime: 0,
        entitiesPing: 0,
        entityPacketsInKbps: 0,
        gameLoopRate: 0,
        glContextSwapchainMemory: 0,
        gpuBufferMemory: 0,
        gpuBuffers: 0,
        gpuFrameTime: 0,
        gpuFreeMemory: 0,
        gpuTextureExternalMemory: 0,
        gpuTextureFramebufferMemory: 0,
        gpuTextureMemory: 0,
        gpuTextureResidentMemory: 0,
        gpuTextureResourceMemory: 0,
        gpuTextureResourcePopulatedMemory: 0,
        gpuTextures: 0,
        height: 0,
        implicitHeight: 0,
        implicitWidth: 0,
        itemConsidered: 0,
        itemOutOfView: 0,
        itemRendered: 0,
        itemTooSmall: 0,
        localElements: 0,
        localInternal: 0,
        localLeaves: 0,
        longframes: 0,
        longrenders: 0,
        longsubmits: 0,
        materialSwitches: 0,
        mbpsIn: 0,
        mbpsOut: 0,
        messagePing: 0,
        myAvatarSendRate: 0,
        notUpdatedAvatarCount: 0,
        opacity: 0,
        packetInCount: 0,
        packetOutCount: 0,
        presentdroprate: 0,
        presentnewrate: 0,
        presentrate: 0,
        processing: 0,
        processingPending: 0,
        qmlTextureMemory: 0,
        quads: 0,
        rectifiedTextureCount: 0,
        renderrate: 0,
        rotation: 0,
        scale: 0,
        serverCount: 0,
        serverElements: 0,
        serverInternal: 0,
        serverLeaves: 0,
        shadowConsidered: 0,
        shadowOutOfView: 0,
        shadowRendered: 0,
        shadowTooSmall: 0,
        speed: 0,
        stutterrate: 0,
        texturePendingTransfers: 0,
        transformOrigin: 0,
        triangles: 0,
        updatedAvatarCount: 0,
        width: 0,
        x: 0,
        y: 0,
        yaw: 0,
        z: 0,
        anchors: function(){
            return {
                alignWhenCentered: true,
                baselineChanged: function(){},
                baselineOffsetChanged: function(){},
                bottomChanged: function(){},
                bottomMarginChanged: function(){},
                centerAlignedChanged: function(){},
                centerInChanged: function(){},
                deleteLater: function(){},
                destroyed: function(){},
                destroyed: function(QObject*){},
                fillChanged: function(){},
                horizontalCenterChanged: function(){},
                horizontalCenterOffsetChanged: function(){},
                leftChanged: function(){},
                leftMarginChanged: function(){},
                marginsChanged: function(){},
                objectNameChanged: function(QString){},
                rightChanged: function(){},
                rightMarginChanged: function(){},
                topChanged: function(){},
                topMarginChanged: function(){},
                verticalCenterChanged: function(){},
                verticalCenterOffsetChanged: function(){},
                centerIn: null,
                fill: null,
                baselineOffset: 0,
                bottomMargin: 0,
                horizontalCenterOffset: 0,
                leftMargin: 0,
                margins: 0,
                rightMargin: 0,
                topMargin: 0,
                verticalCenterOffset: 0,
                baseline: function(){
                    return {
                    };
                },
                bottom: function(){
                    return {
                    };
                },
                horizontalCenter: function(){
                    return {
                    };
                },
                left: function(){
                    return {
                    };
                },
                right: function(){
                    return {
                    };
                },
                top: function(){
                    return {
                    };
                },
                verticalCenter: function(){
                    return {
                    };
                },
                objectName: ''
            };
        },
        baseline: function(){
            return {
            };
        },
        bottom: function(){
            return {
            };
        },
        children: function(){
            return {
            };
        },
        childrenRect: function(){
            return {
            };
        },
        data: function(){
            return {
            };
        },
        downloadUrls: function(){
            return {
            };
        },
        horizontalCenter: function(){
            return {
            };
        },
        layer: function(){
            return {
                enabled: true,
                mipmap: true,
                smooth: true,
                deleteLater: function(){},
                destroyed: function(){},
                destroyed: function(QObject*){},
                effectChanged: function(QQmlComponent*){},
                enabledChanged: function(bool){},
                formatChanged: function(QQuickShaderEffectSource::Format){},
                mipmapChanged: function(bool){},
                nameChanged: function(QByteArray){},
                objectNameChanged: function(QString){},
                sizeChanged: function(QSize){},
                smoothChanged: function(bool){},
                sourceRectChanged: function(QRectF){},
                textureMirroringChanged: function(QQuickShaderEffectSource::TextureMirroring){},
                wrapModeChanged: function(QQuickShaderEffectSource::WrapMode){},
                effect: null,
                format: 0,
                textureMirroring: 0,
                wrapMode: 0,
                samplerName: function(){
                    return {
                    };
                },
                sourceRect: function(){
                    return {
                    };
                },
                textureSize: function(){
                    return {
                    };
                },
                objectName: ''
            };
        },
        left: function(){
            return {
            };
        },
        parent: function(){
            return {
                NOT HANDLED: 0,
                NOT HANDLED: 1,
                NOT HANDLED: 2,
                NOT HANDLED: 3,
                NOT HANDLED: 4,
                NOT HANDLED: 5,
                NOT HANDLED: 6
            };
        },
        position: function(){
            return {
            };
        },
        resources: function(){
            return {
            };
        },
        right: function(){
            return {
            };
        },
        states: function(){
            return {
            };
        },
        top: function(){
            return {
            };
        },
        transform: function(){
            return {
            };
        },
        transformOriginPoint: function(){
            return {
            };
        },
        transitions: function(){
            return {
            };
        },
        verticalCenter: function(){
            return {
            };
        },
        visibleChildren: function(){
            return {
            };
        },
        audioCodec: '',
        audioNoiseGate: '',
        bgColor: '',
        gameUpdateStats: '',
        gpuTextureMemoryPressureState: '',
        lodStatus: '',
        monospaceFont: '',
        objectName: '',
        packetStats: '',
        sendingMode: '',
        state: '',
        timingStats: ''
        };
    }

function Steam(){
    return {
        running: true,
        destroyed: function(){},
        destroyed: function(QObject*){},
        isRunning: function(){},
        objectNameChanged: function(QString){},
        openInviteOverlay: function(){},
        objectName: ''
        };
    }

function Tablet(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        getTablet: function(QString){},
        objectNameChanged: function(QString){},
        playSound: function(TabletAudioEvents){},
        tabletNotification: function(){},
        objectName: ''
        };
    }

function tabletInterface(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        getTablet: function(QString){},
        objectNameChanged: function(QString){},
        playSound: function(TabletAudioEvents){},
        tabletNotification: function(){},
        objectName: ''
        };
    }

function TextureCache(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        dirty: function(){},
        getResource: function(QUrl){},
        getResource: function(QUrl,QUrl){},
        getResource: function(QUrl,QUrl,void*){},
        getResourceList: function(){},
        objectNameChanged: function(QString){},
        prefetch: function(QUrl){},
        prefetch: function(QUrl,int){},
        prefetch: function(QUrl,int,int){},
        prefetch: function(QUrl,void*){},
        spectatorCameraFramebufferReset: function(){},
        updateTotalSize: function(qlonglong){},
        numCached: 0,
        numTotal: 0,
        sizeCached: 0,
        sizeTotal: 0,
        objectName: ''
        };
    }

function Toolbars(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        getToolbar: function(QString){},
        objectNameChanged: function(QString){},
        objectName: ''
        };
    }

function TREE_SCALE(){
    return {
        };
    }

function UndoStack(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        objectNameChanged: function(QString){},
        pushCommand: function(QScriptValue,QScriptValue,QScriptValue,QScriptValue){},
        objectName: ''
        };
    }

function UserActivityLogger(){
    return {
        bubbleActivated: function(){},
        bubbleToggled: function(bool){},
        closedTablet: function(){},
        commerceEntityRezzed: function(QString,QString,QString){},
        commercePassphraseAuthenticationStatus: function(QString){},
        commercePassphraseEntry: function(QString){},
        commercePurchaseFailure: function(QString,QString,int,bool,QString){},
        commercePurchaseSuccess: function(QString,QString,int,bool){},
        commerceWalletSetupFinished: function(int,QString,int){},
        commerceWalletSetupProgress: function(int,QString,int,int,QString){},
        commerceWalletSetupStarted: function(int,QString,int,QString,QString){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        enabledEdit: function(){},
        logAction: function(QString){},
        logAction: function(QString,QVariantMap){},
        makeUserConnection: function(QString,bool){},
        makeUserConnection: function(QString,bool,QString){},
        objectNameChanged: function(QString){},
        openedMarketplace: function(){},
        openedTablet: function(bool){},
        palAction: function(QString,QString){},
        palOpened: function(float){},
        toggledAway: function(bool){},
        tutorialProgress: function(QString,int,float,float){},
        tutorialProgress: function(QString,int,float,float,QString){},
        tutorialProgress: function(QString,int,float,float,QString,int){},
        tutorialProgress: function(QString,int,float,float,QString,int,QString){},
        objectName: ''
        };
    }

function Users(){
    return {
        canKick: true,
        requestsDomainListData: true,
        avatarDisconnected: function(QUuid){},
        canKickChanged: function(bool){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        disableIgnoreRadius: function(){},
        enableIgnoreRadius: function(){},
        enteredIgnoreRadius: function(){},
        getAvatarGain: function(QUuid){},
        getCanKick: function(){},
        getIgnoreRadiusEnabled: function(){},
        getIgnoreStatus: function(QUuid){},
        getPersonalMuteStatus: function(QUuid){},
        ignore: function(QUuid){},
        ignore: function(QUuid,bool){},
        ignoreRadiusEnabledChanged: function(bool){},
        kick: function(QUuid){},
        mute: function(QUuid){},
        objectNameChanged: function(QString){},
        personalMute: function(QUuid){},
        personalMute: function(QUuid,bool){},
        requestUsernameFromID: function(QUuid){},
        setAvatarGain: function(QUuid,float){},
        toggleIgnoreRadius: function(){},
        usernameFromIDReply: function(QString,QString,QString,bool){},
        objectName: ''
        };
    }

function Uuid(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        fromString: function(QString){},
        generate: function(){},
        isEqual: function(QUuid,QUuid){},
        isNull: function(QUuid){},
        objectNameChanged: function(QString){},
        print: function(QString,QUuid){},
        toString: function(QUuid){},
        NULL: '',
        objectName: ''
        };
    }

function Vec3(){
    return {
        cross: function(glm::vec3,glm::vec3){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        distance: function(glm::vec3,glm::vec3){},
        dot: function(glm::vec3,glm::vec3){},
        equal: function(glm::vec3,glm::vec3){},
        fromPolar: function(float,float){},
        fromPolar: function(glm::vec3){},
        getAngle: function(glm::vec3,glm::vec3){},
        length: function(glm::vec3){},
        mix: function(glm::vec3,glm::vec3,float){},
        multiply: function(float,glm::vec3){},
        multiply: function(glm::vec3,float){},
        multiplyQbyV: function(glm::quat,glm::vec3){},
        multiplyVbyV: function(glm::vec3,glm::vec3){},
        normalize: function(glm::vec3){},
        objectNameChanged: function(QString){},
        orientedAngle: function(glm::vec3,glm::vec3,glm::vec3){},
        print: function(QString,glm::vec3){},
        reflect: function(glm::vec3,glm::vec3){},
        subtract: function(glm::vec3,glm::vec3){},
        sum: function(glm::vec3,glm::vec3){},
        toPolar: function(glm::vec3){},
        withinEpsilon: function(glm::vec3,glm::vec3,float){},
        FLOAT_MAX: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        FLOAT_MIN: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        FRONT: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        HALF: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        ONE: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        RIGHT: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        TWO: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UNIT_NEG_X: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UNIT_NEG_Y: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UNIT_NEG_Z: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UNIT_X: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UNIT_XY: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UNIT_XYZ: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UNIT_XZ: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UNIT_Y: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UNIT_YZ: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UNIT_Z: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        UP: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        ZERO: function(){
            return {
                x: 0,
                y: 0,
                z: 0
            };
        },
        objectName: ''
        };
    }

function Wallet(){
    return {
        destroyed: function(){},
        destroyed: function(QObject*){},
        getWalletStatus: function(){},
        objectNameChanged: function(QString){},
        ownershipVerificationFailed: function(QUuid){},
        ownershipVerificationSuccess: function(QUuid){},
        proveAvatarEntityOwnershipVerification: function(QUuid){},
        refreshWalletStatus: function(){},
        walletNotSetup: function(){},
        walletStatusChanged: function(){},
        walletStatus: 0,
        objectName: ''
        };
    }

function Window(){
    return {
        alert: function(){},
        alert: function(QString){},
        announcement: function(QString){},
        assetsDirChanged: function(QString){},
        browse: function(){},
        browse: function(QString){},
        browse: function(QString,QString){},
        browse: function(QString,QString,QString){},
        browseAssets: function(){},
        browseAssets: function(QString){},
        browseAssets: function(QString,QString){},
        browseAssets: function(QString,QString,QString){},
        browseAssetsAsync: function(){},
        browseAssetsAsync: function(QString){},
        browseAssetsAsync: function(QString,QString){},
        browseAssetsAsync: function(QString,QString,QString){},
        browseAsync: function(){},
        browseAsync: function(QString){},
        browseAsync: function(QString,QString){},
        browseAsync: function(QString,QString,QString){},
        browseChanged: function(QString){},
        browseDir: function(){},
        browseDir: function(QString){},
        browseDir: function(QString,QString){},
        browseDirAsync: function(){},
        browseDirAsync: function(QString){},
        browseDirAsync: function(QString,QString){},
        browseDirChanged: function(QString){},
        checkVersion: function(){},
        closeMessageBox: function(int){},
        confirm: function(){},
        confirm: function(QString){},
        connectionAdded: function(QString){},
        connectionError: function(QString){},
        copyToClipboard: function(QString){},
        destroyed: function(){},
        destroyed: function(QObject*){},
        displayAnnouncement: function(QString){},
        domainChanged: function(QString){},
        domainConnectionRefused: function(QString,int,QString){},
        geometryChanged: function(QRect){},
        getDeviceSize: function(){},
        hasFocus: function(){},
        isPhysicsEnabled: function(){},
        isPointOnDesktopWindow: function(QVariant){},
        makeConnection: function(bool,QString){},
        messageBoxClosed: function(int,int){},
        objectNameChanged: function(QString){},
        openFileChanged: function(QString){},
        openMessageBox: function(QString,QString,int,int){},
        processingGifCompleted: function(QString){},
        processingGifStarted: function(QString){},
        prompt: function(QString,QString){},
        promptAsync: function(){},
        promptAsync: function(QString){},
        promptAsync: function(QString,QString){},
        promptTextChanged: function(QString){},
        protocolSignature: function(){},
        raiseMainWindow: function(){},
        save: function(){},
        save: function(QString){},
        save: function(QString,QString){},
        save: function(QString,QString,QString){},
        saveAsync: function(){},
        saveAsync: function(QString){},
        saveAsync: function(QString,QString){},
        saveAsync: function(QString,QString,QString){},
        saveFileChanged: function(QString){},
        setDisplayTexture: function(QString){},
        setFocus: function(){},
        shareSnapshot: function(QString){},
        shareSnapshot: function(QString,QUrl){},
        showAssetServer: function(){},
        showAssetServer: function(QString){},
        snapshotShared: function(bool,QString){},
        stillSnapshotTaken: function(QString,bool){},
        svoImportRequested: function(QString){},
        takeSecondaryCameraSnapshot: function(){},
        takeSecondaryCameraSnapshot: function(QString){},
        takeSnapshot: function(){},
        takeSnapshot: function(bool){},
        takeSnapshot: function(bool,bool){},
        takeSnapshot: function(bool,bool,float){},
        takeSnapshot: function(bool,bool,float,QString){},
        updateMessageBox: function(int,QString,QString,int,int){},
        innerHeight: 0,
        innerWidth: 0,
        x: 0,
        y: 0,
        location: function(){
            return {
                isConnected: true,
                copyAddress: function(){},
                copyPath: function(){},
                deleteLater: function(){},
                destroyed: function(){},
                destroyed: function(QObject*){},
                goBack: function(){},
                goBackPossible: function(bool){},
                goForward: function(){},
                goForwardPossible: function(bool){},
                goToEntry: function(){},
                goToEntry: function(LookupTrigger){},
                goToLocalSandbox: function(){},
                goToLocalSandbox: function(QString){},
                goToLocalSandbox: function(QString,LookupTrigger){},
                goToUser: function(QString){},
                goToUser: function(QString,bool){},
                goToViewpointForPath: function(QString,QString){},
                handleLookupString: function(QString){},
                handleLookupString: function(QString,bool){},
                hostChanged: function(QString){},
                locationChangeRequired: function(glm::vec3,bool,glm::quat,bool){},
                lookupResultIsNotFound: function(){},
                lookupResultIsOffline: function(){},
                lookupResultsFinished: function(){},
                lookupShareableNameForDomainID: function(QUuid){},
                objectNameChanged: function(QString){},
                pathChangeRequired: function(QString){},
                possibleDomainChangeRequired: function(QString,ushort,QUuid){},
                possibleDomainChangeRequiredViaICEForID: function(QString,QUuid){},
                protocolVersion: function(){},
                refreshPreviousLookup: function(){},
                storeCurrentAddress: function(){},
                domainID: '',
                domainId: '',
                hostname: '',
                href: '',
                objectName: '',
                pathname: '',
                placename: '',
                protocol: ''
            };
        },
        objectName: ''
        };
    }

