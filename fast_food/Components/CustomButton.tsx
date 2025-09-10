import {View, Text, TouchableOpacity, ActivityIndicatorComponent} from 'react-native'
import React from 'react'
import { CustomButtonProps } from '@/type'
import cn from 'clsx'

const CustomButton = ({
    onPress,
    title="Click Me",
    style,
    textStyle,
    leftIcon,
    isLoading = false
}: CustomButtonProps) => {
    return (
        <TouchableOpacity className={cn('custom-btn', style)} onPress={onPress}>
            {leftIcon}

            <View className="flex-center flec-row">
                {isLoading ? (
                    <ActivityIndicatorComponent size='small' color='white'/>
                ): (
                    <Text className={cn('text-white-100 paragraph-semibold', textStyle)}>
                        {title}
                    </Text>
                )}

            </View>
        </TouchableOpacity>
    )
}
export default CustomButton
